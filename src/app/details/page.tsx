"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { Suspense } from 'react';

export default function DetailsPage() {

  function DetailsContent() {

  
    const searchParams = useSearchParams();
    const itemId = parseInt(searchParams.get('id') || '1');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
      {
        id: 1,
        main: "💻",
        title: "Main View"
      },
      {
        id: 2,
        main: "👨‍💻",
        title: "User View"
      },
      {
        id: 3,
        main: "🖥️",
        title: "Portable View"
      },
      {
        id: 4,
        main: "⌨️",
        title: "Keyboard View"
      }
    ];

    const nextItem = () => {
      if (itemId < 5) {
        window.location.href = `/details?id=${itemId + 1}&customer=Adedamola%20Olarele&business=Dolf%20Technologies&unit=1E`;
      }
    };

    const prevItem = () => {
      if (itemId > 1) {
        window.location.href = `/details?id=${itemId - 1}&customer=Adedamola%20Olarele&business=Dolf%20Technologies&unit=1E`;
      }
    };

    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const selectImage = (index: number) => {
      setCurrentImageIndex(index);
    };

    return (
     
      <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center p-4">
        {/* Main Modal */}
        <div className="bg-white rounded-tl-xl rounded-tr-sm shadow-2xl max-w-4xl w-[600px] h-[100vh] overflow-hidden">
          {/* Header */}
          <div className="bg-white border-b border-[#E2E8F0] px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-3">
                  <button 
                    onClick={prevItem}
                    disabled={itemId <= 1}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      itemId <= 1 
                        ? 'bg-gray-300 text-white/70 cursor-not-allowed' 
                        : 'bg-[#0057B8] text-white hover:bg-[#004494]'
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M6 15l6-6 6 6" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextItem}
                    disabled={itemId >= 5}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      itemId >= 5 
                        ? 'bg-gray-300 text-white/70 cursor-not-allowed' 
                        : 'bg-[#0057B8] text-white hover:bg-[#004494]'
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>
                <span className="text-[#1E293B] text-lg font-semibold">{itemId} of 5 Entries</span>
              </div>
              <Link href="/" className="w-8 h-8 rounded-full bg-[#1F2937] text-white flex items-center justify-center shadow-md hover:bg-[#111827] transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Entry Information */}
          <div className="bg-[#D6E4F5] px-6 py-4 rounded-xl mx-6 my-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full border-2 border-[#0057B8] flex items-center justify-center text-[#0057B8]">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-[#0F172A] font-semibold text-lg">Adedamola Olarele (1E)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full border-2 border-[#0057B8]  flex items-center justify-center text-[#0057B8]">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-[#0F172A] font-semibold">Dolf Technologies</span>
              </div>
            </div>
          </div>

          {/* Main Product Display */}
          <div className="px-2">
            <div className="relative bg-white rounded-lg p-8 text-white text-center min-h-[250px] flex items-center justify-center">
              {/* Main Product Image */}
              <div className="text-center z-10">
                <div className="text-8xl mb-6">{images[currentImageIndex].main}</div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-full p-3 transition-colors border border-gray-300 z-20 shadow-lg"
              >
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-full p-3 transition-colors border border-gray-300 z-20 shadow-lg"
              >
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Thumbnail Slider Footer */}
          <div className=" border-t  border-[#E2E8F0] px-2 py-4">
            <div className="flex items-center ">
              <div className="flex space-x-4 overflow-x-auto p-2 flex-1 justify-center">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => selectImage(index)}
                    className={`flex-shrink-0 w-30 h-30 rounded-lg p-3 transition-all ${
                      index === currentImageIndex 
                        ? 'ring-2 ring-[#0057B8] bg-white shadow-md' 
                        : 'bg-gray-100 border hover:bg-gray-50'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-1">{image.main}</div>
                      {/* <div className="text-xs text-[#64748B] font-medium">{image.title}</div> */}
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Slider Navigation */}
              {/* <div className="flex space-x-2 ml-4">
                <button 
                  onClick={prevItem}
                  className="w-8 h-8 bg-white border border-[#E2E8F0] text-[#64748B] rounded-full flex items-center justify-center hover:bg-[#F8FAFC] transition-colors"
                >
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293-3.293a1 1 0 111.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </button>
                <button 
                  onClick={nextItem}
                  className="w-8 h-8 bg-white border border-[#E2E8F0] text-[#64748B] rounded-full flex items-center justify-center hover:bg-[#F8FAFC] transition-colors"
                >
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      
    );

  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailsContent />
    </Suspense>
  )
} 