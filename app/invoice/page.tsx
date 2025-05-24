"use client";

import { useRef } from "react";
import Image from "next/image";
import { useReactToPrint } from "react-to-print";
import { useState, useEffect } from "react";

const InvoicePage = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePrint = useReactToPrint({
    documentTitle: "SocialSmartTech-Invoice",
    // @ts-ignore -- The 'content' prop is actually supported by the library
    content: () => componentRef.current,
  });

  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const invoiceNumber = `SST-${new Date().getFullYear()}${String(
    new Date().getMonth() + 1
  ).padStart(2, "0")}${String(new Date().getDate()).padStart(
    2,
    "0"
  )}-${Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0")}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div
        className="relative py-3 mx-auto"
        style={{ width: "210mm", maxWidth: "100%" }}
      >
     

        <div
          ref={componentRef}
          className="relative bg-white shadow-2xl print:shadow-none overflow-hidden"
          style={{
            width: "210mm",
            height: "297mm",
            padding: "15mm",
            boxSizing: "border-box",
          }}
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-5 z-0">
            <div
              className="absolute top-0 right-0 w-full h-full bg-repeat"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          {/* Decorative Corner */}
          <div
            className="absolute top-0 right-0 w-40 h-40 bg-blue-500 opacity-10"
            style={{
              clipPath: "polygon(100% 0, 0 0, 100% 100%)",
            }}
          ></div>
          {/* Invoice Header */}
          <div className="flex justify-between items-start mb-10 relative z-10">
            <div className="flex flex-col items-start">
              <div className="relative h-16 w-52 mr-6">
                <Image
                  src="/logo/logo-social-smarttech-horizontal.png"
                  alt="SocialSmartTech Logo"
                  width={200}
                  height={70}
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
              <div>
                <p className="text-gray-600">P.O Box 85678,</p>
                <p className="text-gray-600">Dar es Salaam,Tanzania</p>
                <p className="text-gray-600">developer@socialsmarttech.com</p>
                <p className="text-gray-600">+255 746 828 843</p>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-3xl font-bold text-gray-800 bg-blue-50 px-6 py-2 rounded-lg border-l-4 border-blue-500">
                INVOICE
              </h2>
              <p className="text-gray-600 mt-3">
                <span className="font-semibold">Invoice Number:</span>{" "}
                {invoiceNumber}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Date:</span> {currentDate}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Payment Due:</span>{" "}
                {currentDate}
              </p>
            </div>
          </div>

          {/* Invoice Body */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Billed To:</h3>
            <div className="pl-4 border-l-4 border-blue-600">
              <p className="font-bold">Mwancelele Co.ltd</p>
              <p className="text-gray-600">Vingunguti,Dar es Salaam</p>
              <p className="text-gray-600">+255 716 300 770</p>
              <p className="text-gray-600">info@mwancelele.co.tz</p>
            </div>
          </div>

          {/* Invoice Table */}
          <div className="mb-6 overflow-x-auto">
            <table
              className="w-full bg-white border border-gray-300 text-sm"
              style={{ borderCollapse: "collapse" }}
            >
              <thead>
                <tr className="bg-blue-50">
                  <th className="py-2 px-2 text-left font-bold text-gray-800 border-b-2 border-blue-400">
                    Item
                  </th>
                  <th className="py-2 px-2 text-left font-bold text-gray-800 border-b-2 border-blue-400">
                    Description
                  </th>
                  <th className="py-2 px-2 text-right font-bold text-gray-800 border-b-2 border-blue-400">
                    Rate
                  </th>
                  <th className="py-2 px-2 text-right font-bold text-gray-800 border-b-2 border-blue-400">
                    Qty
                  </th>
                  <th className="py-2 px-2 text-right font-bold text-gray-800 border-b-2 border-blue-400">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-2 border-b border-gray-200 align-top">
                    Web Hosting and <br /> Email Services
                  </td>
                  <td className="py-2 px-2 border-b border-gray-200 align-top">
                    <span>Annual web hosting for:</span>
                    <ul className="list-disc pl-4 text-xs text-gray-600">
                      <li>mwancelele.co.tz</li>
                      <li>wayimplex.co.tz</li>
                      <li>portal.mwancelele.co.tz</li>
                      <li>portal.wayimplex.co.tz</li>
                    </ul>
                  </td>
                  <td className="py-2 px-2 text-right border-b align-top">
                    TZS 475,000
                  </td>
                  <td className="py-2 px-2 text-right border-b align-top">1</td>
                  <td className="py-2 px-2 text-right border-b align-top">
                    TZS 475,000
                  </td>
                </tr>
              </tbody>
            </table>
            {/* Compact summary row */}
            <div className="flex flex-col items-end mt-2 space-y-1 pr-1">
              <div className="flex w-full md:w-1/2 justify-end">
                <span className="w-32 text-right font-semibold">Subtotal:</span>
                <span className="w-32 text-right">TZS 475,000</span>
              </div>
              <div className="flex w-full md:w-1/2 justify-end">
                <span className="w-32 text-right font-semibold">VAT (0%):</span>
                <span className="w-32 text-right">TZS 0</span>
              </div>
              <div className="flex w-full md:w-1/2 justify-end bg-blue-50 rounded font-bold text-base mt-1 py-1">
                <span className="w-32 text-right">Total:</span>
                <span className="w-32 text-right text-blue-900">
                  TZS 475,000
                </span>
              </div>
            </div>
          </div>

          {/* Payment Instructions */}
          <div className="mb-2">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Payment Instructions:
            </h3>
            <div className="bg-blue-50 p-5 rounded-md border border-blue-200">
              <p className="mb-2">
                <span className="font-semibold">Bank Name:</span> CRDB
              </p>
              <p className="mb-2">
                <span className="font-semibold">Account Name:</span> Ludovick
                Francis Konyo
              </p>
              <p className="mb-2">
                <span className="font-semibold">Account Number:</span>
                0152893268400
              </p>
              <p className="mb-2">
                <span className="font-semibold">Mobile Money:</span> 0746-828843
                (M-Pesa)
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Please notify us once you have made the payment.
              </p>
            </div>
          </div>

          {/* Notes & Terms */}


          {/* Footer */}
          <div className="text-center text-gray-600 text-sm absolute bottom-28 left-0 right-0">
            <p className="font-medium">
              SocialSmartTech - Your Trusted Technology Partner
            </p>
            <p className="mt-1">
              © {new Date().getFullYear()} SocialSmartTech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
