// Synthesized "wooden click" for the cursor snap — a short filtered noise
// transient plus a low triangle "thock" for body. No audio asset needed.
let ctx: AudioContext | null = null

function getCtx(): AudioContext | null {
  const Ctor = window.AudioContext || (window as any).webkitAudioContext
  if (!Ctor) return null
  if (!ctx) ctx = new Ctor()
  if (ctx.state === 'suspended') void ctx.resume()
  return ctx
}

export function playWoodClick() {
  const audio = getCtx()
  if (!audio) return
  const now = audio.currentTime

  const bufferSize = Math.floor(audio.sampleRate * 0.03)
  const buffer = audio.createBuffer(1, bufferSize, audio.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize)
  }
  const noise = audio.createBufferSource()
  noise.buffer = buffer

  const bandpass = audio.createBiquadFilter()
  bandpass.type = 'bandpass'
  bandpass.frequency.value = 1200
  bandpass.Q.value = 1.2

  const noiseGain = audio.createGain()
  noiseGain.gain.setValueAtTime(0.5, now)
  noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03)

  noise.connect(bandpass).connect(noiseGain).connect(audio.destination)

  const thock = audio.createOscillator()
  thock.type = 'triangle'
  thock.frequency.setValueAtTime(190, now)
  thock.frequency.exponentialRampToValueAtTime(90, now + 0.05)

  const thockGain = audio.createGain()
  thockGain.gain.setValueAtTime(0.35, now)
  thockGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06)

  thock.connect(thockGain).connect(audio.destination)

  noise.start(now)
  noise.stop(now + 0.03)
  thock.start(now)
  thock.stop(now + 0.06)
}
