import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import TopNavbar from './components/TopNavbar/TopNavbar'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import Documentation from './pages/Documentation/Documentation'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNav() {
    console.log('Toglle');
    setIsNavOpen(prev => !prev);
  }

  return (
    <>
      <TopNavbar onNavClick={toggleNav} status={isNavOpen} />
      <Sidebar onNavClick={toggleNav} status={isNavOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/doc" element={<Documentation />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
