"use client";

import { useEffect, useState } from 'react';

export default function ServiceGrid() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const services = [
    {
      title: "Kitchen Remodeling",
      description: "Transform your kitchen into a modern culinary haven with custom cabinets and premium appliances.",
      image: "/pic1.jpg"
    },
    {
      title: "Living Room Renovation",
      description: "Create an inviting living space with expert design and premium materials.",
      image: "/pic2.jpg"
    },
    {
      title: "Master Bedroom Suite",
      description: "Design your perfect retreat with custom closets and luxury finishes.",
      image: "/pic3.jpg"
    },
    {
      title: "Outdoor Living Spaces",
      description: "Extend your living area with beautiful, functional outdoor spaces.",
      image: "/pic4.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <>
    <section className="relative py-20 px-4 md:px-0 flex justify-center items-center bg-white">
      <div className="absolute left-0 top-0 w-2 h-full bg-[#F29D35] rounded-r-3xl hidden md:block"></div>
      <div className="flex flex-col md:flex-row items-start justify-center max-w-6xl w-full gap-16 relative z-10">
        <div className="flex-1 flex flex-col justify-center items-start text-left bg-white rounded-2xl p-10 shadow-md">
          <span className="inline-block mb-4 px-4 py-1 bg-[#F29D35] text-white rounded-full text-xs font-bold tracking-widest shadow uppercase">Premium Service</span>
          <h1 className="text-6xl md:text-7xl font-black mb-4 text-gray-900 leading-tight tracking-tight">Bathroom Remodeling</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#F29D35] tracking-wide">Create Your Personal Spa Retreat</h2>
          <p className="text-lg text-gray-700 mb-6 font-light leading-relaxed">
            Transform your bathroom into a luxurious, relaxing space with modern fixtures, custom design, and expert craftsmanship. Experience comfort and elegance every day.
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Comprehensive Service Includes:</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#F29D35]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Custom Design Consultation
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#F29D35]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                High-End Fixture Installation
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#F29D35]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Tile & Stonework
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#F29D35]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Plumbing & Electrical Work
              </li>
            </ul>
          </div>
          
          <button className="bg-[#F29D35] hover:bg-[#e08b24] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-lg">
            Schedule Your Consultation
          </button>
        </div>
        <div className="flex-1 flex flex-col justify-center items-start gap-6">
          <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
            <div className="absolute inset-0 border-2 border-[#F29D35]/20 rounded-3xl transform scale-95 group-hover:scale-100 transition-transform duration-500 z-20"></div>
            <img 
              src="/bathroom1.jpg" 
              alt="Luxury bathroom remodeling example" 
              className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
            <div className="absolute inset-0 border-2 border-[#F29D35]/20 rounded-3xl transform scale-95 group-hover:scale-100 transition-transform duration-500 z-20"></div>
            <img 
              src="/bathroom2.jpg" 
              alt="Modern bathroom design showcase" 
              className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="relative py-20 px-4 md:px-0 flex justify-center items-center bg-white">
      <div className="absolute left-0 top-0 w-2 h-full bg-[#F29D35] rounded-r-3xl hidden md:block"></div>
      <div className="flex flex-col md:flex-row-reverse items-start justify-center max-w-6xl w-full gap-16 relative z-10">
        <div className="flex-1 flex flex-col justify-center items-start text-left bg-white rounded-2xl p-10 shadow-md">
          <span className="inline-block mb-4 px-4 py-1 bg-[#F29D35] text-white rounded-full text-xs font-bold tracking-widest shadow uppercase">Complete Transformation</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Premium Home Services</h2>
          <p className="text-lg text-gray-700 mb-8 font-light leading-relaxed">
            We offer a complete range of home transformation services, from kitchen remodels to outdoor living spaces. Our expert team ensures quality craftsmanship in every project.
          </p>

          <div className="relative w-full">
            <div className="relative overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out transform" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-lg" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-10 hover:bg-white transition-colors">
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-10 hover:bg-white transition-colors">
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img src="/pic5.jpg" alt="Home transformation project" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img src="/pic6.jpg" alt="Interior design showcase" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img src="/pic7.jpg" alt="Modern home design" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img src="/pic8.jpg" alt="Luxury home feature" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
