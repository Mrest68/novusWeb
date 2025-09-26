"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || 'Something went wrong');

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: ''
      });
      setFormStatus({
        type: 'success',
        message: 'Thank you! We will contact you soon.'
      });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: error.message
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      title: "Phone",
      details: "(754) 246-4687",
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
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logoNovus.png" 
                  alt="Novus Home Remodeling" 
                  width={60} 
                  height={60} 
                  className="rounded-lg mr-3"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-12">
              <Link href="/" className="text-gray-600 hover:text-orange-500 transition-all duration-300 font-light text-lg relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-orange-500 transition-all duration-300 font-light text-lg relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-orange-500 transition-all duration-300 font-light text-lg relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/reviews" className="text-gray-600 hover:text-orange-500 transition-all duration-300 font-light text-lg relative group">
                Reviews
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="text-orange-500 transition-all duration-300 font-medium text-lg relative">
                Contact
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500"></span>
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
                (754) 246-4687
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
                <Link href="/" className="block px-4 py-3 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-300 font-light">Home</Link>
                <Link href="/services" className="block px-4 py-3 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-300 font-light">Services</Link>
                <Link href="/about" className="block px-4 py-3 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-300 font-light">About</Link>
                <Link href="/reviews" className="block px-4 py-3 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-300 font-light">Reviews</Link>
                <Link href="/contact" className="block px-4 py-3 text-orange-500 bg-orange-50 rounded-lg font-medium">Contact</Link>
                <a 
                  href="tel:+15551234567" 
                  className="block w-full text-center text-white px-6 py-3 rounded-full font-medium transition-all duration-300 mt-4"
                  style={{backgroundColor: '#F29D35'}}
                >
                  (754) 246-4687
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 relative overflow-hidden">
        {/* Construction-themed Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F29D35' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                 backgroundSize: '60px 60px'
               }}>
          </div>
        </div>
        
        {/* Industrial Geometric Shapes */}
        <div className="absolute hidden md:block top-32 right-[10%] w-32 h-32 border-4 border-orange-400 opacity-20 rotate-45 transform hover:rotate-90 transition-transform duration-1000"></div>
        <div className="absolute hidden md:block bottom-32 left-[10%] w-24 h-24 border-4 border-orange-500 opacity-30 rotate-12 transform hover:rotate-45 transition-transform duration-1000"></div>
        <div className="absolute top-48 left-[5%] w-16 h-16 bg-orange-400 opacity-15 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-48 right-[5%] w-20 h-20 bg-orange-500 opacity-20 rotate-12 animate-pulse"></div>
        
        {/* Textured Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-block px-6 py-3 bg-orange-500 text-white rounded-sm text-sm font-bold mb-8 shadow-lg uppercase tracking-wider">
              Get In Touch
            </div>
            <h1 className="text-7xl md:text-8xl font-black mb-10 text-white tracking-tight leading-tight drop-shadow-2xl">
              Contact Us
            </h1>
            <p className="text-2xl text-gray-200 mb-16 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
              Ready to build your dream? Let&apos;s discuss your project and turn your vision into reality
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <a 
                href="tel:+15551234567" 
                className="inline-flex items-center justify-center px-10 py-5 bg-orange-500 text-white rounded-sm font-bold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl uppercase tracking-wide"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call for Quote
              </a>
              <a 
                href="#quote-form" 
                className="inline-flex items-center justify-center px-10 py-5 border-3 border-orange-500 text-orange-300 rounded-sm font-bold text-lg hover:border-orange-400 hover:text-white hover:bg-orange-500/20 transition-all duration-300 uppercase tracking-wide"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Free Estimate
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
                Tell us about your project and we&apos;ll provide a detailed estimate within 24 hours
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 lg:p-12">
              {formStatus.message && (
                <div className={`p-4 rounded-lg mb-6 ${
                  formStatus.type === 'success' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100' 
                    : 'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100'
                }`}>
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First and Last Name */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="(754) 246-4687"
                    />
                  </div>
                </div>

                {/* Project Type and Budget */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select your project type</option>
                      {services.map(service => (
                        <option key={service} value={service.toLowerCase()}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select your budget range</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range.toLowerCase()}>{range}</option>
                      ))}
                    </select>
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
                    placeholder="(754) 246-4687"
                  />
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-6">
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

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Describe your vision, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:shadow-xl transform hover:scale-[1.02]'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Get My Free Consultation'}
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
            We&apos;re here to help when you need us most.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="tel:+15551234567" 
              className="inline-flex items-center justify-center px-12 py-6 bg-white text-gray-900 rounded-full font-medium text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (754) 246-4687
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
                <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
                <li><Link href="/about" className="hover:text-orange-500 transition-colors">About</Link></li>
                <li><Link href="/reviews" className="hover:text-orange-500 transition-colors">Reviews</Link></li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <h4 className="text-lg font-medium mb-4 text-gray-900">Contact</h4>
              <div className="space-y-2 text-gray-600 font-light">
                <p>(754) 246-4687</p>
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
