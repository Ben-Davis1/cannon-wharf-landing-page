import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })

  const services = [
    'Signature Cut',
    'Beard Artistry',
    'Fresh Fade',
    'Little Legends',
    'Full Service',
    'Special Occasion'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You could integrate with a booking system or email service
    alert('Thanks legend! We\'ll be in touch soon to confirm your appointment.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 retro-grid opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-retro text-4xl md:text-5xl font-bold mb-4">
            <span className="miami-text-gradient">GET IN TOUCH</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to become a legend? Book your appointment and let's make magic happen
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Quick Booking CTA */}
            <div className="card-neon p-8 rounded-xl text-center">
              <h3 className="font-retro text-2xl font-bold text-neon-pink mb-4">
                Quick Booking
              </h3>
              <p className="text-gray-300 mb-6">
                For instant bookings, give us a bell or slide into our DMs
              </p>
              <div className="space-y-4">
                <a 
                  href="tel:02079460958"
                  className="btn-neon block px-6 py-3 rounded-full text-white font-bold text-center uppercase tracking-wider"
                >
                  📞 020 7946 0958
                </a>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://instagram.com/cannonwharfbarbers" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border-2 border-neon-teal text-neon-teal px-4 py-2 rounded-full font-bold hover:bg-neon-teal hover:text-white transition-all duration-300"
                  >
                    📱 Instagram
                  </a>
                  <a 
                    href="https://facebook.com/cannonwharfbarbers" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border-2 border-neon-purple text-neon-purple px-4 py-2 rounded-full font-bold hover:bg-neon-purple hover:text-white transition-all duration-300"
                  >
                    👥 Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Hours */}
            <div className="space-y-6">
              {/* Location */}
              <div className="card-neon p-6 rounded-xl">
                <h4 className="font-retro text-xl font-bold text-neon-teal mb-4 flex items-center">
                  <span className="mr-3 text-2xl">📍</span>
                  Find Us
                </h4>
                <div className="text-gray-300 space-y-2">
                  <p className="font-semibold">Cannon Wharf Barbers</p>
                  <p>123 Cannon Wharf Road</p>
                  <p>London SE16 7LH</p>
                  <p className="text-sm text-gray-400 mt-3">
                    5 mins from Canada Water Station • Free street parking after 6pm
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="card-neon p-6 rounded-xl">
                <h4 className="font-retro text-xl font-bold text-neon-purple mb-4 flex items-center">
                  <span className="mr-3 text-2xl">🕒</span>
                  Opening Hours
                </h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-neon-cyan">9am - 7pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-neon-cyan">8am - 6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-neon-pink">10am - 4pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="card-neon p-8 rounded-xl">
            <h3 className="font-retro text-2xl font-bold text-center mb-6">
              <span className="miami-text-gradient">Book Your Session</span>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-bg border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-pink focus:ring-1 focus:ring-neon-pink transition-colors duration-300"
                  placeholder="What should we call you, legend?"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-bg border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-teal focus:ring-1 focus:ring-neon-teal transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Preferred Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-bg border border-gray-600 rounded-lg text-white focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors duration-300"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Tell us what you're after
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-bg border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors duration-300 resize-none"
                  placeholder="Any specific requests? Preferred time? Let us know what you're thinking..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-neon py-4 rounded-lg text-white font-bold text-lg uppercase tracking-wider transform hover:scale-105 transition-all duration-300"
              >
                Send Message & Book
              </button>
            </form>

            {/* Form Footer */}
            <p className="text-center text-sm text-gray-400 mt-6">
              We'll get back to you within 24 hours to confirm your appointment. 
              <br />
              <span className="text-neon-pink">Can't wait to make you look legendary!</span>
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-3xl opacity-20 animate-float">💌</div>
      <div className="absolute bottom-20 right-10 text-2xl opacity-20 animate-float" style={{animationDelay: '1s'}}>📞</div>
    </section>
  )
}

export default Contact