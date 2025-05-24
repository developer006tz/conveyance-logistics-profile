'use client'
import React from 'react';

const MeetingMinutes = () => {
  return (
    <div className="w-full p-8 bg-white text-black print:p-0">
      {/* Print-specific styling */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 20mm 15mm;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
      
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold uppercase tracking-wider">Meeting Minutes</h1>
          <p className="text-gray-600 mt-1">Date: March 1, 2025</p>
          <p className="text-gray-600">Subject: Business Operations and Production Targets</p>
        </div>
        
        {/* Section 1 */}
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">1. Human Resources</h2>
          <p className="text-sm leading-relaxed">
            {"The team reviewed the planned workforce reduction initiative. Further details to be provided in the HR department's forthcoming report."}
          </p>
        </div>
        
        {/* Section 2 */}
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">2. CRM System Implementation</h2>
          <p className="text-sm leading-relaxed mb-2">
            Discussion focused on the new packaging system that will integrate customer and product CRM functionalities. Key features include:
          </p>
          <ul className="list-disc pl-6 text-sm leading-relaxed">
            <li className="mb-1">Online proforma invoice generation</li>
            <li className="mb-1">Volume-based discount structure</li>
            <li className="mb-1">Enhanced customer profile management</li>
          </ul>
        </div>
        
        {/* Section 3 */}
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">3. Technology Deployment</h2>
          <p className="text-sm leading-relaxed">
            The Sasa mobile application is scheduled for delivery on March 22, 2025. Implementation timeline and rollout strategy were confirmed.
          </p>
        </div>
        
        {/* Section 4 */}
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">4. Regional Business Development</h2>
          <h3 className="text-lg font-semibold mb-2">Mauzo Division</h3>
          <ul className="list-disc pl-6 text-sm leading-relaxed">
            <li className="mb-1">New operations are being established in Dar-es-Salaam</li>
            <li className="mb-1">Positive growth recorded this month</li>
            <li className="mb-1">Strategy required to strengthen market presence in Dar-es-Salaam and Arusha</li>
          </ul>
        </div>
        
        {/* Section 5 */}
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">5. Production Targets</h2>
          <p className="text-sm leading-relaxed mb-4">
            The following monthly production targets were established:
          </p>
          
          {/* Table */}
          <div className="overflow-hidden border border-gray-200 rounded-lg mb-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product Category
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Production Target
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-xs text-gray-900">Pizza Box (Standard)</td>
                  <td className="px-4 py-2 text-xs text-gray-900">60,000 pieces (600 cartons)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 text-xs text-gray-900">Pizza Box (Custom)</td>
                  <td className="px-4 py-2 text-xs text-gray-900">100 units</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-xs text-gray-900">Launch Box</td>
                  <td className="px-4 py-2 text-xs text-gray-900">350 cartons</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 text-xs text-gray-900">Hand Bags</td>
                  <td className="px-4 py-2 text-xs text-gray-900">20,000 pieces</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-xs text-gray-900">Chicken Boxes</td>
                  <td className="px-4 py-2 text-xs text-gray-900">35,000 packages</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 text-xs text-gray-900">Customized Boxes</td>
                  <td className="px-4 py-2 text-xs text-gray-900">20,000 pieces</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-xs text-gray-900">Office Boxes</td>
                  <td className="px-4 py-2 text-xs text-gray-900">100,000 units</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 text-xs text-gray-900">Burger Boxes</td>
                  <td className="px-4 py-2 text-xs text-gray-900">10,000 pieces</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-xs text-gray-900">Cake Boxes</td>
                  <td className="px-4 py-2 text-xs text-gray-900">10,000 pieces</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 text-xs text-gray-900">Avocado/Fruit Boxes</td>
                  <td className="px-4 py-2 text-xs text-gray-900">20,000 pieces</td>
                </tr>
                <tr className="bg-gray-100 font-medium">
                  <td className="px-4 py-2 text-xs text-gray-900"><strong>Total Production</strong></td>
                  <td className="px-4 py-2 text-xs text-gray-900"><strong>235,000 pieces</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold mb-2">Action Items</h3>
          <ul className="list-disc pl-6 text-sm leading-relaxed mb-4">
            <li className="mb-1">Identify and engage potential clients for hand bag products in Dar-es-Salaam and Arusha regions</li>
            <li className="mb-1">Prepare production schedule to meet established targets</li>
            <li className="mb-1">Develop client acquisition strategy for specialized packaging products</li>
          </ul>
          
          <b className="text-sm leading-relaxed">
            This targets needs to be in action on March 3 2025
          </b>
        </div>
        
        {/* Footer */}
        <div className="text-center text-xs text-gray-500 mt-12 pt-4 border-t border-gray-200">
          <p>Onaafrica Investment Limited| For Internal Use Only</p>
        </div>
      </div>
      
      {/* Print Button - visible only on screen, not when printing */}
      <div className="fixed bottom-8 right-8 print:hidden">
        <button 
          onClick={() => window.print()} 
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 focus:outline-none"
        >
          Print Minutes
        </button>
      </div>
    </div>
  );
};

export default MeetingMinutes;