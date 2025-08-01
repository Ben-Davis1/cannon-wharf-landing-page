import React from 'react'

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://instagram.com/cannonwharfbarbers',
      color: 'neon-pink'
    },
    {
      name: 'Facebook',
      icon: '👥',
      url: 'https://facebook.com/cannonwharfbarbers',
      color: 'neon-teal'
    },
    {
      name: 'TikTok',
      icon: '🎵',
      url: 'https://tiktok.com/@cannonwharfbarbers',
      color: 'neon-purple'
    },
    {
      name: 'Google',
      icon: '⭐',
      url: 'https://g.page/cannonwharfbarbers',
      color: 'neon-cyan'
    }
  ]

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Book Now', href: '#contact' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id) => {
    document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-dark-card to-dark-bg border-t border-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0 retro-grid opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-neon-pink to-neon-purple rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">✂</span>
              </div>
              <div>
                <h3 className="font-retro font-bold text-2xl text-neon-pink animate-neon-flicker">
                  CANNON WHARF
                </h3>
                <p className="text-neon-teal text-lg font-medium">BARBERS</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Bringing Miami Vice vibes to South London. Independent, authentic, 
              and always good for a laugh (and a sharp fade).
            </p>

            {/* Location */}
            <div className="flex items-start space-x-3 text-gray-300">
              <span className="text-neon-teal text-xl">📍</span>
              <div>
                <p className="font-semibold text-white">Cannon Wharf Barbers</p>
                <p>123 Cannon Wharf Road</p>
                <p>London SE16 7LH</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-center space-x-3 text-gray-300">
              <span className="text-neon-pink text-xl">📞</span>
              <a 
                href="tel:02079460958" 
                className="font-semibold text-white hover:text-neon-pink transition-colors duration-300"
              >
                020 7946 0958
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-retro text-xl font-bold text-neon-teal">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-neon-pink transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h4 className="font-retro text-xl font-bold text-neon-purple">Opening Hours</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-neon-cyan">9am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-neon-cyan">8am - 6pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-neon-pink">10am - 4pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center mb-12">
          <h4 className="font-retro text-2xl font-bold mb-6">
            <span className="miami-text-gradient">Follow the Legend</span>
          </h4>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-16 h-16 border-2 border-${social.color} text-${social.color} rounded-full flex items-center justify-center text-2xl hover:bg-${social.color} hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-${social.color}`}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-400 mt-4">
            Tag us in your fresh cuts! We love seeing our legends looking legendary
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; 2024 Cannon Wharf Barbers. All rights reserved.</p>
              <p className="text-sm mt-1">
                Crafted with 💖 and Miami Vice vibes in London
              </p>
              <p className="text-sm mt-1">
                Website created by{' '}
                <a 
                  href="https://bensai.co.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neon-teal hover:text-neon-pink transition-colors duration-300 font-medium underline hover:no-underline cursor-pointer z-10"
                >
                  Bensai
                </a>
              </p>
            </div>

            {/* Playful Signoff */}
            <div className="text-center md:text-right">
              <p className="font-script text-2xl text-neon-pink animate-neon-flicker">
                Stay Gorgeous, London!
              </p>
              <p className="text-gray-400 text-sm mt-1">
                See you soon, legends ✂️
              </p>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 btn-neon rounded-full flex items-center justify-center text-white text-xl transform hover:scale-110 transition-all duration-300 z-50"
          title="Back to top"
        >
          ↑
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-32 left-10 text-2xl opacity-10 animate-float">🌴</div>
      <div className="absolute top-20 right-20 text-xl opacity-10 animate-float" style={{animationDelay: '1s'}}>💈</div>
    </footer>
  )
}

export default Footer