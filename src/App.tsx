import { useEffect } from 'react'
import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { Background } from './components/Background'
import TargetCursor from './components/TargetCursor/TargetCursor'
import { Home } from './pages/Home'
import { Cv } from './pages/Cv'
import { Portfolio } from './pages/Portfolio'
import { Events } from './pages/Events'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Background />
      <TargetCursor targetSelector=".cursor-target" cursorColor="#ece7df" cursorColorOnTarget="#f3eee6" />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
