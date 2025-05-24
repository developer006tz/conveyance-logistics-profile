"use client";
import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaUsers, FaCheckSquare, FaLaptop, FaAddressCard, FaEnvelope, FaUserTie, FaIdCard, FaCar } from 'react-icons/fa';

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
                <p className="text-red-700 font-medium">Onaafrica Investment</p>
                <p className="text-sm text-gray-500">Friday, March 29, 2025</p>
              </div>
            </div>
            
            {/* Right side with document info */}
          
          </div>
          
          {/* Decorative element */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 via-red-500 to-transparent"></div>
        </div>

        {/* Meeting Overview */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Meeting Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            The meeting focused on introducing new team members, clarifying management roles, and 
            establishing new transportation requirements for sales officers. These decisions aim to 
            strengthen the company's operational capacity and improve efficiency in service delivery.
          </p>
        </div>

        {/* Introduction of New Members */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <FaUserTie className="text-red-700" />
            <h2 className="text-xl font-semibold text-gray-800">Introduction of New Members</h2>
          </div>
          
          {/* Member 1 */}
          <div className="pl-7 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-700">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Salome - Marketing Specialist</h3>
              <p className="text-gray-700 mb-2"><span className="font-medium">Key Responsibilities:</span></p>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-1">Prepare marketing seminars</li>
                <li className="mb-1">Head of Dodoma branch</li>
                <li className="mb-1">Recruitment of new talents</li>
              </ul>
            </div>
          </div>
          
          {/* Member 2 */}
          <div className="pl-7">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-700">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Glory - HR Officer</h3>
              <p className="text-gray-700 mb-2"><span className="font-medium">Key Responsibilities:</span></p>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-1">Company connector between digital products & physical products</li>
                <li className="mb-1">Take over Rukia's responsibilities</li>
                <li className="mb-1">Assist with marketing activities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cementing of General Manager Role */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <FaIdCard className="text-red-700" />
            <h2 className="text-xl font-semibold text-gray-800">Cementing of General Manager Role</h2>
          </div>
          <div className="pl-7">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-700">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Lucy - General Manager</h3>
              <p className="text-gray-700">Her responsibilities will increase as the company continues to expand its operations. As General Manager, Lucy will oversee all departments and ensure smooth coordination between different branches and business units.</p>
            </div>
          </div>
        </div>
        
        {/* Transportation Requirements */}
        <div className="mb-4 mt-20">
          <div className="flex items-center gap-2 mb-3">
            <FaCar className="text-red-700" />
            <h2 className="text-xl font-semibold text-gray-800">Sales Officers Transportation Requirements</h2>
          </div>
          <div className="pl-7">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-gray-800 mb-3"><span className="font-medium text-red-700">New Requirement:</span> All sales officers must have a valid driving license</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-1"><span className="font-medium">Deadline:</span> Two (2) months from today</li>
                <li className="mb-1"><span className="font-medium">Important Note:</span> After the two-month period, any sales officer without a valid driving license will be deducted 60,000/= from their salary for payment of a driver</li>
              </ul>
              <div className="mt-3 bg-red-100 p-2 rounded border-l-4 border-red-700">
                <p className="text-red-800 text-sm font-medium">This requirement is non-negotiable and will be strictly enforced to ensure efficient service delivery to our clients.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Points Summary */}
        <div className="mb-8 bg-gray-50 p-5 rounded-lg border border-gray-200 print:break-inside-avoid">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-3">Key Points Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-red-700 font-medium mb-2">New Team Members</h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm">
                <li>Salome - Marketing Specialist</li>
                <li>Glory - HR Officer</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-red-700 font-medium mb-2">Management Changes</h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm">
                <li>Lucy's GM role reinforced</li>
                <li>Expanded responsibilities</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-red-700 font-medium mb-2">New Requirements</h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm">
                <li>Driving license for sales officers</li>
                <li>Two-month implementation period</li>
                <li>Financial implications for non-compliance</li>
              </ul>
            </div>
          </div>
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
                <p className="text-gray-600 text-sm">General Manager</p>
                <p className="text-gray-600 text-sm italic">Onaafrica Investment Limited</p>
              </div>
              <div className="mt-3 h-px w-2/3 bg-gradient-to-r from-green-700 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Company Contact Information */}
        <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-100 pt-4 print:break-inside-avoid">
          <p className="font-medium text-gray-700 mb-1">Onaafrica Investment Limited</p>
          <p>Head Office: P.O. Box 55063, Ubungo, Dar es Salaam, Tanzania</p>
          <p>Branch Office: Nane nane, Njiro, Arusha</p>
          <p>Phone: +255 711 400 200 | Email: packaging@onaafricainvestment.com</p>
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