"use client";

import Image from "next/image";
import { useState } from "react";

export default function Reviews() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      name: "Jennifer Walsh",
      location: "Downtown District",
      project: "Kitchen Remodeling",
      rating: 5,
      date: "2 weeks ago",
      review: "Absolutely incredible work! Novus transformed our outdated kitchen into a modern masterpiece. The attention to detail and quality of craftsmanship exceeded all our expectations. Michael and his team were professional, clean, and finished exactly on schedule.",
      image: "/review-jennifer.jpg",
      beforeAfter: true
    },
    {
      id: 2,
      name: "David Chen",
      location: "Suburban Hills",
      project: "Whole Home Renovation",
      rating: 5,
      date: "1 month ago",
      review: "We hired Novus for a complete home renovation and couldn't be happier. From the initial design phase to the final walkthrough, everything was handled with utmost professionalism. The team's local expertise really showed in their understanding of our neighborhood's character.",
      image: "/review-david.jpg",
      beforeAfter: true
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      location: "East Side",
      project: "Bathroom Renovation",
      rating: 5,
      date: "3 weeks ago",
      review: "Our master bathroom renovation turned out absolutely stunning! Sarah's design expertise created a spa-like retreat that perfectly fits our lifestyle. The quality of materials and installation is top-notch. Highly recommend Novus!",
      image: "/review-maria.jpg",
      beforeAfter: false
    },
    {
      id: 4,
      name: "Robert Thompson",
      location: "West End",
      project: "Basement Finishing",
      rating: 5,
      date: "2 months ago",
      review: "Novus turned our unfinished basement into an amazing family entertainment space. David's project management kept everything on track, and the final result exceeded our dreams. Great communication throughout the entire process.",
      image: "/review-robert.jpg",
      beforeAfter: false
    },
    {
      id: 5,
      name: "Lisa Park",
      location: "North Hills",
      project: "Room Addition",
      rating: 5,
      date: "1 month ago",
      review: "The home office addition Novus built for us is perfect! It seamlessly blends with our existing home architecture. The team's attention to local building codes and permits made the process smooth and stress-free.",
      image: "/review-lisa.jpg",
      beforeAfter: true
    },
    {
      id: 6,
      name: "Michael Johnson",
      location: "Riverside",
      project: "Deck & Patio",
      rating: 5,
      date: "3 weeks ago",
      review: "Our new deck and patio have completely transformed our backyard! The outdoor kitchen and fire feature are exactly what we envisioned. Novus delivered exceptional quality and craftsmanship at a fair price.",
      image: "/review-michael.jpg",
      beforeAfter: false
    }
  ];

  const stats = [
    { number: "4.9", label: "Average Rating" },
    { number: "500+", label: "Happy Clients" },
    { number: "15", label: "Years of Excellence" },
    { number: "98%", label: "Would Recommend" }
  ];

  const platforms = [
    { name: "Google Reviews", rating: "4.9", reviews: "127" },
    { name: "Yelp", rating: "4.8", reviews: "89" },
    { name: "BBB", rating: "A+", reviews: "Accredited" },
    { name: "Angie's List", rating: "4.9", reviews: "156" }
  ];

  const testimonialVideos = [
    {
      id: 1,
      client: "The Johnson Family",
      project: "Complete Home Renovation",
      thumbnail: "/video-thumb-1.jpg",
      duration: "2:45"
    },
    {
      id: 2,
      client: "Sarah & Mike",
      project: "Kitchen Remodeling",
      thumbnail: "/video-thumb-2.jpg", 
      duration: "1:30"
    },
    {
      id: 3,
      client: "The Martinez Family",
      project: "Bathroom Renovation",
      thumbnail: "/video-thumb-3.jpg",
      duration: "2:15"
    }
  ];

  const filteredReviews = selectedFilter === 'all' 
    ? reviews 
    : reviews.filter(review => review.project.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <div className="font-sans min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <Image 
                  src="/logoNovus.jpg" 
                  alt="Novus Home Remodeling" 
                  width={50} 
                  height={50} 
                  className="rounded-lg mr-3"
                />
                <h1 className="text-3xl font-light tracking-wide" style={{color: '#F29D35'}}>Novus</h1>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-12">
              <a href="/" className="text-orange-500 hover:text-orange-600 transition-all duration-300 font-light text-lg relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/services" className="text-orange-500 hover:text-orange-600 transition-all duration-300 font-light text-lg relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/about" className="text-orange-500 hover:text-orange-600 transition-all duration-300 font-light text-lg relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/reviews" className="text-orange-500 transition-all duration-300 font-medium text-lg relative">
                Reviews
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500"></span>
              </a>
              <a href="/contact" className="text-orange-500 hover:text-orange-600 transition-all duration-300 font-light text-lg relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
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
                <a href="/reviews" className="block px-4 py-3 text-orange-500 bg-orange-50 rounded-lg font-medium">Reviews</a>
                <a href="/contact" className="block px-4 py-3 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-300 font-light">Contact</a>
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

      {/* Section 1: Hero & Stats */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-32 right-20 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Hero Content */}
          <div className="text-center max-w-5xl mx-auto mb-20">
            <div className="inline-block px-6 py-3 bg-white border border-orange-200 text-orange-600 rounded-full text-sm font-medium mb-8 shadow-sm">
              Client Testimonials
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-gray-900 tracking-tight leading-tight">
              Reviews
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-16 font-light leading-relaxed max-w-4xl mx-auto">
              Hear from our satisfied clients across the Greater Metro Area who trusted us with their dream home projects
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-white/50 hover:shadow-md hover:bg-white transition-all duration-300">
                <div className="text-4xl font-light text-orange-500 mb-3">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Review Platforms */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-900 mb-6">Where You Can Find Us</h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              We're proud of our reputation across all major review platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg text-center group-hover:bg-orange-50">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{platform.name}</h3>
                  <div className="text-3xl font-light text-orange-500 mb-2">{platform.rating}</div>
                  <div className="text-gray-600 font-light">{platform.reviews} reviews</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Video Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-900 mb-6">Video Testimonials</h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Watch our clients share their Novus transformation stories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonialVideos.map((video, index) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  {/* Video Thumbnail */}
                  <div className="relative h-64 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-all duration-300">
                        <svg className="w-8 h-8 text-orange-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <div className="text-white font-light">{video.duration}</div>
                    </div>
                  </div>
                  
                  {/* Video Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{video.client}</h3>
                    <p className="text-orange-500 font-medium mb-3">{video.project}</p>
                    <p className="text-gray-600 font-light">Watch their transformation story</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Written Reviews */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-900 mb-6">Client Reviews</h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto mb-8">
              Read detailed reviews from homeowners who've experienced the Novus difference
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === 'all' 
                    ? 'bg-orange-500 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setSelectedFilter('kitchen')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === 'kitchen' 
                    ? 'bg-orange-500 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Kitchen
              </button>
              <button
                onClick={() => setSelectedFilter('bathroom')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === 'bathroom' 
                    ? 'bg-orange-500 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Bathroom
              </button>
              <button
                onClick={() => setSelectedFilter('whole')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === 'whole' 
                    ? 'bg-orange-500 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Whole Home
              </button>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredReviews.map((review, index) => (
              <div key={review.id} className="group">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl h-full">
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-lg">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{review.name}</h3>
                        <p className="text-sm text-gray-500">{review.location}</p>
                      </div>
                    </div>
                    {review.beforeAfter && (
                      <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-medium">
                        Before/After
                      </div>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex text-orange-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>

                  {/* Project Type */}
                  <div className="text-orange-500 font-medium mb-4">{review.project}</div>

                  {/* Review Text */}
                  <p className="text-gray-600 font-light leading-relaxed">{review.review}</p>
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
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
            Experience the same exceptional service and results that earned us these amazing reviews
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-gray-900 rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Start Your Project
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
