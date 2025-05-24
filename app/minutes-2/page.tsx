"use client"
import React from 'react';

const MeetingMinutes = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center">
      <div className="bg-white shadow-lg w-full max-w-4xl mx-auto my-4 print:shadow-none print:my-0">
        {/* A4 Container - 210mm × 297mm */}
        <div className="p-8 print:p-6 mx-auto" style={{ minHeight: '297mm', width: '210mm' }}>
          
          {/* Header with Logo */}
          <div className="flex justify-between items-center mb-6 border-b border-red-800 pb-4">
            <img 
              src="https://res.cloudinary.com/dcmwnrvzk/image/upload/v1741873844/onaafrica-logo_4x_gk4j49.png" 
              alt="Onafrica Investment Logo" 
              className="h-16"
            />
            <div className="text-right">
              <h1 className="text-2xl font-bold text-red-800">Meeting Minutes</h1>
              <p className="text-gray-600">Friday, March 14, 2025</p>
            </div>
          </div>
          
          {/* Meeting Details */}
          <div className="bg-red-50 p-4 rounded-lg mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-red-900">Meeting Type:</p>
                <p className="text-sm text-gray-700">Company Strategy & Operations</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-red-900">Location:</p>
                <p className="text-sm text-gray-700">Online</p>
              </div>
            </div>
          </div>
          
          {/* Section 1: Attendees */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-red-800 border-b border-red-200 pb-1 mb-3">
              1. Attendees
            </h2>
            
            <div className="ml-4">
              <h3 className="font-semibold text-red-700 mb-1">Executive Leadership:</h3>
              <p className="text-sm text-gray-700 mb-2 ml-4">• Carlos (Chief Executive Officer)</p>
              
              <h3 className="font-semibold text-red-700 mb-1">Senior Management:</h3>
              <ul className="text-sm text-gray-700 mb-2 ml-4 space-y-1">
                <li>• Lissa (Senior Sales Officer - Dodoma Branch)</li>
                <li>• Beatrice (Senior Sales Officer - DSM and Arusha)</li>
              </ul>

              <h3 className="font-semibold text-red-700 mb-1">Company Staffs (IT Team):</h3>
              <ul className="text-sm text-gray-700 mb-2 ml-4 space-y-1">
                <li>• Ludovic (Senior IT Officer & Company Developer)</li>
                <li>• Kelvin (Senior IT Officer & Company Developer)</li>
                <li>• Pius (Social Media Manager & Graphics Designer)</li>
              </ul>
              
              <h3 className="font-semibold text-red-700 mb-1">Sales & Marketing Staffs:</h3>
              <ul className="text-sm text-gray-700 mb-2 ml-4 space-y-1">
                <li>• Waridi (Sales Officer - DSM)</li>
                <li>• Dyness (Sales Officer - Arusha)</li>
                <li>• James (International Trade Specialist - South Africa)</li>
              </ul>
              
              <h3 className="font-semibold text-red-700 mb-1">New Members:</h3>
              <p className="text-sm text-gray-700 mb-2 ml-4">• Beatrice (Formally introduced as Senior Sales Officer)</p>
              <p className="text-sm text-gray-700 mb-2 ml-4">• Lucy (Formally introduced as Temporary Senior Sales Support Officer & New Product Leader (Drinks))</p>

            </div>
          </div>
          
          {/* Section 2: Organizational Structure */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-red-800 border-b border-red-200 pb-1 mb-3">
              2. Organizational Structure
            </h2>
            
            <div className="ml-4 mb-3">
              <h3 className="font-semibold text-red-700 mb-1">2.1 Office Network</h3>
              <ul className="text-sm text-gray-700 mb-2 ml-4 space-y-1">
                <li>• <span className="font-medium">Headquarters (HQ):</span> Dar es Salaam</li>
                <li>• <span className="font-medium">Second Major Office:</span> Dodoma * (NEW)</li>
                <li>• <span className="font-medium">Third Office (Smaller):</span> Arusha</li>
              </ul>
            </div>
            
            <div className="ml-4 mb-3">
              <h3 className="font-semibold text-red-700 mb-1">2.2 Branch Operations</h3>
              <ul className="text-sm text-gray-700 mb-2 ml-4 space-y-1">
                <li>• <span className="font-medium">Active Branches:</span> Iringa, Dodoma, Njombe, Singida (UNDER DODOMA)</li>
                <li>--- <span className="font-medium">Director of Operations (All Locations):</span> Madam Lissa</li>
              </ul>
              <ul className="text-sm text-gray-700 mb-2 ml-4 space-y-1">
                <li>• <span className="font-medium">Active Branches:</span> DSM,Arusha (UNDER DSM HQ)</li>
                <li>--- <span className="font-medium">Director of Operations (All Locations):</span> Beatrice</li>
              </ul>
            </div>
            
            <div className="ml-4">
              <h3 className="font-semibold text-red-700 mb-1">2.3 Department Structure</h3>
              <ul className="text-sm text-gray-700 mb-2 ml-4 space-y-1">
                <li className="mb-2">
                  • <span className="font-medium">Sales Department Management:</span>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>- Dodoma: Madam Lissa (Independent operation from DSM/Arusha)</li>
                    <li>- DSM & Arusha: Beatrice (Senior oversight) | Also Waridi and Dyness (Sales oversight)</li>
                    <li>- DSM: Lucy (Temporary Sales Officer)</li>
                  </ul>
                </li>
                <li>• <span className="font-medium">IT & Development:</span> Ludovic and Kelvin</li>
                <li>• <span className="font-medium">International Trade:</span> James (South Africa exports/imports)</li>
                <li>• <span className="font-medium">Marketing & Design:</span> Pius (Social Media Management & Graphics Design)</li>
              </ul>
            </div>
          </div>
          
          {/* Section 3: Strategic Initiatives */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-red-800 border-b border-red-200 pb-1 mb-3">
              3. Strategic Initiatives
            </h2>
            
            <div className="ml-4 mb-3">
              <h3 className="font-semibold text-red-700 mb-1">3.1 Digital Factory Project</h3>
              <ul className="text-sm text-gray-700 mb-2 ml-4 space-y-1">
                <li>• Beatrice to be included in initiative</li>
                <li>• Lissa to be included in initiative</li>
                <li>•Goal: (<b>To find new -External projects</b>): for Digital factory to produce</li>
              </ul>
            </div>
            
            <div className="ml-4">
              <h3 className="font-semibold text-red-700 mb-1">3.2 DSM Operations</h3>
              <p className="text-sm text-gray-700 mb-2 ml-4">• Beatrice scheduled to visit tomorrow (March 15, 2025)</p>
            </div>
          </div>
          
          {/* Section 4: International Expansion */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-red-800 border-b border-red-200 pb-1 mb-3">
              4. International Expansion
            </h2>
            
            <div className="ml-4 mb-3">
              <h3 className="font-semibold text-red-700 mb-1">4.1 South Africa Office Development</h3>
              <ul className="text-sm text-gray-700 mb-2 ml-4 space-y-1">
                <li>• Location confirmed(James should be ready to go)</li>
                <li>• Vinywaji Project assigned to Lucy (James reporting to Lucy)</li>
                <li>• James to manage product import/export operations</li>
              </ul>
            </div>
            
            <div className="ml-4">
              <h3 className="font-semibold text-red-700 mb-1">4.2 Financial Targets & Adjustments</h3>
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-red-700">
                <p className="text-sm text-gray-700 italic mb-3">• Adjustment necessary due to Company shifting which might lead to performance downfall</p>
                
                {/* Dodoma Branch Targets */}
                <div className="mb-4">
                  <h4 className="font-medium text-red-800 mb-2">Dodoma Branch Targets (Madam Lissa):</h4>
                  <div className="grid grid-cols-3 gap-2 print:grid-cols-3">
                    <div className="bg-white p-2 rounded shadow-sm print:shadow-none print:border print:border-gray-200">
                      <p className="text-xs text-gray-500">March 2025</p>
                      <p className="font-bold text-red-900">0-5M TZS</p>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm print:shadow-none print:border print:border-gray-200">
                      <p className="text-xs text-gray-500">April 2025</p>
                      <p className="font-bold text-red-900">20-30M TZS</p>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm print:shadow-none print:border print:border-gray-200">
                      <p className="text-xs text-gray-500">May 2025</p>
                      <p className="font-bold text-red-900">40-60M TZS</p>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm print:shadow-none print:border print:border-gray-200">
                      <p className="text-xs text-gray-500">June 2025</p>
                      <p className="font-bold text-red-900">60-80M TZS</p>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm print:shadow-none print:border print:border-gray-200">
                      <p className="text-xs text-gray-500">July 2025</p>
                      <p className="font-bold text-red-900">80-100M TZS</p>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm print:shadow-none print:border print:border-gray-200">
                      <p className="text-xs text-gray-500">August 2025</p>
                      <p className="font-bold text-red-900">100-120M TZS</p>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm print:shadow-none print:border print:border-gray-200">
                      <p className="text-xs text-gray-500">September 2025</p>
                      <p className="font-bold text-red-900">120-140M TZS</p>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm print:shadow-none print:border print:border-gray-200">
                      <p className="text-xs text-gray-500">October 2025</p>
                      <p className="font-bold text-red-900">160-180M TZS</p>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm print:shadow-none print:border print:border-gray-200">
                      <p className="text-xs text-gray-500">Nov-Dec 2025</p>
                      <p className="font-bold text-red-900">180M TZS/month</p>
                    </div>
                  </div>
                </div>
                
                {/* DSM & Arusha Targets */}
                <div>
                  <h4 className="font-medium text-red-800 mb-2">DSM & Arusha Targets (Beatrice):</h4>
                  <div className="grid grid-cols-3 gap-2 print:grid-cols-3">
                    <div className="bg-white p-2 rounded shadow-sm print:shadow-none print:border print:border-gray-200">
                      <p className="text-xs text-gray-500">April 2025</p>
                      <p className="font-bold text-red-900">70M TZS</p>
                      <p className="text-xs text-gray-500">From existing customers</p>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm print:shadow-none print:border print:border-gray-200">
                      <p className="text-xs text-gray-500">May 2025</p>
                      <p className="font-bold text-red-900">90M TZS</p>
                      <p className="text-xs text-gray-500">(70M + 20M)</p>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm print:shadow-none print:border print:border-gray-200">
                      <p className="text-xs text-gray-500">June 2025</p>
                      <p className="font-bold text-red-900">110M TZS</p>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm print:shadow-none print:border print:border-gray-200">
                      <p className="text-xs text-gray-500">July 2025</p>
                      <p className="font-bold text-red-900">130M TZS</p>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm print:shadow-none print:border print:border-gray-200">
                      <p className="text-xs text-gray-500">August 2025</p>
                      <p className="font-bold text-red-900">150M TZS</p>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm print:shadow-none print:border print:border-gray-200">
                      <p className="text-xs text-gray-500">September 2025</p>
                      <p className="font-bold text-red-900">170M TZS</p>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm print:shadow-none print:border print:border-gray-200">
                      <p className="text-xs text-gray-500">October 2025</p>
                      <p className="font-bold text-red-900">190M TZS</p>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm print:shadow-none print:border print:border-gray-200">
                      <p className="text-xs text-gray-500">November 2025</p>
                      <p className="font-bold text-red-900">210M TZS</p>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm print:shadow-none print:border print:border-gray-200">
                      <p className="text-xs text-gray-500">December 2025</p>
                      <p className="font-bold text-red-900">250M TZS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Section 5: Communication Protocols */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-red-800 border-b border-red-200 pb-1 mb-3">
              5. Communication Protocols
            </h2>
            
            <div className="ml-4 mb-3">
              <h3 className="font-semibold text-red-700 mb-1">5.1 Email Guidelines</h3>
              <ul className="text-sm text-gray-700 mb-2 ml-4 space-y-1">
                <li>• Hierarchical communication structure established</li>
                <li>• Standard procedure:
                  <ol className="list-decimal ml-6 mt-1">
                    <li>Copy senior leader first</li>
                    <li>Then copy the CEO</li>
                  </ol>
                </li>
                <li>• <span className="font-medium">Exception:</span> Senior staff may communicate directly with CEO</li>
              </ul>
            </div>
            
            <div className="ml-4">
              <h3 className="font-semibold text-red-700 mb-1">5.2 Temporary Staff Protocol</h3>
              <p className="text-sm text-gray-700 mb-2 ml-4">• Lucy (Temporary Sales Support) instructed to support company 1 to 2 months until further notice</p>
            </div>
          </div>
          
          {/* Section 6: Action Items */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-red-800 border-b border-red-200 pb-1 mb-3">
              6. Action Items
            </h2>
            
            <ol className="list-decimal text-sm text-gray-700 ml-8 space-y-1">
              <li>Opening of new Branch (Dodoma branch)</li>
              <li>
                {"Digital Factory initiative to commence with Beatrice and Lissa's involvement"}
              </li>
              <li>Maintain established financial targets despite market challenges</li>
              <li>To find External Development projects for IT department</li>
              <li>Implementation of new communication protocols effective immediately</li>
            </ol>
          </div>
          

          
          {/* Footer */}
          <div className="mt-8 pt-4 border-t border-red-200 text-xs text-gray-500 text-center">
            <p className="italic">Minutes prepared by Ludovic, Senior IT officer, Ona-Africa Limited.</p>
          </div>
          
        </div>
      </div>
      
      {/* Print Button - only visible on screen, not when printing */}
      <div className="fixed bottom-4 right-4 print:hidden">
        <button 
          onClick={() => window.print()} 
          className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded shadow"
        >
          Print Minutes
        </button>
      </div>
    </div>
  );
};

export default MeetingMinutes;