import { PageNavigation } from "@/components/PageNavigation";
import React from 'react';

function BrandThatTrustUs() {
  const partners = [
    { name: "Nmb Logo", link: "https://www.nmbbank.co.tz", path: "/partners/nmb-logo.png" },
    { name: "Gadaworld", link: "https://www.garda.com/en-zw/locations/tanzania", path: "/partners/gadaworld.svg" },
    { name: "Armada Tech", link: "https://armadatech.co.tz/about-us", path: "/partners/armada-tech-logo.jpg" },
    { name: "Bmg logo", link: "https://bakhresa.com/bakhresa-grain-milling-rwanda-ltd", path: "/partners/bmg-logo.png" },
    { name: "Drafco Group", link: "https://www.drafcogroup.co.tz", path: "/partners/drafco-group-logo.png" },
    { name: "Kamal steel", link: "http://www.kamalsteel.co.tz", path: "/partners/kamal-steel-logo.png" },
    { name: "Lake Group", link: "https://www.lakeoilgroup.com", path: "/partners/lake-group-logo.png" },
    { name: "Lodhia", link: "https://lodhiaindustries.com", path: "/partners/lodhia-logo.png" },
    { name: "Mps Limited", link: "https://mps.co.tz", path: "/partners/mps-limited-logo.png" },
    { name: "thesixriversfoundation", link: "https://thesixriversfoundation.com/africa", path: "/partners/thesixriversfoundation-logo.svg" },
    { name: "World oil", link: "https://worldoil.co.tz", path: "/partners/world-oil-logo.png" },
    { name: "Ea fruit", link: "https://www.eafoods.com", path: "/partners/eafruits-logo.png" },
  ];

  return (
    <>
      <PageNavigation currentPath="/brand-that-trust-us" />
      <div className="w-[210mm] min-h-[297mm] mx-auto bg-secondary relative overflow-hidden print:w-[210mm] print:h-[297mm] print:overflow-hidden print:break-after-page">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 print:block">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90" />
          <div className="absolute inset-0 opacity-5">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full p-16 print:p-16">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Brands that Trust Us
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-xl flex items-center justify-center"
              >
                <a href={partner.link} target="_blank" className="relative w-full h-24">
                  <img
                    src={partner.path}
                    alt={partner.name}
                    className="object-contain w-full h-full"
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-xl mb-8">
            <p className="text-white text-center">
            {"We're honored to serve leading companies across multiple industries who rely on our expertise and solutions that meet their unique needs."}
            </p>
          </div>

          {/* Footer */}
          <div className="mt-auto text-center">
            <img
              src="https://api.conveyance.co.tz/images/logo.png"
              alt="Conveyance Logo"
              className="w-[150px] mx-auto opacity-50"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandThatTrustUs;