"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar currentPage="about" />

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Established 2004
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Crafting <span className="text-orange-500">Beautiful</span> Homes
              <br />
              <span className="text-gray-600">Since 2004</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Novus, we transform houses into dream homes with precision, passion, and unwavering commitment to excellence.
            </p>
          </div>

          {/* Story Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Story Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded by Manuel, a visionary craftsman with over 20 years of experience, 
                  Novus began with a simple mission: to create exceptional living spaces that reflect 
                  our clients' dreams and exceed their expectations.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  What started as a small local operation has grown into the Greater Metro Area's 
                  most trusted remodeling partner, known for our meticulous attention to detail, 
                  innovative design solutions, and unwavering commitment to quality.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 py-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">20+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Homes Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">100%</div>
                  <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl opacity-20 blur-lg"></div>
              <img
                src="/clientTest.jpg"
                alt="Manuel - Founder of Novus"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-sm font-medium text-gray-900">Manuel</p>
                <p className="text-xs text-gray-600">Founder & Master Craftsman</p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Quality Craftsmanship</h3>
                <p className="text-gray-600">Every detail meticulously planned and executed with precision and care.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">On-Time Delivery</h3>
                <p className="text-gray-600">We respect your time and deliver projects on schedule, every time.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Clear Communication</h3>
                <p className="text-gray-600">Transparent updates and open dialogue throughout your project.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Ready to Transform Your Space?</h2>
            <p className="text-lg text-gray-600">Let's bring your vision to life with exceptional craftsmanship and attention to detail.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services" 
                className="px-8 py-4 bg-orange-500 text-white rounded-xl shadow-lg hover:bg-orange-600 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 font-medium"
              >
                Explore Our Services
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:border-orange-200 transform hover:-translate-y-0.5 transition-all duration-200 font-medium"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center text-sm text-gray-500 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <p>© 2025 Novus Remodeling. Renovating beautiful homes with precision and care.</p>
        </div>
      </footer>
    </div>
  );
}
