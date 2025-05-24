"use client";
import React from 'react';
import Image from 'next/image';
import { FaMoneyBillWave, FaGasPump, FaBroom, FaCarAlt, FaMobileAlt, FaBolt, FaWrench, FaPhoneAlt, FaUserFriends, FaHandHoldingUsd, FaMotorcycle } from 'react-icons/fa';

export default function ExpensesReport() {
  return (
    <div className="bg-white min-h-screen">
      {/* Printable Report Container */}
      <div className="max-w-5xl mx-auto p-8 bg-white shadow-none print:shadow-none">
        {/* Header with Logo and Company Info - Similar to the image */}
        <div className="flex justify-between items-center mb-2">
          <div className="relative h-20 w-48">
            <Image 
              src="https://res.cloudinary.com/dcmwnrvzk/image/upload/v1741873844/onaafrica-logo_4x_gk4j49.png" 
              alt="Onaafrica Investment" 
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <div className="text-center flex-1">
            <h1 className="text-2xl font-bold text-black uppercase tracking-wide">ONA AFRICA INVESTMENT</h1>
          </div>
          <div className="relative h-20 w-48">
            <Image 
              src="https://res.cloudinary.com/dcmwnrvzk/image/upload/v1741873844/onaafrica-logo_4x_gk4j49.png" 
              alt="Onaafrica Investment" 
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
        
        {/* Company Description Line */}
        <div className="text-center mb-2">
          <p className="text-sm font-medium">
            Manufactures of wood, wood products, Packaging, Spair Parts, leather, and farming products
          </p>
        </div>
        
        {/* Company Contact Information */}
        <div className="text-center mb-6">
          <p className="text-sm">P.O Box 55063- UBUNGO-DAR ES SALAAM, TANZANIA</p>
          <p className="text-sm">Tel/Fax:+255 716 400 200</p>
          <p className="text-sm">Email:info@onasasa.com</p>
        </div>
        
        {/* Report Title Box */}
        <div className="border-2 border-black mb-2">
          <h2 className="text-xl font-bold text-center py-2">GENERAL EXPENSES REPORT</h2>
        </div>
        
        {/* Report Date Box */}
        <div className="border-2 border-black mb-4">
          <h3 className="text-lg font-bold text-center py-1">05/04/2025</h3>
        </div>
        
        {/* Table Header */}
        <div className="grid grid-cols-4 border-2 border-black mb-0 font-bold">
          <div className="border-r-2 border-black p-2 text-center">S/N</div>
          <div className="border-r-2 border-black p-2 text-left">DESCRIPTION</div>
          <div className="border-r-2 border-black p-2 text-center">AMOUNT</div>
          <div className="p-2 text-center">BALANCE</div>
        </div>
        
        {/* Starting Balance */}
        <div className="grid grid-cols-4 border-x-2 border-b-2 border-black">
          <div className="border-r-2 border-black p-2 text-center">1</div>
          <div className="border-r-2 border-black p-2">CASH ON HAND</div>
          <div className="border-r-2 border-black p-2 text-right font-medium text-green-500">400,000.00</div>
          <div className="p-2 text-right font-medium text-green-500">400,000.00</div>
        </div>
        
        {/* Expense Items - Car Fuel April 2nd */}
        <div className="grid grid-cols-4 border-x-2 border-b-2 border-black">
          <div className="border-r-2 border-black p-2 text-center">2</div>
          <div className="border-r-2 border-black p-2 flex items-center">
            <FaGasPump className="text-red-700 mr-2" />
            <span>CAR FUEL <span className='bg-orange-300/30 p-1 rounded-lg'>02/04/2025</span></span>
          </div>
          <div className="border-r-2 border-black p-2 text-right font-medium text-red-700">104,594.00</div>
          <div className="p-2 text-right font-medium">295,406.00</div>
        </div>
        
        {/* Expense Items - Office Cleanliness */}
        <div className="grid grid-cols-4 border-x-2 border-b-2 border-black">
          <div className="border-r-2 border-black p-2 text-center">3</div>
          <div className="border-r-2 border-black p-2 flex items-center">
            <FaBroom className="text-red-700 mr-2" />
            <span>GENERAL DEEP OFFICE CLEANESS <span className='bg-orange-300/30 p-1 rounded-lg'>02/04/2025</span> </span>
          </div>
          <div className="border-r-2 border-black p-2 text-right font-medium text-red-700">10,000.00</div>
          <div className="p-2 text-right font-medium">285,406.00</div>
        </div>
        
        {/* New Expense Item - Additional Office Cleanliness */}
        <div className="grid grid-cols-4 border-x-2 border-b-2 border-black">
          <div className="border-r-2 border-black p-2 text-center">4</div>
          <div className="border-r-2 border-black p-2 flex items-center">
            <FaBroom className="text-red-700 mr-2" />
            <span>OFFICE CLEANESS <span className='bg-orange-300/30 p-1 rounded-lg'>05/04/2025</span></span>
          </div>
          <div className="border-r-2 border-black p-2 text-right font-medium text-red-700">5,000.00</div>
          <div className="p-2 text-right font-medium">280,406.00</div>
        </div>
        
        {/* Expense Items - Driver */}
        <div className="grid grid-cols-4 border-x-2 border-b-2 border-black">
          <div className="border-r-2 border-black p-2 text-center">5</div>
          <div className="border-r-2 border-black p-2 flex items-center">
            <FaCarAlt className="text-red-700 mr-2" />
            <span>DRIVER</span>
          </div>
          <div className="border-r-2 border-black p-2 text-right font-medium text-red-700">10,000.00</div>
          <div className="p-2 text-right font-medium">270,406.00</div>
        </div>
        
        {/* Expense Items - Office Phone and NMB Card */}
        <div className="grid grid-cols-4 border-x-2 border-b-2 border-black">
          <div className="border-r-2 border-black p-2 text-center">6</div>
          <div className="border-r-2 border-black p-2 flex items-center">
            <FaMobileAlt className="text-red-700 mr-2" />
            <span>OFFICE PHONE AND NMB CARD</span>
          </div>
          <div className="border-r-2 border-black p-2 text-right font-medium text-red-700">120,000.00</div>
          <div className="p-2 text-right font-medium">150,406.00</div>
        </div>
        
        {/* Expense Items - Car Fuel */}
        <div className="grid grid-cols-4 border-x-2 border-b-2 border-black">
          <div className="border-r-2 border-black p-2 text-center">7</div>
          <div className="border-r-2 border-black p-2 flex items-center">
            <FaGasPump className="text-red-700 mr-2" />
            <span>CAR FUEL</span>
          </div>
          <div className="border-r-2 border-black p-2 text-right font-medium text-red-700">10,000.00</div>
          <div className="p-2 text-right font-medium">140,406.00</div>
        </div>
        
        {/* Expense Items - Komba Transport */}
        <div className="grid grid-cols-4 border-x-2 border-b-2 border-black">
          <div className="border-r-2 border-black p-2 text-center">8</div>
          <div className="border-r-2 border-black p-2 flex items-center">
            <FaUserFriends className="text-red-700 mr-2" />
            <span>KOMBA TRANSPORT BACK TO MLANDIZI</span>
          </div>
          <div className="border-r-2 border-black p-2 text-right font-medium text-red-700">5,000.00</div>
          <div className="p-2 text-right font-medium">135,406.00</div>
        </div>
        
        {/* Expense Items - Glory Transport */}
        <div className="grid grid-cols-4 border-x-2 border-b-2 border-black">
          <div className="border-r-2 border-black p-2 text-center">9</div>
          <div className="border-r-2 border-black p-2 flex items-center">
            <FaMotorcycle className="text-red-700 mr-2 w-4 h-4" />
            <span>GLORY TRANSPORT TO TEMEKE (MEETING WITH MR. ISRAEL)</span>
          </div>
          <div className="border-r-2 border-black p-2 text-right font-medium text-red-700">10,000.00</div>
          <div className="p-2 text-right font-medium">125,406.00</div>
        </div>
        
        {/* Expense Items - Electricity */}
        <div className="grid grid-cols-4 border-x-2 border-b-2 border-black">
          <div className="border-r-2 border-black p-2 text-center">10</div>
          <div className="border-r-2 border-black p-2 flex items-center">
            <FaBolt className="text-red-700 mr-2" />
            <span>ELECTRICITY PURCHASE AT THE OFFICE</span>
          </div>
          <div className="border-r-2 border-black p-2 text-right font-medium text-red-700">50,000.00</div>
          <div className="p-2 text-right font-medium">75,406.00</div>
        </div>
        
        {/* Expense Items - Tire Puncture */}
        <div className="grid grid-cols-4 border-x-2 border-b-2 border-black">
          <div className="border-r-2 border-black p-2 text-center">11</div>
          <div className="border-r-2 border-black p-2 flex items-center">
            <FaWrench className="text-red-700 mr-2" />
            <span>TIRE PUNCHER</span>
          </div>
          <div className="border-r-2 border-black p-2 text-right font-medium text-red-700">5,000.00</div>
          <div className="p-2 text-right font-medium">70,406.00</div>
        </div>
        
        {/* Expense Items - Airtime OPM Phone */}
        <div className="grid grid-cols-4 border-x-2 border-b-2 border-black">
          <div className="border-r-2 border-black p-2 text-center">12</div>
          <div className="border-r-2 border-black p-2 flex items-center">
            <FaPhoneAlt className="text-red-700 mr-2" />
            <span>AIRTIME OPM PHONE (AS EMERGENCY)</span>
          </div>
          <div className="border-r-2 border-black p-2 text-right font-medium text-red-700">5,000.00</div>
          <div className="p-2 text-right font-medium">65,406.00</div>
        </div>
        
        {/* Expense Items - Warid */}
        <div className="grid grid-cols-4 border-x-2 border-b-2 border-black">
          <div className="border-r-2 border-black p-2 text-center">13</div>
          <div className="border-r-2 border-black p-2 flex items-center">
            <FaMotorcycle className="text-red-700 mr-2" />
            <span>Baggage Carries k/koo</span>
          </div>
          <div className="border-r-2 border-black p-2 text-right font-medium text-red-700">2,000.00</div>
          <div className="p-2 text-right font-medium">63,406.00</div>
        </div>
        
        {/* Totals Row */}
        <div className="grid grid-cols-4 border-x-2 border-b-2 border-black bg-gray-100">
          <div className="border-r-2 border-black p-2 text-center"></div>
          <div className="border-r-2 border-black p-2 font-bold">TOTAL AMOUNT</div>
          <div className="border-r-2 border-black p-2 text-right font-bold">336,594.00</div>
          <div className="p-2 text-right font-bold">63,406.00</div>
        </div>
        
        {/* Summary Box */}
        <div className="mt-6 border-2 border-black mb-8">
          <div className="grid grid-cols-2 border-b-2 border-black">
            <div className="border-r-2 border-black p-2 font-bold bg-gray-100">TOTAL EXPENSES</div>
            <div className="p-2 text-right font-bold">336,594.00 TSH</div>
          </div>
          <div className="grid grid-cols-2 border-b-2 border-black">
            <div className="border-r-2 border-black p-2 font-bold bg-gray-100">CASH ON HAND</div>
            <div className="p-2 text-right font-bold">400,000.00 TSH</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="border-r-2 border-black p-2 font-bold bg-gray-100">CASH BALANCE</div>
            <div className="p-2 text-right font-bold">63,406.00 TSH</div>
          </div>
        </div>
        
        {/* Signature Area */}
        <div className="grid grid-cols-3 gap-8 mt-16">
          <div className="text-center">
          <p className="text-sm font-semibold">Glory Anthony</p>
          <p className="text-sm text-gray-600">Operation Manager</p>
            <div className="border-b-2 border-black  h-1"></div>
            <p className="font-bold">PREPARED BY</p>
           
          </div>
          <div className="text-center">
            <div className="border-b-2 border-black mb-2 h-10"></div>
            <p className="font-bold">CHECKED BY</p>
          </div>
          <div className="text-center">
            <div className="border-b-2 border-black mb-2 h-10"></div>
            <p className="font-bold">APPROVED BY</p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-12 text-center text-sm">
          <p>© 2025 Ona Africa Investment. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}