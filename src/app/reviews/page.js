"use client";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Reviews() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const filteredReviews = selectedFilter === 'all' 
    ? reviews 
    : reviews.filter(review => review.project.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <div className="font-sans min-h-screen">
      <Navbar currentPage="reviews" />
      
      <main>
        {/* Hero Section with Stats Overlay */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-6">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    Client Success Stories
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white">
                    Our Clients <span className="text-orange-400">Love</span> Their New Spaces
                  </h1>
                  <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                    Join hundreds of satisfied homeowners who trusted Novus with their dream renovations
                  </p>
                </div>

                {/* Right Stats */}
                <div className="w-full md:w-auto">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                    <div className="grid grid-cols-2 gap-6">
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center px-6">
                          <div className="text-3xl font-light text-orange-400 mb-2">{stat.number}</div>
                          <div className="text-sm text-gray-300 font-light">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Review Platform Badges */}
        <section className="py-12 bg-white relative z-10 -mt-8">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
                {platforms.map((platform, index) => (
                  <div key={index} className="transform hover:-translate-y-1 transition-all duration-300">
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 border border-gray-100">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <div className="w-6 h-6 bg-orange-500 rounded"></div>
                        </div>
                        <div>
                          <div className="text-2xl font-light text-orange-500">{platform.rating}</div>
                          <div className="text-sm text-gray-600">{platform.name}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Filter and Reviews Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            {/* Filter Bar */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 sticky top-24 z-20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <h2 className="text-2xl font-light text-gray-900">Client Reviews</h2>
              
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
      </main>

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
                <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
                <li><Link href="/about" className="hover:text-orange-500 transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
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