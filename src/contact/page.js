"use client";

import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this to a backend service
  };

  const contactInfo = [
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      title: "Phone",
      details: "(555) 123-4567",
      subtext: "Mon-Fri 8AM-6PM, Sat 9AM-4PM"
    },
    {
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Email",
      details: "info@novusremodeling.com",
      subtext: "We respond within 24 hours"
    },
    {
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
      title: "Office",
      details: "123 Main Street, Suite 200",
      subtext: "Your City, ST 12345"
    },
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Hours",
      details: "Monday - Friday: 8AM - 6PM",
      subtext: "Saturday: 9AM - 4PM, Sunday: Closed"
    }
  ];

  const services = [
    "Kitchen Remodeling",
    "Bathroom Renovation", 
    "Whole Home Renovation",
    "Basement Finishing",
    "Deck & Patio",
    "Room Addition",
    "Custom Carpentry",
    "Other"
  ];

  const budgetRanges = [
    "Under $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000", 
    "$50,000 - $100,000",
    "Over $100,000",
    "Not Sure Yet"
  ];

  const timelines = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Just exploring"
  ];

  return (
    <div className="font-sans min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-3xl font-light tracking-wide" style={{color: '#F29D35'}}>Novus</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-12">
              <a href="/" className="text-gray-600 hover:text-orange-500 transition-all duration-300 font-light text-lg relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/services" className="text-gray-600 hover:text-orange-500 transition-all duration-300 font-light text-lg relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/about" className="text-gray-600 hover:text-orange-500 transition-all duration-300 font-light text-lg relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/reviews" className="text-gray-600 hover:text-orange-500 transition-all duration-300 font-light text-lg relative group">
                Reviews
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/contact" className="text-orange-500 transition-all duration-300 font-medium text-lg relative">
                Contact
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500"></span>
              </a>
            </div>

            {/* Call Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-6">
              <a 
                href="tel:+15551234567" 
                className="hidden sm:inline-flex items-center text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{backgroundColor: '#F29D35'}} 
                onMouseEnter={(e) => e.target.style.backgroundColor = '#E8932F'} 
                onMouseLeave={(e) => e.target.style.backgroundColor = '#F29D35'}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (555) 123-4567
              </a>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden text-gray-600 hover:text-orange-500 focus:outline-none p-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100">
              <div className="px-4 py-6 space-y-4">
                <a href="/" className="block px-4 py-3 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-300 font-light">Home</a>
                <a href="/services" className="block px-4 py-3 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-300 font-light">Services</a>
                <a href="/about" className="block px-4 py-3 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-300 font-light">About</a>
                <a href="/reviews" className="block px-4 py-3 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-300 font-light">Reviews</a>
                <a href="/contact" className="block px-4 py-3 text-orange-500 bg-orange-50 rounded-lg font-medium">Contact</a>
                <a 
                  href="tel:+15551234567" 
                  className="block w-full text-center text-white px-6 py-3 rounded-full font-medium transition-all duration-300 mt-4"
                  style={{backgroundColor: '#F29D35'}}
                >
                  (555) 123-4567
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-green-50 via-white to-orange-50 relative overflow-hidden">
        {/* Abstract Shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-8">
              Get In Touch
            </div>
            <h1 className="text-7xl md:text-8xl font-extralight mb-10 text-gray-900 tracking-tight leading-tight">
              Contact Us
            </h1>
            <p className="text-2xl text-gray-600 mb-16 font-light leading-relaxed max-w-3xl mx-auto">
              Ready to transform your home? Let's discuss your project and bring your vision to life
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <a 
                href="tel:+15551234567" 
                className="inline-flex items-center justify-center px-10 py-5 bg-orange-500 text-white rounded-full font-medium text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call for Instant Quote
              </a>
              <a 
                href="#quote-form" 
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-gray-300 text-gray-700 rounded-full font-medium text-lg hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Multiple ways to reach us for your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl group-hover:bg-orange-50">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={info.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{info.title}</h3>
                  <p className="text-gray-900 font-medium mb-2">{info.details}</p>
                  <p className="text-gray-600 font-light text-sm">{info.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-light text-gray-900 mb-6">Request Your Free Estimate</h2>
              <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                Tell us about your project and we'll provide a detailed estimate within 24 hours
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((budget, index) => (
                        <option key={index} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Tell us about your project vision, specific requirements, or any questions you have..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-12 py-4 bg-orange-500 text-white rounded-full font-medium text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send My Request
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    We'll respond within 24 hours with your detailed estimate
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-900 mb-6">We Serve Your Area</h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Proudly serving homeowners throughout the Greater Metro Area
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-orange-50 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-light text-gray-900 mb-6">Complete Metro Coverage</h3>
            <p className="text-lg text-gray-600 font-light mb-8 max-w-2xl mx-auto">
              From downtown historic districts to suburban neighborhoods and rural properties, 
              we bring our expertise to every corner of our metro area.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 font-light">
              <div>✓ Downtown District</div>
              <div>✓ Midtown</div>
              <div>✓ East Side</div>
              <div>✓ West End</div>
              <div>✓ North Hills</div>
              <div>✓ South Bay</div>
              <div>✓ Riverside</div>
              <div>✓ Highland Park</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
            For urgent project needs or emergency consultations, call us directly. 
            We're here to help when you need us most.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="tel:+15551234567" 
              className="inline-flex items-center justify-center px-12 py-6 bg-white text-gray-900 rounded-full font-medium text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (555) 123-4567
            </a>
            <a 
              href="mailto:info@novusremodeling.com" 
              className="inline-flex items-center justify-center px-12 py-6 border-2 border-white text-white rounded-full font-medium text-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-light mb-4" style={{color: '#F29D35'}}>Novus</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Transforming homes with thoughtful design and expert craftsmanship.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-medium mb-4 text-gray-900">Quick Links</h4>
              <ul className="space-y-2 text-gray-600 font-light">
                <li><a href="/" className="hover:text-orange-500 transition-colors">Home</a></li>
                <li><a href="/services" className="hover:text-orange-500 transition-colors">Services</a></li>
                <li><a href="/about" className="hover:text-orange-500 transition-colors">About</a></li>
                <li><a href="/reviews" className="hover:text-orange-500 transition-colors">Reviews</a></li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <h4 className="text-lg font-medium mb-4 text-gray-900">Contact</h4>
              <div className="space-y-2 text-gray-600 font-light">
                <p>(555) 123-4567</p>
                <p>info@novusremodeling.com</p>
                <p>123 Main Street<br/>Your City, ST 12345</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-500 font-light">&copy; 2025 Novus Remodeling. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
