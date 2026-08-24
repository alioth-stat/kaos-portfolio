import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { CvGeneral } from './pages/CvGeneral'
import { CvMarketing } from './pages/CvMarketing'
import { Portfolio } from './pages/Portfolio'
import { Concept } from './pages/Concept'

export function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv/general" element={<CvGeneral />} />
        <Route path="/cv/marketing" element={<CvMarketing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/concept" element={<Concept />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
