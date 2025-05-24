import {
  Globe,
  Mail,
  MapPin,
  Phone,
  ShoppingCart,
  Truck,
  Snowflake,
  Settings,
} from "lucide-react";
import React from "react";

export default function FlierFront() {
  const coreValues = [
    {
      title: "Integrity",
      description:
        "We conduct our business with the highest honesty and ethical standards.",
    },
    {
      title: "Reliability",
      description:
        "We are committed to providing consistent and dependable logistics and container solutions.",
    },
    {
      title: "Customer-Centricity",
      description:
        "We place our client's needs at the heart of everything we do, aiming for exceptional service.",
    },
  ];

  return (
    <div className="w-[148mm] min-h-[210mm] mx-auto bg-secondary relative overflow-hidden print:w-[148mm] print:h-[210mm] print:overflow-hidden print:break-after-page">
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
      <div className="relative z-10 flex flex-col h-full p-8 print:p-8">
        {/* Logo Section */}
        <div className="pt-4 pb-2">
          <img
            src="/images/conveyance-horizontal-white.png"
            alt="Conveyance Logo"
            className="w-[150px] mx-auto"
          />
        </div>

        {/* Introduction */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 shadow-xl mb-4">
          <h2 className="text-xl font-bold text-primary mb-2 text-center">
            About Us
          </h2>
          <p className="text-white/90 text-sm leading-relaxed">
            Established in 2018, Conveyance has grown from a local container
            provider into a trusted leader in Tanzania's logistics and container
            industry. With operations in Dar es Salaam and Dodoma, we deliver
            innovative, sustainable, and customer-focused solutions. Trusted by
            clients like Borderless, we are committed to supporting trade and
            driving growth through technology and continuous improvement.
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white mb-2 text-center">
            Our Core Values
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4" />

          <div className="grid grid-cols-3 gap-3">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-3 shadow-xl text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-primary font-semibold text-sm mb-1">
                  {value.title}
                </h3>
                {/* <p className="text-white/80 text-xs">
                  {value.description}
                </p> */}
              </div>
            ))}
          </div>
        </div>

        {/* Services and Solutions */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white mb-2 text-center">
            Our Services & Solutions
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4" />

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 shadow-xl">
              <div className="flex flex-row justify-start gap-2 items-center">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20"></div>
                  <ShoppingCart className="w-3 h-3 text-primary relative z-10" />
                </div>
                <h3 className="text-primary font-semibold text-sm">
                  Container Sales
                </h3>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 shadow-xl">
              <div className="flex flex-row justify-start gap-2 items-center">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20"></div>
                  <Truck className="w-3 h-3 text-primary relative z-10" />
                </div>
                <h3 className="text-primary font-semibold text-sm">
                  Container Rental
                </h3>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 shadow-xl">
              <div className="flex flex-row justify-start gap-2 items-center">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20"></div>
                  <Snowflake className="w-3 h-3 text-primary relative z-10" />
                </div>
                <h3 className="text-primary font-semibold text-sm">
                  Reefer Containers
                </h3>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 shadow-xl">
              <div className="flex flex-row justify-start gap-2 items-center">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20"></div>
                  <Settings className="w-3 h-3 text-primary relative z-10" />
                </div>
                <h3 className="text-primary font-semibold text-sm">
                  Container Customization
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information - Dar es Salaam */}
        <div className="mt-auto">
          <div className="bg-gradient-to-t from-secondary to-secondary/80 backdrop-blur-sm rounded-t-lg p-3">
            <h3 className="text-primary font-semibold text-center mb-2">
              Dar es Salaam Branch
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-white/90 text-xs">
                    Tanzania Library Services Building, 3rd Floor. Bibi Titi
                    Mohamed/Ali Hassan Mwinyi Road.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-white/90 text-xs">
                    0787693880 / 0769589594
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-white/90 text-xs">
                    sales@conveyance.co.tz
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                  <Globe className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-white/90 text-xs">www.conveyance.co.tz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
