import React from 'react'
import BarberIllustration from './BarberIllustration'

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 retro-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg/90 to-dark-card/50"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-neon-pink rotate-45 animate-float opacity-20"></div>
      <div className="absolute top-40 right-20 w-16 h-16 border-2 border-neon-teal rounded-full animate-float opacity-30" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-neon-purple/20 rotate-12 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-script text-7xl md:text-8xl lg:text-9xl font-bold text-neon-pink animate-neon-flicker leading-none hero-neon-text">
                Hello
              </h1>
              <h1 className="font-script text-7xl md:text-8xl lg:text-9xl font-bold text-neon-cyan animate-neon-flicker leading-none hero-neon-text">
                Gorgeous
              </h1>
            </div>

            {/* Subheadline */}
            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-neon-white font-medium">
                Fresh cuts, fresh vibes
              </p>
              <p className="text-lg text-gray-300">
                Proper legends get proper cuts at Cannon Wharf
              </p>
            </div>

            {/* Location Badge */}
            <div className="inline-flex items-center space-x-2 bg-dark-card/50 border border-neon-teal/50 rounded-full px-6 py-3">
              <span className="text-neon-teal text-lg">📍</span>
              <span className="text-white font-medium">London • Cannon Wharf</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToContact}
                className="btn-neon px-8 py-4 rounded-full text-white font-bold text-lg uppercase tracking-wider transform hover:scale-105 transition-all duration-300"
              >
                Book Your Cut
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-neon-purple text-neon-purple px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-neon-purple hover:text-white transition-all duration-300"
              >
                See Services
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-pink">500+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-teal">5★</div>
                <div className="text-sm text-gray-400">Google Reviews</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-purple">3</div>
                <div className="text-sm text-gray-400">Years Strong</div>
              </div>
            </div>
          </div>

          {/* Right Column - Barber Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 rounded-full blur-3xl"></div>
              <BarberIllustration />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-pink rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-pink rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero