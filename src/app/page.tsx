"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [selectedItems, setSelectedItems] = useState([1, 2, 3]);
  const [repackOptions, setRepackOptions] = useState({
    1: "Do not repack",
    2: "Remove outer box only", 
    3: "Full Repack",
    4: "Do not repack",
    5: "Do not repack"
  });
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleItemSelection = (itemId: number) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const toggleAllItems = () => {
    if (selectedItems.length === 5) {
      setSelectedItems([]);
    } else {
      setSelectedItems([1, 2, 3, 4, 5]);
    }
  };

  const handleRepackOptionChange = (itemId: number, option: string) => {
    setRepackOptions(prev => ({
      ...prev,
      [itemId]: option
    }));
  };

  const openDetailsModal = (item :) => {
    setSelectedItem(item);
    setShowDetailsModal(true);
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedItem(null);
  };

  const shipmentData = [
    { id: 1, tracking: "xxxxxxxxxxx 310326", weight: "90.90", dimensions: "20 x 20 x 20", received: "JUL-07-2025", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", photos: 5 },
    { id: 2, tracking: "xxxxxxxxxxx 310326", weight: "90.90", dimensions: "20 x 20 x 20", received: "JUL-07-2025", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", photos: 5 },
    { id: 3, tracking: "xxxxxxxxxxx 310326", weight: "90.90", dimensions: "20 x 20 x 20", received: "JUL-07-2025", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", photos: 5 },
    { id: 4, tracking: "xxxxxxxxxxx 310326", weight: "90.90", dimensions: "20 x 20 x 20", received: "JUL-07-2025", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", photos: 5 },
    { id: 5, tracking: "xxxxxxxxxxx 310326", weight: "90.90", dimensions: "20 x 20 x 20", received: "JUL-07-2025", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", photos: 5 },
  ];

  return (
    <div className="flex h-screen bg-[#F8F9FA] overflow-hidden">
      {/* Left Sidebar */}
      <div className="relative w-16 bg-[#0B5ED7] flex flex-col items-center py-4 text-white">
        {/* left accent strip */}
        <span className="absolute inset-y-0 left-0 w-[3px] bg-[#37B7FF]" />

        {/* logo */}
        <div className="w-9 h-9 rounded-lg bg-white grid place-items-center mb-8 shadow-sm">
          <span className="text-[#0B5ED7] font-bold">S</span>
        </div>

        {/* top icons */}
        <nav className="flex flex-col items-center gap-7">
          {/* home */}
          <button aria-label="Home" className="text-white/80 hover:text-white">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 11l9-7 9 7" /><path d="M5 10v10h5v-6h4v6h5V10" />
            </svg>
          </button>

          {/* users */}
          <button aria-label="Users" className="text-white/80 hover:text-white">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 11a4 4 0 10-8 0" /><path d="M3 20a6 6 0 0118 0" />
            </svg>
          </button>

          {/* document */}
          <button aria-label="Docs" className="text-white/80 hover:text-white">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <path d="M14 2v6h6" />
            </svg>
          </button>

          {/* box */}
          <button aria-label="Boxes" className="text-white/80 hover:text-white">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l8 4-8 4-8-4 8-4z" /><path d="M4 6v10l8 4 8-4V6" />
            </svg>
          </button>

          {/* ACTIVE: shipments */}
          <div className="w-12 h-12 rounded-md bg-[#FF7A1A] grid place-items-center shadow-md">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 7h10v10H3zM13 10h4l3 4v3h-7z" /><circle cx="7" cy="17" r="1.6" /><circle cx="17" cy="17" r="1.6" />
            </svg>
          </div>

          {/* warehouse */}
          <button aria-label="Warehouse" className="text-white/80 hover:text-white">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 20V9l9-5 9 5v11" /><path d="M7 20v-6h10v6" />
            </svg>
          </button>

          {/* network */}
          <button aria-label="Network" className="text-white/80 hover:text-white">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v7M5 21h14M5 14h14" />
            </svg>
          </button>

          {/* truck */}
          <button aria-label="Truck" className="text-white/80 hover:text-white">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7h11v8H3zM14 10h4l3 4v1h-7z" /><circle cx="7" cy="17" r="1.6" /><circle cx="17" cy="17" r="1.6" />
            </svg>
          </button>

          {/* profile */}
          <button aria-label="Profile" className="text-white/80 hover:text-white">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="7" r="3" /><path d="M5 21a7 7 0 0114 0" />
            </svg>
          </button>
        </nav>

        {/* bottom icons */}
        <div className="mt-auto flex flex-col items-center gap-6 pb-2">
          <button aria-label="Settings" className="text-white/80 hover:text-white">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
              <path d="M3 12h2M19 12h2M12 3v2M12 19v2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" />
            </svg>
          </button>

          <button aria-label="Info" className="w-7 h-7 rounded-full bg-red-500 grid place-items-center shadow-md hover:bg-red-600">
            <span className="text-white text-xs font-bold">i</span>
          </button>
        </div>
      </div>


      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
       <div className=" px-4 bg-[#e5e5e5] sm:px-6 py-3  border-b-1 border-gray-300 ">
        <div className="flex items-center gap-2 sm:gap-3 ">
          {/* Truck + check (outline) */}
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 text-slate-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {/* truck body */}
            <path d="M2.5 14V7.5A1.5 1.5 0 014 6h9v8H8.5" />
            {/* trailer/cabin */}
            <path d="M13 10h3.2c.5 0 .97.26 1.23.69l1.47 2.31H21a1 1 0 011 1v2h-2.2" />
            {/* wheels */}
            <circle cx="8.5" cy="16.5" r="1.75" />
            <circle cx="18.5" cy="16.5" r="1.75" />
            {/* small check on the box */}
            <path d="M6.75 9.75l1.25 1.25 2.25-2.25" />
          </svg>

          {/* Breadcrumb */}
          <nav className="flex items-center text-sm">
            <span className="text-slate-700">Shipments</span>
            <span className="px-2 text-slate-400">/</span>
            <span className="font-medium text-slate-800">Create New</span>
          </nav>
        </div>
      </div>


        {/* Main Content Area */}
        <div className="flex-1 bg-[#e5e5e5] p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {/* Progress Bar */}
          <div className="flex items-center justify-center mb-4 sm:mb-6 lg:mb-8">
            <div className="flex flex-col sm:flex-row items-center space-y-0 sm:space-y-0 sm:space-x-1 lg:space-x-2">
              {[
                { number: 1, title: "Create Shipment", active: true },
                { number: 2, title: "Repacking & Consolidation", active: false },
                { number: 3, title: "Shipment Details", active: false },
                { number: 4, title: "Shipping Method", active: false },
                { number: 5, title: "Summary & Confirmation", active: false }
              ].map((step, index) => (
                <div key={step.number} className="flex flex-col cursor-pointer sm:flex-row items-center">
                  <div className={`w-10 h-10 cursor-pointer rounded-full flex items-center justify-center text-base sm:text-lg lg:text-xl font-semibold aspect-square ${
                    step.active 
                      ? 'bg-[#0057B8] text-white ' 
                      : 'border-1 border-[#0057B8] text-[#0057B8]'
                  }`}>
                    {step.number}
                  </div>
                  <span className={`mt-2 sm:mt-0 sm:ml-3 text-sm sm:text-base  text-center sm:text-left ${
                    step.active ? 'text-black' : 'text-black'
                  }`}>
                    {step.title}
                  </span>
                  {index < 4 && (
                    <div className="hidden sm:block w-8 lg:w-12 h-px bg-[#0057B8] mx-1 lg:mx-3"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Information Cards */}
          <div className="rounded-2xl bg-white shadow-sm p-4 sm:p-6 mb-4">
            <div className="flex flex-col  sm:flex-row items-stretch sm:items-center
                            divide-y divide-slate-200 sm:divide-y-0 sm:divide-x">

              {/* Customer name */}
              <div className="flex grow items-center gap-3 py-3 sm:py-0 sm:px-6 ">
                <span className="grid place-items-center w-10 h-10 sm:w-12 sm:h-12
                                rounded-full border-2 border-[#0057B8] text-[#0057B8]">
                  <svg viewBox="0 0 20 20" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </span>
                <div>
                  <p className="text-sm text-slate-500">Customer name</p>
                  <p className="text-base font-semibold text-slate-900">Adedamola Olarele</p>
                </div>
              </div>

              {/* Business name */}
              <div className="flex  grow items-center gap-3 py-3 sm:py-0 sm:px-6">
                <span className="grid place-items-center w-10 h-10 sm:w-12 sm:h-12
                                rounded-full border-2 border-[#0057B8] text-[#0057B8]">
                  <svg viewBox="0 0 20 20" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
                  </svg>
                </span>
                <div>
                  <p className="text-sm text-slate-500">Business name</p>
                  <p className="text-base font-semibold text-slate-900">Dolf Technologies</p>
                </div>
              </div>

              {/* Unit no. */}
              <div className="flex  grow items-center gap-3 py-3 sm:py-0 sm:px-6">
                <span className="grid place-items-center w-10 h-10 sm:w-12 sm:h-12
                                rounded-full border-2 border-[#0057B8] text-[#0057B8]">
                  <svg viewBox="0 0 20 20" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                  </svg>
                </span>
                <div>
                  <p className="text-sm text-slate-500">Unit no.</p>
                  <p className="text-base font-semibold text-slate-900">1E</p>
                </div>
              </div>

            </div>
          </div>


          {/* Data Table */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
            <table className="w-full border-collapse">
              <thead className="bg-[#0057B8] text-white">
                <tr>
                  <th className="px-4 py-4 text-left border border-[#E2E8F0]">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedItems.length === 5}
                        onChange={toggleAllItems}
                        className="w-5 h-5 text-[#0057B8] bg-white border-0 rounded focus:ring-2 focus:ring-white/20"
                      />
                    </div>
                  </th>
                  <th className="px-8 py-4 text-center border border-[#E2E8F0]">
                    <div className="flex items-center ">
                      <span className="font-semibold text-sm">TRACKING</span>
                      <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </th>
                  <th className=" py-4 text-center border border-[#E2E8F0]">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm">WEIGHT & DIMENSIONS</span>
                      <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </th>
                  <th className="px-8 py-4 text-center border border-[#E2E8F0]">
                    <span className="font-semibold text-sm">DESCRIPTION</span>
                  </th>
                  <th className="px-8 py-4 text-center border border-[#E2E8F0]">
                    <span className="font-semibold text-sm">SELECT REPACK OPTION</span>
                  </th>
                  <th className="px-8 py-4 text-center">
                    <span className="font-semibold text-sm">PHOTOS</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9]">
                {shipmentData.map((item) => (
                  <tr key={item.id} className="hover:bg-[#F8FAFC] transition-colors">
                    <td className="px-4 py-5 border border-[#E2E8F0]">
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(item.id)}
                          onChange={() => toggleItemSelection(item.id)}
                          className="w-5 h-5 text-[#0057B8] bg-white border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#0057B8]/20"
                        />
                        <span className="text-[#1E293B] font-medium">{item.id}</span>
                      </div>
                    </td>
                    <td className="px-2 py-5">
                      <div className="text-[#1E293B] font-medium">
                        <div>{item.tracking}</div>
                        <div>Received: {item.received}</div>
                      </div>
                    </td>
                    <td className="px-2 py-2 border border-[#E2E8F0]">
                      <div className={`text-[#1E293B] text-center ${item.id === 1 ? 'relative' : ''}`}>
                      
                        <span className="text-sm">{item.weight}</span> 
                        <span className="text-[#64748B] "> | </span> 
                        <span className="text-sm ">{item.dimensions}</span>
                      </div>
                    </td>
                    <td className="px-2 py-2 border border-[#E2E8F0]">
                      <div className="text-[#1E293B] text-sm leading-relaxed">{item.description}</div>
                    </td>
                    <td className="px-2 py-5 border border-[#E2E8F0]">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between space-x-2">
                        <label                           
                            className="flex items-center gap-2 cursor-pointer"
                          >
                          <input
                            type="radio"
                            name={`repack-${item.id}`}
                            value="Do not repack"
                            checked={repackOptions[item.id] === "Do not repack"}
                            onChange={() => handleRepackOptionChange(item.id, "Do not repack")}
                            className="w-4 h-4 text-[#0057B8] border-[#CBD5E1] focus:ring-[#0057B8]/20"
                          />
                          <span className="text-sm text-[#1E293B]">Do not repack</span>
                          </label>
                          <svg
                            viewBox="0 0 20 20"
                            className="w-4 h-4 text-slate-400 cursor-help"
                            aria-hidden="true"
                          >
                            
                            <circle cx="10" cy="10" r="8.75" fill="none" stroke="currentColor" strokeWidth="1.5" />
                            
                            <circle cx="10" cy="6.75" r="1" fill="currentColor" />
                            
                            <rect x="9.25" y="9.5" width="1.5" height="5" rx="0.75" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="flex items-center justify-between space-x-2">
                         <label
                           
                            className="flex items-center gap-2 cursor-pointer"
                          >
                          <input
                            type="radio"
                            id = {`repack-remote-${item.id}`}
                            name={`repack-${item.id}`}
                            value="Remove outer box only"
                            checked={repackOptions[item.id] === "Remove outer box only"}
                            onChange={() => handleRepackOptionChange(item.id, "Remove outer box only")}
                            className="w-4 h-4 text-[#0057B8] border-[#CBD5E1] focus:ring-[#0057B8]/20"
                          />
                          <span className="text-sm text-[#1E293B]">Remove outer box only</span>
                          </label>
                          <svg
                            viewBox="0 0 20 20"
                            className="w-4 h-4 text-slate-400 cursor-help"
                            aria-hidden="true"
                          >
                            
                            <circle cx="10" cy="10" r="8.75" fill="none" stroke="currentColor" strokeWidth="1.5" />
                            
                            <circle cx="10" cy="6.75" r="1" fill="currentColor" />
                            
                            <rect x="9.25" y="9.5" width="1.5" height="5" rx="0.75" fill="currentColor" />
                          </svg>
                        </div>
                        
                        <div className="flex items-center justify-between ">
                          {/* Left: radio + label (clickable together) */}
                          <label
                            htmlFor={`repack-full-${item.id}`}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <input
                              id={`repack-full-${item.id}`}
                              type="radio"
                              name={`repack-${item.id}`}
                              value="Full Repack"
                              checked={repackOptions[item.id] === "Full Repack"}
                              onChange={() => handleRepackOptionChange(item.id, "Full Repack")}
                              className="h-4 w-4 accent-[#0057B8] focus:ring-2 focus:ring-[#0057B8]/30"
                            />
                            <span className="text-sm text-slate-800">Full Repack</span>
                          </label>

                          {/* Right: info icon */}
                          <button
                            type="button"
                            aria-label="More info about Full Repack"
                            className="shrink-0 text-slate-400 hover:text-slate-500"
                          >
                            <svg viewBox="0 0 20 20" className="w-4 h-4" aria-hidden="true">
                              <circle cx="10" cy="10" r="8.75" fill="none" stroke="currentColor" strokeWidth="1.5" />
                              <circle cx="10" cy="6.75" r="1" fill="currentColor" />
                              <rect x="9.25" y="9.5" width="1.5" height="5" rx="0.75" fill="currentColor" />
                            </svg>
                          </button>
                        </div>

                      </div>
                    </td>
                    <td className="px-8 py-5 border border-[#E2E8F0]">
                     <Link
                        href={`/details?id=${item.id}&customer=Adedamola%20Olarele&business=Dolf%20Technologies&unit=1E`}
                        className="group relative inline-block hover:scale-105 transition-transform"
                      >
                        <div className="relative w-9 h-9 rounded-lg overflow-hidden shadow-sm ring-1 ring-slate-900/10">
                          {/* image (or placeholder color) */}
                          <img
                            src={item.thumbUrl || "/placeholder.jpg"}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          {/* dark overlay for contrast */}
                          <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors" />
                          {/* +count */}
                          <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] font-semibold">
                            +{item.photos}
                          </span>
                        </div>
                      </Link>

                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot >
                <tr>
                  <td colSpan={10} className="p-4 border-t border-slate-200">
                
                    {/* Pagination */}
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-[#64748B] text-sm">Showing</span>
                        <select className="border border-[#CBD5E1] rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-[#0057B8]/20 focus:border-[#0057B8]">
                          <option>10</option>
                          <option>20</option>
                          <option>50</option>
                        </select>
                        <span className="text-[#64748B] text-sm">out of 50</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 mr-4">
                        <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#F8FAFC] transition-colors">
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 text-[#64748B]">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </button>
                        <button className="w-9 h-9 flex items-center justify-center bg-[#0057B8] text-white rounded-lg font-medium">1</button>
                        <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#F8FAFC] transition-colors">
                          <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 text-[#64748B]">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

         

          {/* Bottom Navigation */}
          <div className="flex justify-end space-x-4 mt-10">
            <button className="px-6 py-2  bg-pink-300  rounded-xl text-[#1E293B] hover:bg-pink-400 transition-colors flex items-center space-x-2 font-medium">
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span className="cursor-pointer">Back</span>
            </button>
            <button className="px-6 py-2 bg-[#0057B8] text-white rounded-xl hover:bg-[#004494] transition-colors flex items-center space-x-2 font-medium shadow-sm">
              <span className="cursor-pointer">Next</span>
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
