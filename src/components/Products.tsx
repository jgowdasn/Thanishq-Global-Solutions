"use client";

import { useState } from "react";

const categories = [
  {
    id: "lab",
    title: "Lab Disposables",
    icon: "🧪",
    color: "from-sky-400 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    description: "Premium laboratory consumables for accurate results",
    featured: ["Test Tubes", "Pipettes", "Petri Dishes", "Specimen Containers", "Slides"],
    allProducts: [
      { name: "Test Tubes", desc: "Various sizes 5ml-50ml" },
      { name: "Pipettes", desc: "Disposable & graduated" },
      { name: "Petri Dishes", desc: "Sterile culture dishes" },
      { name: "Specimen Containers", desc: "Leak-proof collection" },
      { name: "Slides & Coverslips", desc: "Microscopy grade" },
      { name: "Centrifuge Tubes", desc: "15ml & 50ml options" },
      { name: "Microplate Wells", desc: "96-well plates" },
      { name: "Filter Papers", desc: "Various grades" },
      { name: "Reagent Bottles", desc: "Chemical resistant" },
      { name: "Droppers", desc: "Plastic & glass" },
      { name: "Beakers", desc: "Disposable plastic" },
      { name: "Sample Vials", desc: "Screw cap vials" },
      { name: "PCR Tubes", desc: "0.2ml & 0.5ml" },
      { name: "Cryogenic Vials", desc: "For sample storage" },
      { name: "Lab Gloves", desc: "Nitrile & latex" },
    ],
  },
  {
    id: "medical",
    title: "Medical Supplies",
    icon: "🏥",
    color: "from-teal-400 to-teal-600",
    bgColor: "bg-teal-50",
    textColor: "text-teal-600",
    description: "Essential healthcare products for daily medical needs",
    featured: ["Syringes", "IV Sets", "Catheters", "Bandages", "Gloves"],
    allProducts: [
      { name: "Syringes", desc: "1ml to 50ml sizes" },
      { name: "Needles", desc: "All gauges available" },
      { name: "IV Sets", desc: "With flow regulator" },
      { name: "IV Cannulas", desc: "Various sizes" },
      { name: "Catheters", desc: "Foley & suction" },
      { name: "Bandages", desc: "Elastic & cotton" },
      { name: "Gauze Pads", desc: "Sterile packs" },
      { name: "Cotton Rolls", desc: "Absorbent cotton" },
      { name: "Examination Gloves", desc: "Nitrile & latex" },
      { name: "Face Masks", desc: "3-ply surgical" },
      { name: "Alcohol Swabs", desc: "Pre-injection" },
      { name: "Adhesive Tapes", desc: "Medical grade" },
      { name: "Urine Bags", desc: "Collection bags" },
      { name: "Blood Collection Tubes", desc: "Vacutainers" },
      { name: "Tourniquet", desc: "Latex-free options" },
    ],
  },
  {
    id: "surgical",
    title: "Surgical Equipment",
    icon: "⚕️",
    color: "from-indigo-400 to-purple-600",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-600",
    description: "Precision instruments for surgical procedures",
    featured: ["Surgical Kits", "Sutures", "Surgical Gloves", "Drapes", "Sterilization"],
    allProducts: [
      { name: "Surgical Blades", desc: "Carbon steel" },
      { name: "Scalpel Handles", desc: "Reusable metal" },
      { name: "Sutures", desc: "Absorbable & non-absorbable" },
      { name: "Surgical Gloves", desc: "Sterile powdered" },
      { name: "Drapes & Gowns", desc: "Disposable sterile" },
      { name: "Surgical Caps", desc: "Bouffant style" },
      { name: "Shoe Covers", desc: "Non-slip" },
      { name: "Wound Dressings", desc: "Advanced care" },
      { name: "Surgical Sponges", desc: "X-ray detectable" },
      { name: "Retractors", desc: "Various types" },
      { name: "Forceps", desc: "Tissue & dressing" },
      { name: "Scissors", desc: "Surgical grade" },
      { name: "Needle Holders", desc: "Tungsten carbide" },
      { name: "Sterilization Pouches", desc: "Self-sealing" },
      { name: "Indicator Tape", desc: "Steam autoclave" },
    ],
  },
  {
    id: "diagnostic",
    title: "Diagnostic Tools",
    icon: "🔬",
    color: "from-emerald-400 to-green-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    description: "Accurate diagnostic devices for precise results",
    featured: ["Thermometers", "BP Monitors", "Stethoscopes", "Glucometers", "Oximeters"],
    allProducts: [
      { name: "Digital Thermometer", desc: "Instant read" },
      { name: "IR Thermometer", desc: "Non-contact" },
      { name: "BP Monitors", desc: "Digital automatic" },
      { name: "Stethoscopes", desc: "Dual head" },
      { name: "Glucometers", desc: "With test strips" },
      { name: "Pulse Oximeters", desc: "Fingertip" },
      { name: "Otoscopes", desc: "LED illumination" },
      { name: "Ophthalmoscopes", desc: "Diagnostic sets" },
      { name: "ECG Electrodes", desc: "Disposable" },
      { name: "Nebulizers", desc: "Compressor type" },
      { name: "Peak Flow Meters", desc: "Asthma monitoring" },
      { name: "Weighing Scales", desc: "Digital precision" },
      { name: "Height Meters", desc: "Stadiometers" },
      { name: "Pregnancy Test Kits", desc: "HCG detection" },
      { name: "Urine Test Strips", desc: "Multi-parameter" },
    ],
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const openModal = (categoryId: string) => {
    setSelectedCategory(categoryId);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedCategory(null);
    document.body.style.overflow = "auto";
  };

  const selectedCategoryData = categories.find((c) => c.id === selectedCategory);

  return (
    <section id="products" className="py-20 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape floating-shape-1"></div>
        <div className="floating-shape floating-shape-2"></div>
        <div className="floating-shape floating-shape-3"></div>
        <div className="floating-shape floating-shape-4"></div>

        <svg className="absolute w-full h-full opacity-20" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path
            d="M0,100 C300,150 600,50 900,100 S1200,150 1440,100"
            fill="none"
            stroke="#0087cd"
            strokeWidth="2"
            strokeDasharray="10,10"
            className="animate-dash"
          />
          <path
            d="M0,700 C300,650 600,750 900,700 S1200,650 1440,700"
            fill="none"
            stroke="#4caf50"
            strokeWidth="2"
            strokeDasharray="10,10"
            className="animate-dash-reverse"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Quality Products
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive range of medical, laboratory, and surgical supplies to meet all your healthcare needs.
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10"></div>
                <div className="relative z-10">
                  <span className="text-5xl mb-3 block">{category.icon}</span>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{category.description}</p>
                </div>
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full"></div>
              </div>

              {/* Featured Items */}
              <div className="p-5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Featured Products</p>
                <ul className="space-y-2">
                  {category.featured.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
                      <svg className={`w-4 h-4 ${category.textColor} mr-2 shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* View All Button */}
                <button
                  onClick={() => openModal(category.id)}
                  className={`mt-5 w-full py-3 px-4 bg-gradient-to-r ${category.color} text-white font-semibold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2`}
                >
                  View All {category.title}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Need Custom Products?</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Can't find what you're looking for? Contact us for our complete catalog or custom requirements.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Request Full Catalog
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCategory && selectedCategoryData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-modal-in">
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedCategoryData.color} p-6 md:p-8 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-white/10"></div>
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-5xl md:text-6xl">{selectedCategoryData.icon}</span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedCategoryData.title}</h3>
                    <p className="text-white/80 mt-1">{selectedCategoryData.description}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full"></div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-[60vh]">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">{selectedCategoryData.allProducts.length}</span> products available
                </p>
                <div className={`px-3 py-1 ${selectedCategoryData.bgColor} ${selectedCategoryData.textColor} rounded-full text-sm font-medium`}>
                  Wholesale Pricing
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {selectedCategoryData.allProducts.map((product, index) => (
                  <div
                    key={index}
                    className={`group p-4 rounded-xl border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-300 ${selectedCategoryData.bgColor} hover:bg-white`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${selectedCategoryData.color} flex items-center justify-center shrink-0`}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-sm text-gray-500">{product.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="mt-8 p-6 bg-gray-50 rounded-2xl text-center">
                <p className="text-gray-600 mb-4">Need bulk quantities or custom specifications?</p>
                <a
                  href="#contact"
                  onClick={closeModal}
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${selectedCategoryData.color} text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300`}
                >
                  Get Quote for {selectedCategoryData.title}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
