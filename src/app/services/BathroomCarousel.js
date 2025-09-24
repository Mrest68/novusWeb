"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function BathroomCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bathroomImages = [
    { src: "/image17.jpg", alt: "Modern Bathroom Design" },
    { src: "/image25.jpg", alt: "Interior Design Detail" },
    { src: "/image26.jpg", alt: "Custom Renovation Work" },
    { src: "/bathroom.jpg", alt: "Luxury Bathroom Suite" },
    { src: "/bathroom3.jpg", alt: "Contemporary Bathroom Design" },
    { src: "/image22.jpg", alt: "Elegant Bathroom Renovation" },
    { src: "/image3.jpg", alt: "Custom Bathroom Features" },
    { src: "/image4.jpg", alt: "Modern Bathroom Elements" },
    { src: "/image6.jpg", alt: "Bathroom Design Details" },
    { src: "/image8.jpg", alt: "Premium Bathroom Fixtures" },
    { src: "/image9.jpg", alt: "Spa-like Bathroom Setting" },
    { src: "/image10.jpg", alt: "Modern Bathroom Layout" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bathroomImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bathroomImages.length) % bathroomImages.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden rounded-2xl group">
      {bathroomImages.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-500 transform ${
            index === currentSlide ? 'translate-x-0 opacity-100' : 
            index < currentSlide ? '-translate-x-full opacity-0' : 
            'translate-x-full opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0">
        <div className="flex justify-center space-x-2">
          {bathroomImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-4' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
