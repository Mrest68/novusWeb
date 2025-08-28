"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
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
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-orange-500 transition-colors font-medium hover:text-orange-600">Home</Link>
              <Link href="/services" className="text-orange-500 transition-colors font-medium hover:text-orange-600">Services</Link>
              <Link href="/about" className="text-orange-500 transition-colors font-medium hover:text-orange-600">About</Link>
              <Link href="/reviews" className="text-orange-500 transition-colors font-medium hover:text-orange-600">Reviews</Link>
              <Link href="/contact" className="text-orange-500 transition-colors font-medium hover:text-orange-600">Contact</Link>
            </div>

            {/* Call Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              <a href="tel:+15551234567" className="hidden sm:inline-block text-white px-6 py-2 rounded-lg font-semibold transition-colors" style={{backgroundColor: '#F29D35'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#E8932F'} onMouseLeave={(e) => e.target.style.backgroundColor = '#F29D35'}>
                (555) 123-4567
              </a>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden text-orange-500 focus:outline-none transition-colors hover:text-orange-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 bg-white">
              <div className="flex flex-col space-y-4 px-4">
                <a
                  href="/"
                  className="text-orange-500 transition-colors font-medium hover:text-orange-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="/services"
                  className="text-orange-500 transition-colors font-medium hover:text-orange-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="/about"
                  className="text-orange-500 transition-colors font-medium hover:text-orange-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="/reviews"
                  className="text-orange-500 transition-colors font-medium hover:text-orange-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reviews
                </a>
                <a
                  href="/contact"
                  className="text-orange-500 transition-colors font-medium hover:text-orange-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="tel:+15551234567"
                  className="text-white px-6 py-2 rounded-lg font-semibold transition-colors text-center sm:hidden"
                  style={{backgroundColor: '#F29D35'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#E8932F'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#F29D35'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  (555) 123-4567
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main id="home" className="relative min-h-screen flex items-center pt-20">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/imageBack.jpg')"
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Premium Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                  <span className="text-white font-medium text-sm tracking-wide">South Florida Remodeling Experts</span>
                </div>

                <div className="relative">
                  <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
                    <span className="block">
                      <span className="text-white">
                        NOVUS
                      </span>
                    </span>
                    <span className="block mt-1">
                      <span className="text-white font-light">
                        Home
                      </span>
                      <span 
                        className="ml-4 font-bold"
                        style={{color: '#F29D35'}}
                      >
                        REMODELING
                      </span>
                    </span>
                  </h1>
                </div>

                <h2 className="text-xl lg:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl">
                  <span className="text-orange-300 font-medium">Transforming Dreams into Reality</span>
                  <br />
                  Premium Construction & Design Excellence Since 2009
                </h2>
              </div>
              
              {/* Services List */}
              <ul className="space-y-4 text-lg text-gray-200">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-4" style={{backgroundColor: '#F29D35'}}></div>
                  Kitchen & Bathroom Renovations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-4" style={{backgroundColor: '#F29D35'}}></div>
                  Custom Home Additions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-4" style={{backgroundColor: '#F29D35'}}></div>
                  Basement Finishing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-4" style={{backgroundColor: '#F29D35'}}></div>
                  Exterior Renovations
                </li>
              </ul>

              <div className="flex gap-4 pt-4">
                <a 
                  href="/contact#quote-form"
                  className="text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
                  style={{backgroundColor: '#F29D35'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#E8932F'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#F29D35'}
                >
                  Get Free Quote
                </a>
                <a 
                  href="/services"
                  className="px-8 py-3 rounded-lg font-semibold transition-colors border-2 text-white"
                  style={{borderColor: '#F29D35'}}
                  onMouseEnter={(e) => {e.target.style.backgroundColor = '#F29D35'; e.target.style.color = 'white'}}
                  onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'white'}}
                >
                  View Portfolio
                </a>
              </div>
            </div>

            {/* Right Column - Image with Frame */}
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/20">
                <div className="bg-white/95 p-2 rounded-xl shadow-inner">
                  <Image
                    src="/bathroom-Herosamaple.webp"
                    alt="Novus Home Remodeling Showcase"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg object-cover"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-xl" style={{backgroundColor: '#F29D35', opacity: 0.3}}></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full blur-xl" style={{backgroundColor: '#F29D35', opacity: 0.2}}></div>
              </div>
              
              {/* Call Now Phone Number */}
              <div className="text-center mt-6">
                <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  Call Now
                </h1>
                <a href="tel:+15551234567" className="text-3xl lg:text-4xl font-bold transition-colors" style={{color: '#F29D35'}} onMouseEnter={(e) => e.target.style.color = '#E8932F'} onMouseLeave={(e) => e.target.style.color = '#F29D35'}>
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Reviews & Badges Banner */}
      <section id="reviews" style={{backgroundColor: '#F2F2F2'}} className="dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Trusted by Homeowners Across the Region
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              See what our satisfied customers are saying
            </p>
          </div>

          {/* Badges Row */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="flex items-center space-x-2 bg-yellow-50 dark:bg-yellow-900/20 px-4 py-2 rounded-lg">
              <div className="flex text-yellow-400">
                {'★'.repeat(5)}
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">Google Reviews</span>
            </div>
            
            <div className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A+</span>
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">BBB Accredited</span>
            </div>

            <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-lg">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">Licensed & Insured</span>
            </div>

            <div className="flex items-center space-x-2 bg-purple-50 dark:bg-purple-900/20 px-4 py-2 rounded-lg">
              <div className="flex text-purple-400">
                {'★'.repeat(5)}
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">Angie's List</span>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="flex text-yellow-400 mb-3">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                "Novus transformed our outdated kitchen into a modern masterpiece. The attention to detail and quality of work exceeded our expectations!"
              </p>
              <div className="text-sm">
                <p className="font-semibold text-gray-900 dark:text-white">Sarah M.</p>
                <p className="text-gray-500 dark:text-gray-400">Kitchen Renovation</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="flex text-yellow-400 mb-3">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                "Professional, reliable, and skilled. Our bathroom renovation was completed on time and within budget. Highly recommend!"
              </p>
              <div className="text-sm">
                <p className="font-semibold text-gray-900 dark:text-white">Mike R.</p>
                <p className="text-gray-500 dark:text-gray-400">Bathroom Remodel</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="flex text-yellow-400 mb-3">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                "From design to completion, Novus made our home addition seamless. The craftsmanship is outstanding and the team was wonderful to work with."
              </p>
              <div className="text-sm">
                <p className="font-semibold text-gray-900 dark:text-white">Jennifer L.</p>
                <p className="text-gray-500 dark:text-gray-400">Home Addition</p>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
            <div>
              <div className="text-3xl font-bold" style={{color: '#F29D35'}}>500+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{color: '#F29D35'}}>15+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{color: '#F29D35'}}>4.9/5</div>
              <div className="text-gray-600 dark:text-gray-400">Customer Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{color: '#F29D35'}}>100%</div>
              <div className="text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Remodeling Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From concept to completion, we bring your vision to life with expert craftsmanship and attention to detail
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Kitchen Remodeling - Featured */}
            <div className="lg:col-span-2 group relative overflow-hidden rounded-2xl text-white p-8 lg:p-12 hover:scale-105 transition-transform duration-300" style={{background: `linear-gradient(135deg, #F29D35 0%, #E8932F 100%)`}}>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">Kitchen Remodeling</h3>
                <p className="mb-6 text-lg" style={{color: 'rgba(255,255,255,0.9)'}}>
                  Transform the heart of your home with custom cabinetry, premium countertops, and modern appliances.
                </p>
                <ul className="space-y-2 mb-6" style={{color: 'rgba(255,255,255,0.9)'}}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Custom Cabinet Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Premium Countertops
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Modern Appliance Integration
                  </li>
                </ul>
                <a 
                  href="/services"
                  className="bg-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  style={{color: '#F29D35'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#F2F2F2'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                >
                  Learn More
                </a>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            </div>

            {/* Bathroom Renovation */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Bathroom Renovation</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Create your personal spa with luxury fixtures, custom tile work, and modern amenities.
              </p>
              <button 
                className="font-semibold transition-colors flex items-center"
                style={{color: '#F29D35'}}
                onMouseEnter={(e) => e.target.style.color = '#E8932F'}
                onMouseLeave={(e) => e.target.style.color = '#F29D35'}
              >
                Explore Options
                <span className="ml-2">→</span>
              </button>
            </div>

            {/* Home Additions */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Home Additions</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Expand your living space with seamless additions that blend perfectly with your existing home.
              </p>
              <button 
                className="font-semibold transition-colors flex items-center"
                style={{color: '#F29D35'}}
                onMouseEnter={(e) => e.target.style.color = '#E8932F'}
                onMouseLeave={(e) => e.target.style.color = '#F29D35'}
              >
                View Projects
                <span className="ml-2">→</span>
              </button>
            </div>

            {/* Basement Finishing */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{background: 'linear-gradient(135deg, #F29D35 0%, #E8932F 100%)'}}>
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Basement Finishing</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Transform unused space into functional living areas, home offices, or entertainment rooms.
              </p>
              <a 
                href="/contact#quote-form"
                className="font-semibold transition-colors flex items-center"
                style={{color: '#F29D35'}}
                onMouseEnter={(e) => e.target.style.color = '#E8932F'}
                onMouseLeave={(e) => e.target.style.color = '#F29D35'}
              >
                Get Started
                <span className="ml-2">→</span>
              </a>
            </div>

            {/* Exterior Renovations */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{background: 'linear-gradient(135deg, #F29D35 0%, #E8932F 100%)'}}>
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Exterior Renovations</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Enhance curb appeal with siding, roofing, windows, and outdoor living spaces.
              </p>
              <button 
                className="font-semibold transition-colors flex items-center"
                style={{color: '#F29D35'}}
                onMouseEnter={(e) => e.target.style.color = '#E8932F'}
                onMouseLeave={(e) => e.target.style.color = '#F29D35'}
              >
                See Examples
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
              Ready to start your remodeling project?
            </p>
            <button 
              className="text-white px-10 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              style={{backgroundColor: '#F29D35'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#E8932F'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#F29D35'}
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Two Column Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-8 rounded-3xl shadow-xl">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                    alt="Professional home renovation showcase"
                    width={600}
                    height={450}
                    className="w-full h-auto rounded-xl object-cover"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full" style={{backgroundColor: '#F29D35', opacity: 0.2}}></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full" style={{backgroundColor: '#F29D35', opacity: 0.3}}></div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 rounded-full" style={{backgroundColor: '#F29D35', opacity: 0.15}}></div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{color: '#F29D35'}}>15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                Why Choose Novus for Your Remodeling Project?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                With over 15 years of experience in home remodeling, Novus combines traditional craftsmanship with modern innovation. Our team of licensed professionals is committed to delivering exceptional results that exceed your expectations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0" style={{backgroundColor: '#F29D35'}}>
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Expert Craftsmanship</h3>
                    <p className="text-gray-600 dark:text-gray-400">Our skilled professionals bring decades of experience to every project.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0" style={{backgroundColor: '#F29D35'}}>
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Transparent Pricing</h3>
                    <p className="text-gray-600 dark:text-gray-400">No hidden costs or surprises - detailed estimates and clear communication.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0" style={{backgroundColor: '#F29D35'}}>
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Quality Materials</h3>
                    <p className="text-gray-600 dark:text-gray-400">We use only premium materials and work with trusted suppliers.</p>
                  </div>
                </div>
              </div>
              
              {/* Call to Action Card */}
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl mt-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Contact us today for a free consultation and detailed estimate for your remodeling project.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4" style={{backgroundColor: '#F29D35'}}>
                      <span className="text-white font-bold">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Call Us</p>
                      <p className="text-gray-600 dark:text-gray-400">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4" style={{backgroundColor: '#F29D35'}}>
                      <span className="text-white font-bold">✉️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Email Us</p>
                      <p className="text-gray-600 dark:text-gray-400">info@novusremodeling.com</p>
                    </div>
                  </div>
                </div>
                <button 
                  className="w-full text-white py-3 rounded-lg font-semibold transition-colors mt-6"
                  style={{backgroundColor: '#F29D35'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#E8932F'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#F29D35'}
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="bg-gray-900 dark:bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">Our Process</h2>
              <p className="text-gray-300 leading-relaxed">
                From initial consultation to final walkthrough, we guide you through every step of your remodeling journey with clear communication and expert project management.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-3">Quality Guarantee</h2>
              <p className="text-gray-300 leading-relaxed">
                All our work comes with comprehensive warranties and our commitment to excellence. We stand behind every project with full satisfaction guarantees.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-3">Local Expertise</h2>
              <p className="text-gray-300 leading-relaxed">
                As a locally owned business, we understand the unique needs of homeowners in our community and are committed to building lasting relationships.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-3">Licensed & Insured</h2>
              <p className="text-gray-300 leading-relaxed">
                Fully licensed, bonded, and insured for your peace of mind. We maintain all necessary certifications and comply with local building codes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Two Column Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Building Dreams Into Reality
              </h1>
              <h2 className="text-xl lg:text-2xl font-semibold" style={{color: '#F29D35'}}>
                Your Vision, Our Expertise, Exceptional Results
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  At Novus, we believe that every home tells a story. Our mission is to help you write the next chapter with thoughtful design, superior craftsmanship, and unwavering attention to detail.
                </p>
                <p>
                  From the initial consultation to the final reveal, we work closely with you to ensure every element reflects your lifestyle and exceeds your expectations. Our team of experienced professionals brings decades of combined expertise to transform your space into something truly extraordinary.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  className="text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
                  style={{backgroundColor: '#F29D35'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#E8932F'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#F29D35'}
                >
                  Start Your Project
                </button>
                <button 
                  className="px-8 py-3 rounded-lg font-semibold transition-colors border-2"
                  style={{borderColor: '#F29D35', color: '#F29D35'}}
                  onMouseEnter={(e) => {e.target.style.backgroundColor = '#F29D35'; e.target.style.color = 'white'}}
                  onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#F29D35'}}
                >
                  Download Portfolio
                </button>
              </div>
            </div>

            {/* Right Column - Oval Image Holder */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-8 rounded-3xl shadow-xl">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-lg">
                  <div 
                    className="w-full h-80 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-full flex items-center justify-center shadow-inner"
                    style={{
                      background: 'linear-gradient(135deg, #F29D35 0%, #E8932F 100%)',
                      clipPath: 'ellipse(80% 100% at 50% 50%)'
                    }}
                  >
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="w-8 h-8 bg-white rounded-lg"></div>
                      </div>
                      <p className="text-lg font-semibold">Image Placeholder</p>
                      <p className="text-sm opacity-80">600 x 450</p>
                    </div>
                  </div>
                </div>
                {/* Professional decorative elements */}
                <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full" style={{backgroundColor: '#F29D35', opacity: 0.2}}></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full" style={{backgroundColor: '#F29D35', opacity: 0.3}}></div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 rounded-full" style={{backgroundColor: '#F29D35', opacity: 0.15}}></div>
              </div>
              
              {/* Professional stats overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{color: '#F29D35'}}>500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero Picture */}
            <div className="relative mb-12">
              <div className="relative inline-block">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-8 rounded-3xl shadow-2xl">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                    <div 
                      className="w-96 h-96 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-2xl flex items-center justify-center shadow-inner"
                      style={{
                        background: 'linear-gradient(135deg, #F29D35 0%, #E8932F 100%)'
                      }}
                    >
                      <div className="text-center text-white">
                        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <div className="w-10 h-10 bg-white rounded-xl"></div>
                        </div>
                        <p className="text-xl font-bold mb-2">About Novus</p>
                        <p className="text-lg font-semibold">Square Placeholder</p>
                        <p className="text-sm opacity-80">800 x 500</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements around the image */}
                <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full blur-xl" style={{backgroundColor: '#F29D35', opacity: 0.1}}></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-xl" style={{backgroundColor: '#F29D35', opacity: 0.15}}></div>
                <div className="absolute top-1/4 -right-12 w-16 h-16 rounded-full blur-lg" style={{backgroundColor: '#F29D35', opacity: 0.2}}></div>
              </div>
            </div>

            {/* Content Under Picture */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                About <span style={{color: '#F29D35'}}>Novus</span>
              </h1>
              <h2 className="text-xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
                Crafting Exceptional Homes with Passion, Precision, and 15+ Years of Excellence
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mt-16 text-left">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      Founded with a vision to transform houses into dream homes, Novus has been at the forefront of home remodeling innovation. Our journey began with a simple belief: every homeowner deserves exceptional craftsmanship and personalized service.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      We're committed to bringing your vision to life through meticulous planning, superior materials, and unmatched attention to detail. Every project is a partnership built on trust, transparency, and exceptional results.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What Sets Us Apart</h3>
                    <ul className="space-y-3 text-lg text-gray-600 dark:text-gray-400">
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{backgroundColor: '#F29D35'}}></span>
                        Award-winning design team with decades of experience
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{backgroundColor: '#F29D35'}}></span>
                        Cutting-edge technology and sustainable practices
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{backgroundColor: '#F29D35'}}></span>
                        Comprehensive project management from start to finish
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{backgroundColor: '#F29D35'}}></span>
                        Lifetime warranty on all workmanship
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                  Ready to start your journey with Novus?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    className="text-white px-10 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
                    style={{backgroundColor: '#F29D35'}}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#E8932F'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#F29D35'}
                  >
                    Meet Our Team
                  </button>
                  <button 
                    className="px-10 py-4 rounded-xl font-semibold text-lg transition-colors border-2"
                    style={{borderColor: '#F29D35', color: '#F29D35'}}
                    onMouseEnter={(e) => {e.target.style.backgroundColor = '#F29D35'; e.target.style.color = 'white'}}
                    onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#F29D35'}}
                  >
                    View Our Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-3xl shadow-xl">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-lg">
                  <div 
                    className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-xl flex items-center justify-center shadow-inner"
                    style={{
                      background: 'linear-gradient(135deg, #F29D35 0%, #E8932F 100%)'
                    }}
                  >
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <div className="w-10 h-10 bg-white rounded-xl"></div>
                      </div>
                      <p className="text-xl font-bold mb-2">Frequently Asked</p>
                      <p className="text-lg font-semibold">Questions</p>
                      <p className="text-sm opacity-80">Image Placeholder</p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full" style={{backgroundColor: '#F29D35', opacity: 0.2}}></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full" style={{backgroundColor: '#F29D35', opacity: 0.3}}></div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 rounded-full" style={{backgroundColor: '#F29D35', opacity: 0.15}}></div>
              </div>
            </div>

            {/* Right Column - FAQ List with Dropdowns */}
            <div className="space-y-6">
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Get answers to common questions about our remodeling services and process.
                </p>
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {/* FAQ Item 1 */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 text-left bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors flex justify-between items-center"
                    onClick={(e) => {
                      const content = e.target.closest('div').querySelector('.faq-content');
                      const arrow = e.target.closest('button').querySelector('.arrow');
                      content.style.display = content.style.display === 'block' ? 'none' : 'block';
                      arrow.style.transform = content.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
                    }}
                  >
                    <span className="font-semibold text-gray-900 dark:text-white">How long does a typical remodeling project take?</span>
                    <span className="arrow transition-transform duration-200" style={{color: '#F29D35'}}>↓</span>
                  </button>
                  <div className="faq-content px-6 py-4 bg-white dark:bg-gray-800" style={{display: 'none'}}>
                    <p className="text-gray-600 dark:text-gray-400">
                      Project timelines vary depending on scope and complexity. Kitchen remodels typically take 3-6 weeks, bathroom renovations 2-4 weeks, and whole home renovations 2-4 months. We provide detailed timelines during consultation.
                    </p>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 text-left bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors flex justify-between items-center"
                    onClick={(e) => {
                      const content = e.target.closest('div').querySelector('.faq-content');
                      const arrow = e.target.closest('button').querySelector('.arrow');
                      content.style.display = content.style.display === 'block' ? 'none' : 'block';
                      arrow.style.transform = content.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
                    }}
                  >
                    <span className="font-semibold text-gray-900 dark:text-white">Do you provide free estimates?</span>
                    <span className="arrow transition-transform duration-200" style={{color: '#F29D35'}}>↓</span>
                  </button>
                  <div className="faq-content px-6 py-4 bg-white dark:bg-gray-800" style={{display: 'none'}}>
                    <p className="text-gray-600 dark:text-gray-400">
                      Yes! We provide free, detailed estimates for all projects. Our team will visit your home, discuss your vision, take measurements, and provide a comprehensive quote with no obligation.
                    </p>
                  </div>
                </div>

                {/* FAQ Item 3 */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 text-left bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors flex justify-between items-center"
                    onClick={(e) => {
                      const content = e.target.closest('div').querySelector('.faq-content');
                      const arrow = e.target.closest('button').querySelector('.arrow');
                      content.style.display = content.style.display === 'block' ? 'none' : 'block';
                      arrow.style.transform = content.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
                    }}
                  >
                    <span className="font-semibold text-gray-900 dark:text-white">Are you licensed and insured?</span>
                    <span className="arrow transition-transform duration-200" style={{color: '#F29D35'}}>↓</span>
                  </button>
                  <div className="faq-content px-6 py-4 bg-white dark:bg-gray-800" style={{display: 'none'}}>
                    <p className="text-gray-600 dark:text-gray-400">
                      Absolutely. Novus is fully licensed, bonded, and insured. We maintain all necessary certifications and comply with local building codes. We're happy to provide proof of insurance upon request.
                    </p>
                  </div>
                </div>

                {/* FAQ Item 4 */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 text-left bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors flex justify-between items-center"
                    onClick={(e) => {
                      const content = e.target.closest('div').querySelector('.faq-content');
                      const arrow = e.target.closest('button').querySelector('.arrow');
                      content.style.display = content.style.display === 'block' ? 'none' : 'block';
                      arrow.style.transform = content.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
                    }}
                  >
                    <span className="font-semibold text-gray-900 dark:text-white">What warranty do you offer?</span>
                    <span className="arrow transition-transform duration-200" style={{color: '#F29D35'}}>↓</span>
                  </button>
                  <div className="faq-content px-6 py-4 bg-white dark:bg-gray-800" style={{display: 'none'}}>
                    <p className="text-gray-600 dark:text-gray-400">
                      We offer a comprehensive warranty on all our workmanship. Structural work comes with a 10-year warranty, while finish work includes a 2-year warranty. We also provide manufacturer warranties on all materials and fixtures.
                    </p>
                  </div>
                </div>

                {/* FAQ Item 5 */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 text-left bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors flex justify-between items-center"
                    onClick={(e) => {
                      const content = e.target.closest('div').querySelector('.faq-content');
                      const arrow = e.target.closest('button').querySelector('.arrow');
                      content.style.display = content.style.display === 'block' ? 'none' : 'block';
                      arrow.style.transform = content.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
                    }}
                  >
                    <span className="font-semibold text-gray-900 dark:text-white">Do you handle permits and inspections?</span>
                    <span className="arrow transition-transform duration-200" style={{color: '#F29D35'}}>↓</span>
                  </button>
                  <div className="faq-content px-6 py-4 bg-white dark:bg-gray-800" style={{display: 'none'}}>
                    <p className="text-gray-600 dark:text-gray-400">
                      Yes, we handle all necessary permits and coordinate inspections with local authorities. Our team ensures all work meets or exceeds building codes and passes all required inspections.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Still have questions? We're here to help!
                </p>
                <a 
                  href="/contact"
                  className="text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
                  style={{backgroundColor: '#F29D35'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#E8932F'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#F29D35'}
                >
                  Contact Us Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Form Section */}
      <section id="contact" className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #F29D35 0%, #E8932F 100%)'}}>
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Home?
              </h2>
              <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{color: 'rgba(255,255,255,0.9)'}}>
                Get your free consultation and detailed estimate today. Our experts are ready to bring your vision to life.
              </p>
            </div>

            {/* Form Container */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 lg:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="Enter your first name"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Project Type *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200">
                    <option value="">Select your project type</option>
                    <option value="kitchen">Kitchen Remodeling</option>
                    <option value="bathroom">Bathroom Renovation</option>
                    <option value="addition">Home Addition</option>
                    <option value="basement">Basement Finishing</option>
                    <option value="exterior">Exterior Renovation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Budget Range */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Budget Range
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200">
                    <option value="">Select your budget range</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                    <option value="discuss">Prefer to discuss</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Tell us about your project
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 resize-none"
                    placeholder="Describe your vision, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    I agree to receive communications from Novus regarding my project and understand that I can unsubscribe at any time.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                    style={{background: 'linear-gradient(90deg, #F29D35 0%, #E8932F 100%)'}}
                    onMouseEnter={(e) => e.target.style.background = 'linear-gradient(90deg, #E8932F 0%, #D8832A 100%)'}
                    onMouseLeave={(e) => e.target.style.background = 'linear-gradient(90deg, #F29D35 0%, #E8932F 100%)'}
                  >
                    Get My Free Consultation
                  </button>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                    We'll contact you within 24 hours to schedule your consultation
                  </p>
                </div>
              </form>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Free Consultation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">📋</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Detailed Estimate</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">🔒</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">No Obligation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Novus</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Transforming homes with quality craftsmanship and innovative design solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Kitchen Remodeling</li>
                <li>Bathroom Renovation</li>
                <li>Home Additions</li>
                <li>Basement Finishing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h4>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>Call: (555) 123-4567</p>
                <p>Email: info@novusremodeling.com</p>
                <p>Licensed & Insured</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
