import { Globe, Mail, MapPin, Package, Phone, Quote } from "lucide-react";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function FlierBack() {
  const products = [
    {
      title: "Dry Container",
      image: "/images/dry-container.jpg",
      description:
        "The most common type of containers used for a large range of cargoes.",
    },
    {
      title: "Reefer Container",
      image: "/images/refeer-container.jpg",
      description: "Temperature-controlled containers for perishable goods.",
    },
    {
      title: "Flat Rack Container",
      image: "/images/flatrack-container.jpg",
      description:
        "Specialized containers with collapsible sides for oversized cargo.",
    },
    {
      title: "Open Top Container",
      image: "/images/open-top-container.jpg",
      description: "Containers with removable roof for tall cargo.",
    },
  ];

  return (
    <div className="w-[148mm] min-h-[210mm] mx-auto bg-secondary relative overflow-hidden print:w-[148mm] print:h-[210mm] print:overflow-hidden print:break-after-page">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 print:block">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.344 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413L30 11.97l7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM30 28.284l-1.414 1.414L30 31.113l1.414-1.414L30 28.284z' fill='%23ffffff' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full p-8 print:p-8">
        {/* Logo Section not needed in flier-back */}

        {/* Products Section */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white mb-2 text-center">
            Our Products
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4" />

          <p className="text-white/90 text-xs text-center mb-4">
            Conveyance supplies new and second-hand shipping containers in a
            range of sizes and designs for either hire or sale.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-2 shadow-xl"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Package className="w-4 h-4 text-primary" />
                  <h3 className="text-primary font-semibold text-sm">
                    {product.title}
                  </h3>
                </div>
                <div className="w-full h-[70px] mb-1">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <p className="text-white/80 text-xs text-center">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Container Solutions Highlight */}
        <div className=" rounded-lg p-4  mb-4">
          <h2 className="text-lg font-bold text-primary mb-2 text-center">
            Container Solutions
          </h2>
          <p className="text-white/90 text-xs text-center">
            At Conveyance, we deliver comprehensive container and logistics
            solutions tailored to your business needs. Our integrated approach
            combines industry expertise with cutting-edge technology to optimize
            your supply chain operations.
          </p>
          
        </div>

        {/* Contact Information - Dodoma */}
        <div className="mt-auto">
          <div className="bg-gradient-to-t from-secondary to-secondary/80 backdrop-blur-sm rounded-t-lg p-3">
            <h3 className="text-primary font-semibold text-center mb-2">
              Dodoma Branch
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-white/90 text-xs">
                    Ihumwa, Flamingo, Dodoma.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-white/90 text-xs">
                    0753693890 / 0792693890
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

        <p className="text-primary font-semibold text-sm text-center mt-2">
            <FaQuoteLeft className="w-4 h-4 text-primary inline" />
            {"  Conveyance Container, Your Future in container solution  "}
            <FaQuoteRight className="w-4 h-4 text-primary inline" />
          </p>
      </div>
    </div>
  );
}
