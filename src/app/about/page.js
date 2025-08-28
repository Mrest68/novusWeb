"use client";

import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const values = [
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Quality Craftsmanship",
      description: "We take pride in delivering exceptional workmanship that stands the test of time, using only the finest materials and techniques."
    },
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Timely Delivery",
      description: "We respect your time and schedule, ensuring projects are completed on schedule without compromising on quality."
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Client-Centered Approach",
      description: "Your vision is our priority. We work closely with you throughout the entire process to ensure your dream becomes reality."
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Innovation & Design",
      description: "We embrace the latest design trends and construction technologies to create modern, functional, and beautiful spaces."
    }
  ];

  const team = [
    {
      name: "Michael Rodriguez",
      role: "Founder & CEO",
      bio: "Founded Novus in 2009 with a vision to bring exceptional craftsmanship to every home in our community. Over 20 years of local construction experience.",
      image: "/team-michael.jpg"
    },
    {
      name: "Sarah Chen",
      role: "Lead Designer",
      bio: "Joined Novus in 2012, bringing innovative design expertise and deep knowledge of local architectural styles to every project.",
      image: "/team-sarah.jpg"
    },
    {
      name: "David Thompson",
      role: "Project Manager",
      bio: "A metro area native with 15 years of project management experience, ensuring every local project meets our exacting standards.",
      image: "/team-david.jpg"
    },
    {
      name: "Lisa Martinez",
      role: "Interior Specialist",
      bio: "Local interior design expert since 2015, specializing in creating spaces that reflect the unique character of our region.",
      image: "/team-lisa.jpg"
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
              <Link href="/services" className="text-orange-500 hover:text-orange-600 transition-all duration-300 font-light text-lg relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="text-orange-500 transition-all duration-300 font-medium text-lg relative">
                About
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500"></span>
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
                <a href="/services" className="block px-4 py-3 text-orange-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300 font-light">Services</a>
                <a href="/about" className="block px-4 py-3 text-orange-600 bg-orange-50 rounded-lg font-medium">About</a>
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

      {/* Mission Section */}
      <section className="pt-40 pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-light text-gray-900 mb-6">Our Story</h2>
                <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
                  Founded in 2009 by Michael Rodriguez, Novus began as a small family business with a simple mission: to bring exceptional craftsmanship to homeowners throughout the Greater Metro Area. What started in a small workshop has grown into one of the region's most trusted remodeling companies.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                  Over the past 15 years, we've had the privilege of transforming homes across the entire metropolitan region, from downtown historic districts to suburban neighborhoods and everything in between. Our deep understanding of local architecture, building codes, and community character allows us to create renovations that truly belong.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-light text-orange-500 mb-2">500+</div>
                  <div className="text-gray-600 font-light">Local Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-orange-500 mb-2">2009</div>
                  <div className="text-gray-600 font-light">Established</div>
                </div>
              </div>
            </div>

            {/* Image/Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-12 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <svg className="w-full h-64 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                  </svg>
                  <div className="text-center mt-6">
                    <h3 className="text-2xl font-medium text-gray-800 mb-2">Serving Our Community</h3>
                    <p className="text-gray-600 font-light">15 years of local expertise and trust</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-gray-900 mb-6">Areas We Serve</h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Proudly serving homeowners throughout the Greater Metro Area and surrounding communities
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Downtown District</h3>
                <p className="text-gray-600 font-light">Historic homes, condos, and urban lofts</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V9.75a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75V21m7.5 0h3.75a.75.75 0 00.75-.75V9a1.5 1.5 0 00-3-1.5M15.75 21v-3.375c0-.621-.504-1.125-1.125-1.125h-2.25c-.621 0-1.125.504-1.125 1.125V21M3 9l9-6 9 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Suburban Areas</h3>
                <p className="text-gray-600 font-light">Family neighborhoods and established communities</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443a55.381 55.381 0 015.25 2.882V15" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Surrounding Counties</h3>
                <p className="text-gray-600 font-light">Rural properties and custom homes</p>
              </div>
            </div>

            <div className="text-center bg-orange-50 rounded-3xl p-12">
              <h3 className="text-3xl font-light text-gray-900 mb-4">Complete Metro Coverage</h3>
              <p className="text-lg text-gray-600 font-light mb-6 max-w-3xl mx-auto">
                From the heart of downtown to the outer suburbs, we've worked in every corner of our metro area. Our local expertise means we understand the unique character of each neighborhood and can recommend solutions that fit perfectly with your community's style.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 font-light">
                <div>• City Center</div>
                <div>• Midtown</div>
                <div>• East Side</div>
                <div>• West End</div>
                <div>• North Hills</div>
                <div>• South Bay</div>
                <div>• Riverside</div>
                <div>• Highland Park</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              The principles that guide everything we do and every project we undertake
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl h-full text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              The talented professionals who bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl">
                  {/* Profile Image Placeholder */}
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 font-light leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
            Ready to join the hundreds of satisfied homeowners across the Greater Metro Area? Let's discuss how we can transform your space with our proven local expertise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-gray-900 rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get Started Today
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="tel:+15551234567" 
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white rounded-full font-medium text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (555) 123-4567
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
                <li><a href="/contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
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
