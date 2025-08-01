import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-bg/95 backdrop-blur-md shadow-neon-pink' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-neon-pink to-neon-purple rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">✂</span>
            </div>
            <div>
              <h1 className="font-retro font-bold text-xl text-neon-pink">
                CANNON WHARF
              </h1>
              <p className="text-neon-teal text-sm font-medium">BARBERS</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-neon-pink transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-neon-teal transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-neon-purple transition-colors duration-300 font-medium"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-neon px-6 py-2 rounded-full text-white font-bold text-sm uppercase tracking-wider"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-neon-pink text-2xl">
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header