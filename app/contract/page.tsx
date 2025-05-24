'use client'
import React from 'react';

const DriverContract = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-black">
      {/* Print-specific styling */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 15mm;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
      
      {/* A4 page container with print styling */}
      <div className="w-full p-8 font-serif text-sm leading-tight" style={{ minHeight: '297mm', width: '210mm' }}>
        {/* Company Header with Logo */}
        <div className="text-center mb-8 border-b-2 border-gray-200 pb-4">
          <div className="flex justify-center mb-4">
            <img 
              src="https://res.cloudinary.com/dcmwnrvzk/image/upload/v1741873844/onaafrica-logo_4x_gk4j49.png" 
              alt="ONA Africa Investment Logo" 
              className="h-20"
            />
          </div>
          <h1 className="text-2xl font-bold uppercase mb-2 tracking-wider">DRIVER EMPLOYMENT CONTRACT</h1>
          <div className="text-xs mb-2 text-gray-700">
            <p>ONA AFRICA INVESTMENT LIMITED</p>
            <p>Office: Nane nane, Njiro, Arusha | Phone: +255 711 400 200</p>
            <p>Email: packaging@onaafricainvestment.com</p>
            <p>Head Office: P. O. Box 55063 Ubungo Dar es salaam, Tanzania</p>
          </div>
        </div>

        {/* Parties Section */}
        <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="font-bold text-lg mb-2">BETWEEN:</p>
          <p className="ml-4 mb-3"><span className="font-bold">ONA AFRICA INVESTMENT LIMITED</span>, a company registered under the laws of Tanzania with its registered office at Nane nane, Njiro, Arusha, Tanzania (hereinafter referred to as the &ldquo;EMPLOYER&rdquo;)</p>
          
          <p className="font-bold text-lg mt-4 mb-2">AND:</p>
          <p className="ml-4">_______________________________________ (hereinafter referred to as the &ldquo;EMPLOYEE&rdquo;)</p>
          <p className="ml-4 mt-2">ID/Passport No.: _______________________</p>
          <p className="ml-4 mt-2">Address: _____________________________</p>
          <p className="ml-4 mt-2">Phone: _______________________________</p>
        </div>

        {/* Contract Sections */}
        <div>
          {/* 1. Engagement */}
          <div className="mb-5">
            <h2 className="font-bold text-lg border-b border-gray-300 pb-1 mb-2">1. ENGAGEMENT</h2>
            <p className="ml-4 mb-1">1.1 The Employer hereby employs the Employee as a Driver and the Employee accepts such employment subject to the terms and conditions of this Contract.</p>
            <p className="ml-4">1.2 The Employee&apos;s employment shall commence on ________________ and shall continue for a period of one (1) year, terminating on ________________ unless otherwise terminated in accordance with this Contract.</p>
          </div>

          {/* 2. Probation */}
          <div className="mb-5">
            <h2 className="font-bold text-lg border-b border-gray-300 pb-1 mb-2">2. PROBATION PERIOD</h2>
            <p className="ml-4 mb-1">2.1 The Employee shall be subject to a probation period of six (6) months commencing from the start date of employment.</p>
            <p className="ml-4 mb-1">2.2 During the probation period, the Employer shall evaluate the Employee&apos;s performance, conduct, and suitability for continued employment.</p>
            <p className="ml-4 mb-1">2.3 During the probation period, either party may terminate this Contract by providing seven (7) days&apos; written notice or payment in lieu of notice.</p>
            <p className="ml-4">2.4 Upon successful completion of the probation period, the Employee shall be confirmed in their position for the remainder of the Contract term.</p>
          </div>

          {/* 3. Duties */}
          <div className="mb-5">
            <h2 className="font-bold text-lg border-b border-gray-300 pb-1 mb-2">3. DUTIES AND RESPONSIBILITIES</h2>
            <p className="ml-4 mb-1">3.1 The Employee shall:</p>
            <p className="ml-8 mb-1">a) Drive company vehicles as directed by the Employer;</p>
            <p className="ml-8 mb-1">b) Ensure the safe transportation of personnel, goods, and materials;</p>
            <p className="ml-8 mb-1">c) Maintain the assigned vehicle(s) in good condition and report any issues or maintenance requirements promptly;</p>
            <p className="ml-8 mb-1">d) Complete daily vehicle inspection checks;</p>
            <p className="ml-8 mb-1">e) Maintain accurate logs of trips, mileage, fuel consumption, and other relevant records;</p>
            <p className="ml-8 mb-1">f) Ensure compliance with all traffic rules and regulations;</p>
            <p className="ml-8 mb-1">g) Maintain a valid driving license at all times;</p>
            <p className="ml-8 mb-1">h) Report any accidents or incidents immediately;</p>
            <p className="ml-8 mb-1">i) Perform delivery and collection duties as required;</p>
            <p className="ml-8 mb-1">j) Present a professional appearance and behavior at all times while representing the company;</p>
            <p className="ml-8">k) Perform any other reasonable duties as assigned by the Employer.</p>
          </div>

          {/* 4. Working Hours */}
          <div className="mb-5">
            <h2 className="font-bold text-lg border-b border-gray-300 pb-1 mb-2">4. WORKING HOURS</h2>
            <p className="ml-4 mb-1">4.1 The Employee shall work 45 hours per week, from Monday to Saturday, 8:00 AM to 5:00 PM, with a one-hour lunch break.</p>
            <p className="ml-4 mb-1">4.2 The Employee acknowledges that the nature of the position may require flexibility in working hours, and occasional work during weekends and public holidays may be necessary.</p>
            <p className="ml-4">4.3 Overtime shall be compensated in accordance with the Employment and Labour Relations Act of Tanzania.</p>
          </div>

          {/* 5. Remuneration */}
          <div className="mb-5">
            <h2 className="font-bold text-lg border-b border-gray-300 pb-1 mb-2">5. REMUNERATION</h2>
            <p className="ml-4 mb-1">5.1 The Employer shall pay the Employee a basic monthly salary of Tanzania Shillings Two Hundred and Twenty Thousand (TZS 220,000/=) per month.</p>
            <p className="ml-4 mb-1">5.2 The salary shall be paid on or before the 5th day of each month by direct bank transfer to the bank account specified by the Employee.</p>
            <p className="ml-4">5.3 Statutory deductions including PAYE, SDL, and social security contributions shall be made from the Employee&apos;s salary in accordance with Tanzanian law.</p>
          </div>

          {/* 6. Benefits */}
          <div className="mb-5">
            <h2 className="font-bold text-lg border-b border-gray-300 pb-1 mb-2">6. BENEFITS</h2>
            <p className="ml-4 mb-1">6.1 The Employee shall be entitled to the following benefits:</p>
            <p className="ml-8 mb-1">a) Annual leave of 28 working days per year, to be taken at times agreed with the Employer;</p>
            <p className="ml-8 mb-1">b) Sick leave in accordance with the Employment and Labour Relations Act;</p>
            <p className="ml-8">c) Public holidays as gazetted by the Government of Tanzania.</p>
          </div>

          {/* 7. Confidentiality */}
          <div className="mb-5">
            <h2 className="font-bold text-lg border-b border-gray-300 pb-1 mb-2">7. CONFIDENTIALITY</h2>
            <p className="ml-4 mb-1">7.1 The Employee shall not, during employment or after termination, disclose any confidential information acquired during the course of employment to any unauthorized person.</p>
            <p className="ml-4">7.2 Confidential information includes but is not limited to: client information, business operations, financial information, marketing strategies, and any other proprietary information.</p>
          </div>

          {/* 8. Company Property */}
          <div className="mb-5">
            <h2 className="font-bold text-lg border-b border-gray-300 pb-1 mb-2">8. COMPANY PROPERTY</h2>
            <p className="ml-4 mb-1">8.1 The Employee shall take all reasonable care of any company property, including vehicles, entrusted to them during the course of employment.</p>
            <p className="ml-4">8.2 Upon termination of employment, the Employee shall return all company property in their possession.</p>
          </div>

          {/* 9. Termination */}
          <div className="mb-5">
            <h2 className="font-bold text-lg border-b border-gray-300 pb-1 mb-2">9. TERMINATION</h2>
            <p className="ml-4 mb-1">9.1 After completion of the probation period, either party may terminate this Contract by giving one (1) month&apos;s written notice or payment in lieu of notice.</p>
            <p className="ml-4 mb-1">9.2 The Employer may terminate this Contract without notice in cases of gross misconduct, including but not limited to:</p>
            <p className="ml-8 mb-1">a) Unauthorized use of company vehicles;</p>
            <p className="ml-8 mb-1">b) Driving under the influence of alcohol or drugs;</p>
            <p className="ml-8 mb-1">c) Repeated traffic violations;</p>
            <p className="ml-8 mb-1">d) Negligence resulting in accidents or damage to company property;</p>
            <p className="ml-8 mb-1">e) Theft or fraud;</p>
            <p className="ml-8 mb-1">f) Breach of confidentiality;</p>
            <p className="ml-8 mb-1">g) Unexcused absence from work for more than three consecutive days.</p>
            <p className="ml-4">9.3 Upon completion of the one-year term, this Contract may be renewed by mutual agreement of both parties.</p>
          </div>

          {/* 10. Governing Law */}
          <div className="mb-5">
            <h2 className="font-bold text-lg border-b border-gray-300 pb-1 mb-2">10. GOVERNING LAW</h2>
            <p className="ml-4 mb-1">10.1 This Contract shall be governed by and construed in accordance with the laws of the United Republic of Tanzania, including the Employment and Labour Relations Act.</p>
            <p className="ml-4">10.2 Any disputes arising from this Contract shall be resolved through mutual consultation and, failing that, through the mediation mechanisms provided by Tanzanian labor laws.</p>
          </div>

          {/* 11. Entire Agreement */}
          <div className="mb-6">
            <h2 className="font-bold text-lg border-b border-gray-300 pb-1 mb-2">11. ENTIRE AGREEMENT</h2>
            <p className="ml-4 mb-1">11.1 This Contract constitutes the entire agreement between the parties and supersedes all prior agreements, understandings, and arrangements, whether oral or written.</p>
            <p className="ml-4">11.2 Any modifications to this Contract must be made in writing and signed by both parties.</p>
          </div>

          {/* Signatures */}
          <div className="mt-10 border-t-2 border-gray-200 pt-6">
            <p className="mb-4 font-semibold">IN WITNESS WHEREOF, the parties hereto have executed this Contract on this ______ day of ____________, 20___</p>
            
            <div className="flex justify-between mt-8">
              <div className="w-5/12">
                <p className="font-bold text-lg mb-2">EMPLOYER:</p>
                <div className="mt-8 mb-1 border-b border-black"></div>
                <p>For and on behalf of</p>
                <p className="font-semibold">ONA AFRICA INVESTMENT LIMITED</p>
                <p className="mt-6">Name: _________________________</p>
                <p className="mt-2">Title: _________________________</p>
              </div>
              
              <div className="w-5/12">
                <p className="font-bold text-lg mb-2">EMPLOYEE:</p>
                <div className="mt-8 mb-1 border-b border-black"></div>
                <p className="mt-6">Name: _________________________</p>
                <p className="mt-2">Signature: _____________________</p>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="font-bold text-lg mb-4">WITNESSES:</p>
              
              <div className="flex justify-between mt-4">
                <div className="w-5/12">
                  <p className="mb-4">1. Name: _________________________</p>
                  <p className="mb-4">Signature: _______________________</p>
                  <p>Address: ________________________</p>
                </div>
                
                <div className="w-5/12">
                  <p className="mb-4">2. Name: _________________________</p>
                  <p className="mb-4">Signature: _______________________</p>
                  <p>Address: ________________________</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print button - only visible on screen, not when printing */}
      <div className="print:hidden mb-8 text-center">
        <button 
          onClick={() => window.print()} 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold shadow-md transition duration-300"
        >
          Print Contract
        </button>
      </div>
    </div>
  );
};

export default DriverContract;