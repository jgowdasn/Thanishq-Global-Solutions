"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Lab Disposables",
    subtitle: "Premium Laboratory Consumables",
    description: "High-quality test tubes, pipettes, petri dishes, specimen containers for accurate lab results.",
    gradient: "from-sky-400 via-blue-500 to-blue-600",
    bgColor: "bg-gradient-to-br from-sky-50 via-blue-50 to-white",
    accentColor: "text-blue-600",
    btnColor: "bg-blue-600 hover:bg-blue-700",
    images: [
      { emoji: "🧪", label: "Test Tubes" },
      { emoji: "🔬", label: "Microscopes" },
      { emoji: "💉", label: "Pipettes" },
      { emoji: "🧫", label: "Petri Dishes" },
    ],
  },
  {
    id: 2,
    title: "Medical Supplies",
    subtitle: "Essential Healthcare Products",
    description: "Complete range of syringes, IV sets, catheters, bandages for hospitals and clinics.",
    gradient: "from-teal-400 via-teal-500 to-teal-600",
    bgColor: "bg-gradient-to-br from-teal-50 via-cyan-50 to-white",
    accentColor: "text-teal-600",
    btnColor: "bg-teal-600 hover:bg-teal-700",
    images: [
      { emoji: "💊", label: "Medicines" },
      { emoji: "🩹", label: "Bandages" },
      { emoji: "🩺", label: "Stethoscope" },
      { emoji: "💉", label: "Syringes" },
    ],
  },
  {
    id: 3,
    title: "Surgical Equipment",
    subtitle: "Precision Surgical Instruments",
    description: "Sterile surgical tools, sutures, gloves, drapes and sterilization products.",
    gradient: "from-indigo-400 via-indigo-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-indigo-50 via-purple-50 to-white",
    accentColor: "text-indigo-600",
    btnColor: "bg-indigo-600 hover:bg-indigo-700",
    images: [
      { emoji: "⚕️", label: "Surgery" },
      { emoji: "🔧", label: "Instruments" },
      { emoji: "🧤", label: "Gloves" },
      { emoji: "🩻", label: "Equipment" },
    ],
  },
  {
    id: 4,
    title: "Diagnostic Tools",
    subtitle: "Accurate Diagnostic Devices",
    description: "Thermometers, BP monitors, glucometers, pulse oximeters for precise diagnostics.",
    gradient: "from-emerald-400 via-green-500 to-green-600",
    bgColor: "bg-gradient-to-br from-emerald-50 via-green-50 to-white",
    accentColor: "text-emerald-600",
    btnColor: "bg-emerald-600 hover:bg-emerald-700",
    images: [
      { emoji: "🌡️", label: "Thermometer" },
      { emoji: "❤️", label: "BP Monitor" },
      { emoji: "🩸", label: "Glucometer" },
      { emoji: "📊", label: "Monitors" },
    ],
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 400);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const slide = slides[currentSlide];

  return (
    <section className={`relative min-h-screen pt-20 overflow-hidden transition-all duration-700 ${slide.bgColor}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br ${slide.gradient} opacity-20 blur-3xl animate-pulse-slow`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr ${slide.gradient} opacity-15 blur-3xl animate-pulse-slow`} style={{ animationDelay: "2s" }}></div>

        {/* Floating circles */}
        <div className="hero-circle hero-circle-1"></div>
        <div className="hero-circle hero-circle-2"></div>
        <div className="hero-circle hero-circle-3"></div>
        <div className="hero-circle hero-circle-4"></div>
        <div className="hero-circle hero-circle-5"></div>

        {/* Curved lines */}
        <svg className="absolute w-full h-full opacity-30" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path
            d="M-100,600 Q400,400 800,500 T1540,400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className={`${slide.accentColor} opacity-30`}
          />
          <path
            d="M-100,700 Q500,500 900,600 T1540,500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className={`${slide.accentColor} opacity-20`}
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full py-12 pb-32">

          {/* Left Content */}
          <div className={`transition-all duration-500 ${isTransitioning ? "opacity-0 -translate-x-8" : "opacity-100 translate-x-0"}`}>
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${slide.gradient} text-white text-sm font-medium mb-6 shadow-lg`}>
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Wholesale Distributor
            </div>

            {/* Company Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Thanishq Global
              <span className="block text-gray-600">Solutions</span>
            </h1>

            {/* Product Category */}
            <div className={`text-2xl md:text-3xl font-semibold ${slide.accentColor} mb-4`}>
              {slide.title}
            </div>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 mb-3">{slide.subtitle}</p>

            {/* Description */}
            <p className="text-gray-500 mb-8 max-w-lg">{slide.description}</p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact"
                className={`px-8 py-4 ${slide.btnColor} text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-center`}
              >
                Get in Touch
              </a>
              <a
                href="#products"
                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 text-center"
              >
                View Products
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <div className={`text-3xl font-bold ${slide.accentColor}`}>500+</div>
                <div className="text-gray-500 text-sm">Products</div>
              </div>
              <div>
                <div className={`text-3xl font-bold ${slide.accentColor}`}>100+</div>
                <div className="text-gray-500 text-sm">Clients</div>
              </div>
              <div>
                <div className={`text-3xl font-bold ${slide.accentColor}`}>10+</div>
                <div className="text-gray-500 text-sm">Years</div>
              </div>
            </div>
          </div>

          {/* Right Side - Product Images Grid */}
          <div className={`relative transition-all duration-500 ${isTransitioning ? "opacity-0 translate-x-8" : "opacity-100 translate-x-0"}`}>
            {/* Main image container */}
            <div className="relative">
              {/* Background shape */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} rounded-3xl transform rotate-3 opacity-20`}></div>

              {/* Image grid */}
              <div className="relative grid grid-cols-2 gap-4 p-6">
                {slide.images.map((img, index) => (
                  <div
                    key={index}
                    className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 ${
                      index === 0 ? "lg:col-span-1 lg:row-span-1" : ""
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                    <div className="relative text-center">
                      <div className="text-5xl md:text-6xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                        {img.emoji}
                      </div>
                      <p className="text-gray-600 font-medium text-sm">{img.label}</p>
                    </div>

                    {/* Decorative corner */}
                    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${slide.gradient} opacity-10 rounded-bl-3xl rounded-tr-2xl`}></div>
                  </div>
                ))}
              </div>

              {/* Floating elements */}
              <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${slide.gradient} rounded-full opacity-80 flex items-center justify-center shadow-lg animate-float-icon`}>
                <span className="text-white text-2xl">✨</span>
              </div>
              <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br ${slide.gradient} rounded-full opacity-60 flex items-center justify-center shadow-lg animate-float-icon`} style={{ animationDelay: "1s" }}>
                <span className="text-white text-xl">💯</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Carousel Indicators */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? `w-10 h-3 bg-gradient-to-r ${slide.gradient}`
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Category Pills */}
            <div className="flex gap-2 flex-wrap justify-center">
              {slides.map((s, index) => (
                <button
                  key={s.id}
                  onClick={() => goToSlide(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === currentSlide
                      ? `bg-gradient-to-r ${s.gradient} text-white shadow-lg`
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {s.images[0].emoji} {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Side Navigation Arrows */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:text-gray-900 transition-all duration-300 z-20 shadow-lg border border-gray-100"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:text-gray-900 transition-all duration-300 z-20 shadow-lg border border-gray-100"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
