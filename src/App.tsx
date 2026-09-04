import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { GlitchBackground } from './components/GlitchBackground'
import TargetCursor from './components/TargetCursor/TargetCursor'
import { Home } from './pages/Home'
import { Cv } from './pages/Cv'
import { Portfolio } from './pages/Portfolio'

export function App() {
  return (
    <BrowserRouter>
      <GlitchBackground />
      <TargetCursor targetSelector=".cursor-target" cursorColor="#F58800" cursorColorOnTarget="#FBBC24" />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
