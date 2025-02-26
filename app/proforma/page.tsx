import React from "react";
import { PageNavigation } from "@/components/PageNavigation";

const ProformaInvoice = () => {
  const currentDate = new Date().toLocaleDateString("en-GB");
  return (
    <>
      <PageNavigation currentPath="/proforma" />
      {/* First Page */}
      <div className="min-h-[297mm] w-[210mm] mx-auto bg-white relative overflow-hidden print:w-[210mm] print:h-[297mm] print:overflow-hidden print:break-after-page">
        {/* Content Container */}
        <div className="relative z-10 flex flex-col min-h-[297mm] p-16">
          <div className="flex justify-between items-start mb-8">
            <div className="w-1/2">
              <img
                src="https://res.cloudinary.com/dcmwnrvzk/image/upload/v1731661441/logo-social-smarttech_gdjwam.png"
                alt="SocialSmartTech Logo"
                className="h-16 object-contain"
              />
              <div className="mt-4 text-gray-700">
                <p>Tanzania, Library Service Building, 3rd Floor</p>
                <p>Dar es Salaam, Tanzania</p>
                <p>+255 746 828 843</p>
                <p>developer@socialsmarttech.com</p>
              </div>
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                PROFORMA INVOICE
              </h1>
              <p className="text-gray-600">Date: {currentDate}</p>
              <p className="text-gray-600">Invoice #: SST-2025-004</p>
              <p className="text-gray-600">
                Valid until:{" "}
                {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(
                  "en-GB"
                )}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-gray-800 font-semibold mb-2">BILL TO:</h2>
            <div className="border-l-4 border-blue-600 pl-4">
              <p className="text-gray-700">[Client Name]</p>
              <p className="text-gray-700">[Client Address]</p>
              <p className="text-gray-700">[Client Contact Details]</p>
            </div>
          </div>

          {/* Services Table */}
          <table className="w-full mb-8">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left text-gray-700">Description</th>
                <th className="px-4 py-2 text-right text-gray-700">Quantity</th>
                <th className="px-4 py-2 text-right text-gray-700">Rate (TZS)</th>
                <th className="px-4 py-2 text-right text-gray-700">
                  Amount (TZS)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3">
                  <p className="font-medium">
                    Company Profile Website Package #1
                  </p>
                  <p className="text-sm text-gray-600">
                    - Custom Website Development (Up to 4 pages)
                  </p>
                  <p className="text-sm text-gray-600">
                    - Domain Registration (1 year)
                  </p>
                  <p className="text-sm text-gray-600">- Web Hosting (1 year)</p>
                </td>
                <td className="px-4 py-3 text-right">1</td>
                <td className="px-4 py-3 text-right">750,000</td>
                <td className="px-4 py-3 text-right">750,000</td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <p className="font-medium">
                    Company Profile Website Package #2
                  </p>
                  <p className="text-sm text-gray-600">
                    - Custom Website Development (Up to 4 pages)
                  </p>
                  <p className="text-sm text-gray-600">
                    - Domain Registration (1 year)
                  </p>
                  <p className="text-sm text-gray-600">- Web Hosting (1 year)</p>
                </td>
                <td className="px-4 py-3 text-right">1</td>
                <td className="px-4 py-3 text-right">750,000</td>
                <td className="px-4 py-3 text-right">750,000</td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <p className="font-medium">
                    Personal Portfolio Website Package
                  </p>
                  <p className="text-sm text-gray-600">
                    - Custom Website Development (Up to 10 pages)
                  </p>
                  <p className="text-sm text-gray-600">
                    - Domain Registration (1 year)
                  </p>
                  <p className="text-sm text-gray-600">- Web Hosting (1 year)</p>
                </td>
                <td className="px-4 py-3 text-right">1</td>
                <td className="px-4 py-3 text-right">1,000,000</td>
                <td className="px-4 py-3 text-right">1,000,000</td>
              </tr>
            </tbody>
            <tfoot className="border-t-2 border-gray-300">
              <tr>
                <td colSpan={2} className="px-4 py-3"></td>
                <td className="px-4 py-3 text-right font-medium">Subtotal:</td>
                <td className="px-4 py-3 text-right font-medium">2,500,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td colSpan={2} className="px-4 py-3"></td>
                <td className="px-4 py-3 text-right font-bold">Total (TZS):</td>
                <td className="px-4 py-3 text-right font-bold">2,500,000</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Second Page */}
      <div className="min-h-[297mm] w-[210mm] mx-auto bg-white relative overflow-hidden print:w-[210mm] print:h-[297mm] print:overflow-hidden print:break-after-page">
        <div className="relative z-10 flex flex-col min-h-[297mm] p-16">
          {/* Deliverables */}
          <div className="mb-8">
            <h3 className="font-bold text-gray-800 mb-2">Deliverables:</h3>
            <div className="text-gray-700">
              <p className="mb-2">Three (3) fully functional websites including:</p>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>Custom designed and developed websites</li>
                <li>Domain name registration for 1 year</li>
                <li>Web hosting for 1 year</li>
                <li>SSL certificates for secure HTTPS connections</li>
                <li>Mobile responsive design</li>
                <li>Rich SEO optimization</li>
              </ul>
            </div>
          </div>

          {/* Project Timeline & Future Costs */}
          <div className="mb-8">
            <h3 className="font-bold text-gray-800 mb-2">Project Timeline:</h3>
            <p className="text-gray-700 mb-4">Total Development Time: 10 days (3 websites)</p>

            <h3 className="font-bold text-gray-800 mb-2">Future Costs:</h3>
            <div className="text-gray-700">
              <p className="mb-1">
                1. Website Maintenance (After Initial 6 Months):
              </p>
              <p className="ml-4 mb-1">
                - 10% of the initial amount
              </p>
              <p className="mb-1">2. Annual Renewal Fees (After First Year):</p>
              <p className="ml-4">
                - 170,000 TZS per website (Total: 510,000 TZS for all websites)
              </p>
            </div>
          </div>

          {/* Terms and Payment Details */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">
                Terms and Conditions:
              </h3>
              <ul className="text-sm text-gray-700 list-disc list-inside">
                <li>Valid for 30 days from the date of issue</li>
                <li>50% advance payment required to begin development</li>
                <li>Remaining balance due upon project completion</li>
                <li>All prices are in Tanzanian Shillings (TZS)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Payment Details:</h3>
              <div className="text-sm text-gray-700">
                <div className="mb-4">
                  <p className="font-semibold mb-1">Bank Transfer:</p>
                  <p>Bank Name: CRDB</p>
                  <p>Account Name: LUDOVICK FRANCIS KONYO</p>
                  <p>Account Number: 0152893268400</p>
                  <p>Account Currency: TZS</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Mobile Money:</p>
                  <p>M-PESA</p>
                  <p>Name: LUDOVICK FRANCIS KONYO</p>
                  <p>Number: 255746-828843</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Page - Portfolio Samples */}
      <div className="min-h-[297mm] w-[210mm] mx-auto bg-white relative overflow-hidden print:w-[210mm] print:h-[297mm] print:overflow-hidden">
        <div className="relative z-10 flex flex-col min-h-[297mm] p-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Portfolio Samples</h2>
          <div className="space-y-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">SocialSmartTech</h3>
              <a href="https://socialsmarttech.com" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:text-blue-800 hover:underline">
                https://socialsmarttech.com
              </a>
              <p className="mt-2 text-gray-600">Corporate website showcasing our digital solutions and services</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Conveyance</h3>
              <a href="https://conveyance.co.tz" target="_blank" rel="noopener noreferrer"
                 className="text-blue-600 hover:text-blue-800 hover:underline">
                https://conveyance.co.tz
              </a>
              <p className="mt-2 text-gray-600">Professional business website with modern design and Customer Self service</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">CTMCL</h3>
              <a href="https://ctmcl.com" target="_blank" rel="noopener noreferrer"
                 className="text-blue-600 hover:text-blue-800 hover:underline">
                https://ctmcl.com
              </a>
              <p className="mt-2 text-gray-600">Corporate website with comprehensive company information and Appointment booking</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Kapinga Designs</h3>
              <a href="https://kapingadesigns.com" target="_blank" rel="noopener noreferrer"
                 className="text-blue-600 hover:text-blue-800 hover:underline">
                https://kapingadesigns.com
              </a>
              <p className="mt-2 text-gray-600">Creative personal portfolio website showcasing design work</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProformaInvoice;
