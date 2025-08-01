import React from 'react'

const Services = () => {
  const services = [
    {
      icon: '✂️',
      title: 'Signature Cuts',
      description: 'Classic to contemporary styles that make you look like the legend you are',
      price: 'From £25',
      color: 'neon-pink',
      features: ['Consultation', 'Wash & Style', 'Hot Towel Finish']
    },
    {
      icon: '🧔',
      title: 'Beard Artistry',
      description: 'Precision beard trims and sculpting for that perfect Miami Vice swagger',
      price: 'From £18',
      color: 'neon-teal',
      features: ['Beard Trim', 'Hot Towel Treatment', 'Beard Oil Finish']
    },
    {
      icon: '🔥',
      title: 'Fresh Fades',
      description: 'Clean fades that transition smoother than a Miami sunset',
      price: 'From £22',
      color: 'neon-purple',
      features: ['Skin Fade', 'Scissor Blend', 'Line Up']
    },
    {
      icon: '👶',
      title: 'Little Legends',
      description: 'Special cuts for the next generation of style icons',
      price: 'From £15',
      color: 'neon-cyan',
      features: ['Patient Approach', 'Fun Experience', 'Parent Friendly']
    },
    {
      icon: '💈',
      title: 'Full Service',
      description: 'The complete experience - cut, beard, style, and attitude adjustment',
      price: 'From £40',
      color: 'neon-pink',
      features: ['Cut & Beard', 'Hot Towel', 'Styling', 'Premium Products']
    },
    {
      icon: '🎭',
      title: 'Special Occasions',
      description: 'Wedding, events, or just feeling fancy? We got you covered, mate',
      price: 'From £35',
      color: 'neon-teal',
      features: ['Event Styling', 'Premium Service', 'Photography Ready']
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      'neon-pink': 'border-neon-pink text-neon-pink',
      'neon-teal': 'border-neon-teal text-neon-teal',
      'neon-purple': 'border-neon-purple text-neon-purple',
      'neon-cyan': 'border-neon-cyan text-neon-cyan'
    }
    return colorMap[color] || colorMap['neon-pink']
  }

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 retro-grid opacity-5"></div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-retro text-4xl md:text-5xl font-bold mb-4">
            <span className="miami-text-gradient">OUR SERVICES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From classic cuts to modern fades, we bring that Miami heat to South London
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card-neon p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${getColorClasses(service.color)}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Icon */}
              <div className="text-4xl mb-4 text-center animate-float">
                {service.icon}
              </div>
              
              {/* Service Title */}
              <h3 className="font-retro text-xl font-bold mb-3 text-center">
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className="text-gray-300 text-center mb-4 min-h-[3rem]">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <span className="text-current mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Price */}
              <div className="text-center pt-4 border-t border-gray-700">
                <span className="font-bold text-lg">{service.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-dark-card/50 rounded-2xl p-8 neon-border">
          <h3 className="font-retro text-2xl font-bold text-neon-pink mb-4">
            Ready for Your Glow-Up?
          </h3>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Book your appointment and join the ranks of London's best-dressed legends
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-neon px-8 py-3 rounded-full text-white font-bold uppercase tracking-wider"
            >
              Book Appointment
            </button>
            <button className="border-2 border-neon-teal text-neon-teal px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-neon-teal hover:text-white transition-all duration-300">
              Call Us: 020 7946 0958
            </button>
          </div>
        </div>
      </div>

      {/* Floating Service Icons */}
      <div className="absolute top-20 left-10 text-3xl opacity-20 animate-float">💈</div>
      <div className="absolute bottom-20 right-10 text-2xl opacity-20 animate-float" style={{animationDelay: '1s'}}>✂️</div>
      <div className="absolute top-1/2 right-20 text-xl opacity-20 animate-float" style={{animationDelay: '2s'}}>🔥</div>
    </section>
  )
}

export default Services