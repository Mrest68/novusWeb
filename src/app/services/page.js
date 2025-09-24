
"use client";

import Link from "next/link";
import Image from "next/image";
import BathroomCarousel from './BathroomCarousel';
import KitchenCarousel from './KitchenCarousel';
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Services() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Kitchen Remodeling",
      description: "Transform your kitchen into a culinary masterpiece with expert design and renovation.",
      gradient: "from-orange-400 to-red-500",
      iconPath: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    },
    {
      title: "Bathroom Renovation", 
      description: "Create your personal spa retreat with luxury fixtures and thoughtful design.",
      gradient: "from-orange-400 to-red-500",
      iconPath: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11",
    },
    {
      title: "Whole Home Renovation",
      description: "Complete home transformation with comprehensive planning and execution.",
      gradient: "from-orange-400 to-red-500",
      iconPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      title: "Handyman Services",
      description: "Convert your basement into valuable living space for family entertainment.",
      gradient: "from-orange-400 to-red-500",
      iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
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
      <Navbar currentPage="services" />
      {/* Services Quick Nav */}
      <section className="py-12 mt-20 bg-white border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Our Services</h2>
          <div className="flex overflow-x-auto pb-6 hide-scrollbar">
            <div className="flex space-x-6 min-w-max px-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="w-72 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  <div className={`h-2 w-full rounded-t-2xl bg-gradient-to-r ${service.gradient}`}></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-medium text-gray-900">{service.title}</h3>
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.iconPath} />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                    <div className="mt-auto">
                      <div className="text-sm text-gray-500">{service.price}</div>
                      <Link 
                        href="/contact"
                        className="mt-3 inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-300"
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx global>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>

      {/* Two Column Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Image Carousel */}
            <div className="w-full lg:w-1/2">
              <BathroomCarousel />
            </div>
            
            {/* Right Column - Text */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-4xl font-light text-gray-900 mb-4">BATHROOM REMODELING</h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Transform your bathroom into a luxurious retreat with our expert remodeling services. From elegant master bathrooms to efficient guest baths, we bring your vision to life with premium materials and masterful craftsmanship.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-gray-900">Custom Showers</h3>
                    <p className="text-gray-600">Spa-like shower systems with premium fixtures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-gray-900">Luxury Vanities</h3>
                    <p className="text-gray-600">Custom storage solutions and premium countertops</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-gray-900">Tile Design</h3>
                    <p className="text-gray-600">Designer tiles and custom patterns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-gray-900">LED Lighting</h3>
                    <p className="text-gray-600">Modern lighting solutions for ambiance</p>
                  </div>
                </div>
              </div>

              

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{backgroundColor: '#F29D35'}}
                >
                  Schedule Free Consultation
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Text */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-4xl font-light text-gray-900 mb-4">KITCHEN REMODELING</h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Create the heart of your home with our premium kitchen remodeling services. From modern minimalist designs to traditional warmth, we craft spaces that combine beauty with functionality.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-gray-900">Custom Cabinets</h3>
                    <p className="text-gray-600">Handcrafted cabinetry with premium finishes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-gray-900">Countertops</h3>
                    <p className="text-gray-600">Quartz, granite, and marble options</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-gray-900">Smart Appliances</h3>
                    <p className="text-gray-600">High-end, energy-efficient integration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-gray-900">Island Design</h3>
                    <p className="text-gray-600">Custom islands for entertaining</p>
                  </div>
                </div>
              </div>

              

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{backgroundColor: '#F29D35'}}
                >
                  Schedule Free Consultation
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column - Kitchen Carousel */}
            <div className="w-full lg:w-1/2">
              <KitchenCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Handyman Services Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">HANDYMAN SERVICES</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional solutions for all your home maintenance needs, from quick fixes to custom improvements
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Emergency Repairs Card */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <svg className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Emergency Repairs</h3>
              <p className="text-gray-600 mb-4">Quick response for urgent household issues requiring immediate attention</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Plumbing emergencies
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Electrical issues
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Lock and security
                </li>
              </ul>
            </div>

            {/* Installation Services Card */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <svg className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Installation Services</h3>
              <p className="text-gray-600 mb-4">Expert installation of home fixtures and accessories</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Light fixtures
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Smart home devices
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Shelving & storage
                </li>
              </ul>
            </div>

            {/* Maintenance & Repairs Card */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <svg className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Maintenance & Repairs</h3>
              <p className="text-gray-600 mb-4">Regular upkeep and repairs to keep your home in top condition</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Drywall repairs
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Paint touch-ups
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  General maintenance
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-orange-500 to-orange-600"
            >
              Schedule a Service
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="mt-4 text-gray-600">Same-day service available for emergencies</p>
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
      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Begin?
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto">
            Let&apos;s discuss your project and bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              href="tel:+15551234567"
              className="border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Call Us Today
            </Link>
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
