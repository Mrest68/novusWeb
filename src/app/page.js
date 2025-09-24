"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const slides = [
    {
      image: "/kitchenService.jpg",
      alt: "Modern Kitchen Remodeling"
    },
    {
      image: "/bathroom.jpg",
      alt: "Luxury Bathroom Design"
    },
    {
      image: "/image1.jpg",
      alt: "Custom Home Renovation"
    },
    {
      image: "/kitchenservice2.jpg",
      alt: "Contemporary Kitchen Design"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((current) => (current + 1) % slides.length);
        setIsTransitioning(false);
      }, 1000); // Transition duration
    }, 5000); // Slide duration

    return () => clearInterval(timer);
  }, []);

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

  return (
    <div className="font-sans min-h-screen">
      <Navbar currentPage="home" />
      <main id="home" className="relative min-h-screen flex flex-col pt-20">
        {/* Modern Slideshow Background */}
        <div className="absolute inset-0 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 z-10' 
                  : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                className={`object-cover transform scale-110 transition-transform duration-[2000ms] ${
                  index === currentSlide ? 'scale-100' : 'scale-110'
                }`}
              />
            </div>
          ))}
          
          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentSlide(index);
                    setIsTransitioning(false);
                  }, 1000);
                }}
              />
            ))}
          </div>
        </div>

        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Premium Badge */}
                <div className="inline-flex items-center px-6 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full group transition-all duration-300 hover:bg-white/15">
                  <div className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#F29D35'}}></div>
                  <span className="text-white font-medium text-sm tracking-wider">South Florida Remodeling Experts</span>
                </div>

                <div className="relative">
                  <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold text-white leading-none tracking-tighter mb-6">
                    <span className="block transform hover:translate-x-2 transition-transform duration-300">
                      <span className="text-white relative">
                        NOVUS
                        <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-400 transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100"></span>
                      </span>
                    </span>
                    <span className="block mt-2 lg:mt-4">
                      <span className="text-white font-light tracking-wide">
                        Home
                      </span>
                      <span 
                        className="ml-4 font-extrabold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent"
                      >
                        REMODELING
                      </span>
                    </span>
                  </h1>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-100 font-light leading-tight max-w-4xl">
                  <span className="text-orange-300 font-medium block mb-3 transform hover:translate-x-2 transition-transform duration-300">Transforming Dreams into Reality</span>
                  <span className="opacity-90">Premium Construction & Design Excellence Since 2009</span>
                </h2>
              </div>
              
              {/* Services List */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xl lg:text-2xl text-gray-100 mt-12">
                <li className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 rounded-full bg-orange-400 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="font-light">Kitchen & Bathroom Renovations</span>
                </li>
                <li className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 rounded-full bg-orange-400 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="font-light">Custom Home Additions</span>
                </li>
                <li className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 rounded-full bg-orange-400 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="font-light">Basement Finishing</span>
                </li>
                <li className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 rounded-full bg-orange-400 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="font-light">Exterior Renovations</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-6 mt-12">
                <Link 
                  href="/contact#consultation-form"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-transform duration-300 transform hover:translate-x-2"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-12 translate-x-24 bg-orange-600 rounded-full opacity-30 group-hover:rotate-12 ease"></span>
                  <span className="relative flex items-center">
                    Schedule Free Consultation
                    <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </span>
                </Link>
                <a 
                  href="http://localhost:3004/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-transform duration-300 transform hover:translate-x-2"
                >
                    <span className="absolute inset-0 w-full h-full border-2 border-orange-400 rounded-lg group-hover:border-orange-500 transition-colors duration-300"></span>
                    <span className="relative flex items-center">
                      View Portfolio
                      <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </a>
              </div>
            </div>

            {/* Right Column with Call Now */}
            <div className="relative">
              {/* Call Now Phone Number */}
              <div className="transform hover:scale-105 transition-transform duration-300 text-center mt-6">
                <h1 className="text-2xl lg:text-3xl text-white mb-3 tracking-wide font-light">
                  Ready to Transform Your Home?
                </h1>
                <a href="tel:+17542464687" className="text-3xl lg:text-4xl font-bold transition-colors" style={{color: '#F29D35'}} onMouseEnter={(e) => e.target.style.color = '#E8932F'} onMouseLeave={(e) => e.target.style.color = '#F29D35'}>
                  (754) 246-4687
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
            {/* Bathroom Remodeling - Featured */}
            <div className="lg:col-span-2 group relative overflow-hidden rounded-2xl text-white p-8 lg:p-12 hover:scale-105 transition-transform duration-300" style={{background: `linear-gradient(135deg, #F29D35 0%, #E8932F 100%)`}}>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">Bathroom Remodeling</h3>
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
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Kitchen Renovation</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Create your personal spa with luxury fixtures, custom tile work, and modern amenities.
              </p>
              <Link href="/services">
                <button 
                  className="font-semibold transition-colors flex items-center"
                  style={{color: '#F29D35'}}
                  onMouseEnter={e => e.target.style.color = '#E8932F'}
                  onMouseLeave={e => e.target.style.color = '#F29D35'}
                >
                  Explore Options
                  <span className="ml-2">→</span>
                </button>
              </Link>
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
              <Link 
                href="/services"
                className="font-semibold transition-colors flex items-center"
                style={{color: '#F29D35'}}
                onMouseEnter={e => e.target.style.color = '#E8932F'}
                onMouseLeave={e => e.target.style.color = '#F29D35'}
              >
                View Projects
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Basement Finishing */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{background: 'linear-gradient(135deg, #F29D35 0%, #E8932F 100%)'}}>
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Handyman Services</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Transform unused space into functional living areas, home offices, or entertainment rooms.
              </p>
              <Link href="/contact">
                <button 
                  className="font-semibold transition-colors flex items-center"
                  style={{color: '#F29D35'}}
                  onMouseEnter={(e) => e.target.style.color = '#E8932F'}
                  onMouseLeave={(e) => e.target.style.color = '#F29D35'}
                >
                  Get Started
                  <span className="ml-2">→</span>
                </button>
              </Link>
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
              <a 
                href="http://localhost:3004/services"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold transition-colors flex items-center"
                style={{color: '#F29D35'}}
                onMouseEnter={e => e.target.style.color = '#E8932F'}
                onMouseLeave={e => e.target.style.color = '#F29D35'}
              >
                See Example
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
              Ready to start your remodeling project?
            </p>

            <Link href="/contact#consultation-form">
              <button
                className="text-white px-10 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
                style={{backgroundColor: '#F29D35'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#E8932F'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#F29D35'}
              >
                Schedule Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Two Column Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Image Grid */}
            <div className="relative">
              <div className="relative">
                <div className="grid grid-cols-2 gap-1">
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src="/kitchenservice2.jpg"
                        alt="Modern Kitchen Design"
                        width={400}
                        height={300}
                        className="rounded-none object-cover w-full h-full transform hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src="/bathroom.jpg"
                        alt="Luxury Bathroom Remodel"
                        width={400}
                        height={300}
                        className="rounded-none object-cover w-full h-full transform hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src="/image1.jpg"
                        alt="Interior Renovation"
                        width={400}
                        height={300}
                        className="rounded-none object-cover w-full h-full transform hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src="/kitchenService.jpg"
                        alt="Kitchen Remodeling"
                        width={400}
                        height={300}
                        className="rounded-none object-cover w-full h-full transform hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
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
                      <p className="text-gray-600 dark:text-gray-400">(754) 246-4687</p>
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
                <Link href={"/contact#consultation-form"}>
                  <button
                    className="w-full text-white py-3 rounded-lg font-semibold transition-colors mt-6"
                    style={{backgroundColor: '#F29D35'}}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#E8932F'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#F29D35'}
                >
                  Schedule Consultation
                </button>
                </Link>
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
                <Link
                  href="/contact#form"
                  className="text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg inline-block"
                  style={{ backgroundColor: '#F29D35' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#E8932F'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F29D35'; }}
                >
                  Start Your Project
                </Link>
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
                <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-lg overflow-hidden">
                  <div className="relative w-full h-[450px]" style={{ clipPath: 'ellipse(80% 100% at 50% 50%)' }}>
                    <Image
                      src="/kitchenService.jpg"
                      alt="Kitchen Remodeling Showcase"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      priority
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-500/20"
                      style={{
                        mixBlendMode: 'multiply'
                      }}
                    />
                  </div>
                </div>
                {/* Professional decorative elements */}
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
                      <div className="relative w-full h-full overflow-hidden rounded-2xl">
                        <Image
                          src="/clientTest.jpg"
                          alt="Client Testimonial"
                          fill
                          priority
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
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
                      We&apos;re committed to bringing your vision to life through meticulous planning, superior materials, and unmatched attention to detail. Every project is a partnership built on trust, transparency, and exceptional results.
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
                  <Link href={"/about#team"}
                  className="text-white px-10 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg hover:shadow-xl">
                    
                      Meet Our Team
                  </Link>
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

      {/* Video Preview Section */}
      <section className="py-32 -mt-12 relative z-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto relative">
            {/* Decorative Elements */}
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-orange-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-orange-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
            
            {/* Video Title */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-orange-100 text-orange-600 rounded-full text-base font-medium mb-6">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Featured Project Showcase
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">Our Craftsmanship in Action</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience the art of transformation as we turn ordinary spaces into extraordinary homes</p>
            </div>

            {/* Video Container */}
            <div className="relative group">
              {/* Background Gradient Frame */}
              <div className="absolute -inset-2 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              {/* Video Player */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white">
                <div className="relative" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                  <iframe
                    src="https://www.youtube.com/embed/V2D4okEwgtM?mute=1&autoplay=1&controls=1&loop=1&modestbranding=1&playsinline=1&rel=0"
                    title="Home Remodeling Showcase"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>

              {/* Side Decorative Elements */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-32 bg-gradient-to-r from-orange-400/20 to-transparent blur-2xl"></div>
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-16 h-32 bg-gradient-to-l from-orange-400/20 to-transparent blur-2xl"></div>
            </div>

            {/* Caption */}
            <div className="mt-12 text-center">
              <p className="text-base text-gray-500">
                © 2025 Novus Home Remodeling | Transform Your Space with Excellence
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white"></div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* FAQ List with Dropdowns */}
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
                      Absolutely. Novus is fully licensed, bonded, and insured. We maintain all necessary certifications and comply with local building codes. We&apos;re happy to provide proof of insurance upon request.
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
                  Still have questions? We&apos;re here to help!
                </p>
                <a 
                  href="/contact#consultation-form"
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
                      <option value="kitchen">Kitchen Remodeling</option>
                      <option value="bathroom">Bathroom Remodeling</option>
                      <option value="addition">Home Addition</option>
                      <option value="basement">Basement Finishing</option>
                      <option value="other">Other</option>
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
                      <option value="under-25k">Under $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                      <option value="discuss">Prefer to discuss</option>
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
                <p>Call: (786) 246-4687</p>
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
