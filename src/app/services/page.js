"use client";

import Image from "next/image";
import { useState } from "react";

export default function Services() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Kitchen Remodeling",
      description: "Transform your kitchen into a culinary masterpiece with expert design and renovation.",
      gradient: "from-orange-400 to-red-500",
      iconPath: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      price: "From $25k"
    },
    {
      title: "Bathroom Renovation", 
      description: "Create your personal spa retreat with luxury fixtures and thoughtful design.",
      gradient: "from-blue-400 to-cyan-500",
      iconPath: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11",
      price: "From $15k"
    },
    {
      title: "Whole Home Renovation",
      description: "Complete home transformation with comprehensive planning and execution.",
      gradient: "from-green-400 to-blue-500",
      iconPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      price: "From $75k"
    },
    {
      title: "Basement Finishing",
      description: "Convert your basement into valuable living space for family entertainment.",
      gradient: "from-purple-400 to-pink-500",
      iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      price: "From $20k"
    },
    {
      title: "Deck & Patio",
      description: "Extend your living space outdoors with beautiful decks and patios.",
      gradient: "from-emerald-400 to-teal-500",
      iconPath: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
      price: "From $10k"
    },
    {
      title: "Room Additions",
      description: "Add valuable space to your home with seamless room additions.",
      gradient: "from-amber-400 to-orange-500",
      iconPath: "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z M16 5l2.586-2.586a2 2 0 112.828 2.828L19 7l-3-2zM11 19H6.414a1 1 0 01-.707-.293L2 15V9.172a2 2 0 01.586-1.414L5 5.343",
      price: "From $40k"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "Free consultation to discuss your vision"
    },
    {
      step: "02", 
      title: "Design",
      description: "Detailed plans with 3D renderings"
    },
    {
      step: "03",
      title: "Build",
      description: "Expert construction with quality checkpoints"
    }
  ];

  return (
    <div className="font-sans min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logoNovus.jpg" 
                  alt="Novus Home Remodeling" 
                  width={60} 
                  height={60} 
                  className="rounded-lg mr-3"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-12">
              <Link href="/" className="text-orange-500 hover:text-orange-600 transition-all duration-300 font-light text-lg relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/services" className="text-orange-500 transition-all duration-300 font-medium text-lg relative">
                Services
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500"></span>
              </Link>
              <Link href="/about" className="text-orange-500 hover:text-orange-600 transition-all duration-300 font-light text-lg relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/reviews" className="text-orange-500 hover:text-orange-600 transition-all duration-300 font-light text-lg relative group">
                Reviews
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="text-orange-500 hover:text-orange-600 transition-all duration-300 font-light text-lg relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
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
                className="md:hidden text-orange-500 hover:text-orange-600 focus:outline-none p-2 rounded-lg hover:bg-orange-50 transition-all duration-300"
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
            <div className="md:hidden bg-white border-t border-gray-100">
              <div className="px-4 py-6 space-y-4">
                <a href="/" className="block px-4 py-3 text-orange-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300 font-light">Home</a>
                <a href="/services" className="block px-4 py-3 text-orange-600 bg-orange-50 rounded-lg font-medium">Services</a>
                <a href="/about" className="block px-4 py-3 text-orange-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300 font-light">About</a>
                <a href="/reviews" className="block px-4 py-3 text-orange-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300 font-light">Reviews</a>
                <a href="/contact" className="block px-4 py-3 text-orange-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300 font-light">Contact</a>
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
      <section className="pt-40 pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-8">
              Premium Home Remodeling Services
            </div>
            <h1 className="text-7xl md:text-8xl font-extralight mb-10 text-gray-900 tracking-tight leading-tight">
              Our Services
            </h1>
            <p className="text-2xl text-gray-600 mb-16 font-light leading-relaxed max-w-3xl mx-auto">
              We transform homes with thoughtful design and expert craftsmanship, creating spaces that inspire and delight
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-2xl border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl overflow-hidden h-full">
                  {/* Image/Icon Section */}
                  <div className={`h-48 bg-gradient-to-br ${service.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                    <svg 
                      className="w-16 h-16 text-white relative z-10" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
                    </svg>
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white bg-opacity-10"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-white bg-opacity-20"></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8">
                    <h3 className="text-2xl font-medium text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium" style={{color: '#F29D35'}}>{service.price}</span>
                      <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-orange-400 group-hover:bg-orange-50 transition-all duration-300">
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600 font-light">Simple, transparent process</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
              {process.map((step, index) => (
                <div key={index} className="flex-1 text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-light text-xl mx-auto mb-6"
                    style={{backgroundColor: '#F29D35'}}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Begin?
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto">
            Let's discuss your project and bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="/contact" 
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </a>
            <a 
              href="tel:+15551234567" 
              className="border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-light mb-4" style={{color: '#F29D35'}}>Novus</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Transforming homes with thoughtful design and expert craftsmanship.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-medium mb-4 text-gray-900">Services</h4>
              <ul className="space-y-2 text-gray-600 font-light">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Kitchen Remodeling</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Bathroom Renovation</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Whole Home Renovation</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Room Additions</a></li>
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
