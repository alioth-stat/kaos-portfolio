import puppeteer from 'puppeteer'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const jobs = [
  { src: 'cv-src/general.html', out: 'public/cv-general-alejandro-polo.pdf' },
  { src: 'cv-src/marketing.html', out: 'public/cv-marketing-alejandro-polo.pdf' },
]

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})
try {
  for (const job of jobs) {
    const page = await browser.newPage()
    const fileUrl = 'file://' + path.join(root, job.src)
    await page.goto(fileUrl, { waitUntil: 'networkidle0' })
    await page.pdf({
      path: path.join(root, job.out),
      format: 'A4',
      printBackground: true,
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
    })
    await page.close()
    console.log('Generated', job.out)
  }
} finally {
  await browser.close()
}
