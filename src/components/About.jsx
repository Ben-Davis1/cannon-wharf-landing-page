import React from 'react'

const About = () => {
  const stats = [
    { number: '3+', label: 'Years of Excellence', icon: '🏆' },
    { number: '500+', label: 'Happy Legends', icon: '😎' },
    { number: '5★', label: 'Google Rating', icon: '⭐' },
    { number: '100%', label: 'Fresh Vibes', icon: '🔥' }
  ]

  const values = [
    {
      icon: '🎯',
      title: 'Precision',
      description: 'Every cut is crafted with meticulous attention to detail'
    },
    {
      icon: '🌟',
      title: 'Style',
      description: 'We bring that Miami heat to every single service'
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'Building relationships one haircut at a time'
    },
    {
      icon: '💯',
      title: 'Authenticity',
      description: 'Independent, genuine, and always keeping it real'
    }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-br from-dark-bg to-dark-card/20">
      {/* Background Elements */}
      <div className="absolute inset-0 retro-grid opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-neon-pink/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-teal/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div>
              <h2 className="font-retro text-4xl md:text-5xl font-bold mb-6">
                <span className="text-neon-pink">The</span>{' '}
                <span className="text-neon-teal">Story</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-neon-pink to-neon-teal mb-8"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                <span className="text-neon-pink font-bold">A new era for Cannon Wharf Barbers</span> - 
                independent, authentic, and always good for a laugh (and a sharp fade).
              </p>
              
              <p>
                We're not your typical London barbers. We've brought that{' '}
                <span className="text-neon-teal font-semibold">Miami Vice energy</span> to South London, 
                creating a space where legends come to look their absolute best.
              </p>
              
              <p>
                From fresh university graduates to seasoned City professionals, we treat every client 
                like the <span className="text-neon-purple font-semibold">absolute legend</span> they are. 
                Because when you look good, you feel good - and when you feel good, you conquer the world.
              </p>
              
              <p className="text-neon-cyan font-medium italic">
                "Proper cuts for proper legends" - that's not just our motto, that's our promise.
              </p>
            </div>

            {/* Call to Action */}
            <div className="pt-6">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-neon px-8 py-4 rounded-full text-white font-bold text-lg uppercase tracking-wider transform hover:scale-105 transition-all duration-300"
              >
                Join the Legend Club
              </button>
            </div>
          </div>

          {/* Right Column - Stats & Values */}
          <div className="space-y-12">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="card-neon p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-2 animate-float">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-neon-pink mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="font-retro text-2xl font-bold text-center mb-6">
                <span className="miami-text-gradient">What We Stand For</span>
              </h3>
              
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-dark-card/30 border border-gray-700/50 hover:border-neon-pink/50 transition-all duration-300"
                  >
                    <div className="text-2xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {value.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-dark-card/50 rounded-2xl p-8 neon-border">
            <blockquote className="text-2xl md:text-3xl font-script text-neon-cyan mb-4">
              "Every haircut tells a story. Every client becomes a legend."
            </blockquote>
            <p className="text-lg text-gray-400">
              - The Cannon Wharf Barbers Team
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 right-20 text-2xl opacity-20 animate-float">🌴</div>
      <div className="absolute bottom-32 left-20 text-xl opacity-20 animate-float" style={{animationDelay: '1s'}}>🕶️</div>
    </section>
  )
}

export default About