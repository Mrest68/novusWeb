"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function KitchenCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const kitchenImages = [
    { src: "/kitchen2.jpg", alt: "Elegant Kitchen Design" },
    { src: "/kitchen5.jpg", alt: "Modern Kitchen Layout" },
    { src: "/kitchenService.jpg", alt: "Luxury Kitchen Design" },
    { src: "/kitchenservice2.jpg", alt: "Contemporary Kitchen Remodel" },
    { src: "/kithcen1.jpg", alt: "Custom Kitchen Solutions" },
    { src: "/kithcenService3.jpg", alt: "Premium Kitchen Features" },
    { src: "/image28.jpg", alt: "Modern Kitchen Design" },
    { src: "/image29.jpg", alt: "Kitchen Details" },
    { src: "/image30.jpg", alt: "Custom Cabinetry" },
    { src: "/image31.jpg", alt: "Kitchen Island" },
    { src: "/image32.jpg", alt: "Kitchen Renovation" },
    { src: "/image33.jpg", alt: "Modern Kitchen Elements" },
    { src: "/image34.jpg", alt: "Kitchen Design Details" },
    { src: "/image36.jpg", alt: "Premium Kitchen Fixtures" },
    { src: "/image37.jpg", alt: "Gourmet Kitchen Setting" },
    { src: "/image38.jpg", alt: "Modern Kitchen Features" },
    { src: "/image40.jpg", alt: "Kitchen Storage Solutions" },
    { src: "/image41.jpg", alt: "Kitchen Lighting Design" },
    { src: "/image42.jpg", alt: "Kitchen Color Schemes" },
    { src: "/image43.jpg", alt: "Kitchen Workspace Design" },
    { src: "/image44.jpg", alt: "Kitchen Flow Layout" },
    { src: "/image46.jpg", alt: "Kitchen Appliance Integration" },
    { src: "/image47.jpg", alt: "Kitchen Countertop Design" },
    { src: "/image48.jpg", alt: "Kitchen Cabinet Solutions" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % kitchenImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + kitchenImages.length) % kitchenImages.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden rounded-2xl group">
      {kitchenImages.map((image, index) => (
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
          {kitchenImages.map((_, index) => (
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
