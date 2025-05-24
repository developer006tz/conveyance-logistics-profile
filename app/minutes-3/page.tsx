"use client";
import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaUsers, FaCheckSquare, FaLaptop, FaAddressCard, FaEnvelope } from 'react-icons/fa';

export default function Minutes() {
  return (
    <div className="bg-white min-h-screen">
      {/* Printable Minutes Container */}
      <div className="max-w-5xl mx-auto p-8 bg-white shadow-none print:shadow-none">
        {/* Header with Logo and Company Info */}
        <div className="relative mb-10 pt-4 pb-6 border-b-2 border-red-700">
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-1/3 h-24 bg-gradient-to-l from-red-50 to-transparent opacity-70 rounded-bl-3xl -z-10"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left side with logo and title */}
            <div className="flex items-center gap-5">
              <div className="relative h-20 w-60 p-1 bg-transparent rounded-lg shadow-none">
                <Image 
                  src="https://res.cloudinary.com/dcmwnrvzk/image/upload/v1741873844/onaafrica-logo_4x_gk4j49.png" 
                  alt="Onaafrica Investment" 
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-1"
                  priority
                />
              </div>
              <div className="border-l-4 border-red-700 pl-4">
                <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Meeting Minutes</h1>
                <p className="text-red-700 font-medium">Company Office Operations</p>
                <p className="text-sm text-gray-500">Monday, March 24, 2025</p>
              </div>
            </div>
            
            
          </div>
          
          {/* Decorative element */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 via-red-500 to-transparent"></div>
        </div>

        {/* Meeting Overview */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Meeting Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            A comprehensive discussion was held regarding operational procedures, communication protocols, 
            and resource allocation within the company. The meeting established new guidelines for regular team 
            gatherings, reporting structures, and equipment distribution.
          </p>
        </div>

        {/* Regular Meetings Schedule */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <FaCalendarAlt className="text-red-700" />
            <h2 className="text-xl font-semibold text-gray-800">Regular Meetings Schedule</h2>
          </div>
          <div className="pl-7">
            <p className="mb-2"><span className="font-medium">Frequency:</span> Minimum of two office meetings per week</p>
            <p className="mb-2"><span className="font-medium">Designated Days:</span> Monday and Thursday</p>
            <p className="mb-2"><span className="font-medium">Meeting Focus Areas:</span></p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li className="mb-1">Monday Meetings: Comprehensive overview of the entire week&apos;s operations</li>
              <li className="mb-1">Thursday Meetings: Review of sales debt and unpaid customer accounts</li>
            </ul>
          </div>
        </div>

        {/* Administrative Protocols */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Administrative Protocols</h2>
          
          {/* Company Representation */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <FaAddressCard className="text-red-700" />
              <h3 className="text-lg font-medium text-gray-800">Company Representation</h3>
            </div>
            <div className="pl-7">
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-1">Business Cards: All team members will be issued company business cards</li>
                <li className="mb-1">Company Identification: Every employee must have an official company ID for proper representation</li>
              </ul>
            </div>
          </div>
          
          {/* Communication Channels */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <FaEnvelope className="text-red-700" />
              <h3 className="text-lg font-medium text-gray-800">Communication Channels</h3>
            </div>
            <div className="pl-7">
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-1">All official communications must be shared in the designated WhatsApp group</li>
                <li className="mb-1">Email Infrastructure: Lydia and Ester to receive company email accounts</li>
              </ul>
            </div>
          </div>
          
          {/* Documentation and Reporting */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <FaCheckSquare className="text-red-700" />
              <h3 className="text-lg font-medium text-gray-800">Documentation and Reporting</h3>
            </div>
            <div className="pl-7">
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-1">Daily reports must be submitted using the provided template until a formal reporting system is implemented</li>
                <li className="mb-1">Invoice Management: All proforma invoices must be processed exclusively by Rukia</li>
                <li className="mb-1">Invoice processing will help in tracking of:</li>
                <ul className="list-circle pl-6 text-gray-700">
                  <li className="mb-1">Progress orders</li>
                  <li className="mb-1">Completed orders</li>
                  <li className="mb-1">Client feedback mechanisms</li>
                </ul>
              </ul>
            </div>
          </div>
          
          {/* Equipment Allocation */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <FaLaptop className="text-red-700" />
              <h3 className="text-lg font-medium text-gray-800">Equipment Allocation</h3>
            </div>
            <div className="pl-7">
              <p className="mb-2"><span className="font-medium">Computer Distribution:</span></p>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-1">HP EliteBook laptops to be assigned to Lidya and Ester</li>
                <li className="mb-1">One HP computer to be repaired and allocated to Waridi</li>
                <li className="mb-1">Reception computer to undergo maintenance to address keyboard issues and other technical problems</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Key Points Summary */}
        <div className="mb-8 bg-gray-50 p-4 rounded-lg border border-gray-200 print:break-inside-avoid">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Key Points Summary</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li className="mb-1"><span className="font-medium">Meeting Schedule:</span> Two weekly meetings - Monday (week overview) and Thursday (sales debt review)</li>
            <li className="mb-1"><span className="font-medium">Business Cards:</span> Required for all team members</li>
            <li className="mb-1"><span className="font-medium">Identification:</span> Company ID mandatory for all employees</li>
            <li className="mb-1"><span className="font-medium">Reporting System:</span> Daily reports using provided template pending formal system</li>
            <li className="mb-1"><span className="font-medium">Communication:</span> All official communications via designated WhatsApp group</li>
            <li className="mb-1"><span className="font-medium">Invoice Protocol:</span> Proforma invoices to be processed only by Rukia</li>
            <li className="mb-1"><span className="font-medium">Email Accounts:</span> Company email addresses to be created for Lidya and Ester</li>
            <li className="mb-1"><span className="font-medium">Computer Allocation:</span> HP EliteBooks for Lidya and Ester; repaired HP for Waridi; maintenance for reception computer</li>
          </ul>
        </div>
        
        {/* Footer with Signature Area */}
        <div className="mt-12 border-t border-red-100 pt-6 print:break-inside-avoid">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex-1 bg-gray-50 p-5 rounded-lg border-l-4 border-red-700 shadow-sm transition-all hover:shadow-md">
              <p className="font-medium text-gray-800 flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Prepared by:
              </p>
              <div className="mt-2 border-t border-gray-200 pt-3">
                <p className="text-gray-800 font-semibold">Ludovic</p>
                <p className="text-gray-600 text-sm">Senior Software Engineer</p>
                <p className="text-gray-600 text-sm italic">Onaafrica Investment Limited</p>
              </div>
              <div className="mt-3 h-px w-2/3 bg-gradient-to-r from-red-700 to-transparent"></div>
            </div>
            
            <div className="flex-1 bg-gray-50 p-5 rounded-lg border-l-4 border-green-700 shadow-sm transition-all hover:shadow-md">
              <p className="font-medium text-gray-800 flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Approved by:
              </p>
              <div className="mt-2 border-t border-gray-200 pt-3">
                <p className="text-gray-800 font-semibold">Lucy</p>
                <p className="text-gray-600 text-sm">GM</p>
                <p className="text-gray-600 text-sm italic">Onaafrica Investment Limited</p>
              </div>
              <div className="mt-3 h-px w-2/3 bg-gradient-to-r from-green-700 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Print Button - Hidden in Print */}
        <div className="mt-8 text-center print:hidden">
          <button 
            onClick={() => window.print()}
            className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition-colors"
          >
            Print Minutes
          </button>
        </div>
      </div>
    </div>
  );
}