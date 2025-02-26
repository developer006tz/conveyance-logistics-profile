import { PageNavigation } from "@/components/PageNavigation";
import { Container, History, Lightbulb, Shield, Target } from "lucide-react";
import React from "react";

function ServicesAndSolutions2() {
  const services = [
    {
      title: "Customs Clearance",
      description:
        "Expert assistance in navigating the complexities of customs procedures.",
    },
    {
      title: "Cargo Transport",
      description:
        "Reliable and efficient transportation of goods, ensuring timely delivery.",
    },
    {
      title: "Empty Container Transport",
      description:
        "Specialized transport services for empty containers across regions.",
    },
    {
      title: "Container Handling",
      description:
        "Professional handling services to ensure the safety and security of your containers.",
    },
  ];

  return (
    <>
      <PageNavigation currentPath="/services-and-solutions-2" />
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
              {"Our Services and Solutions"}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          <div className=" mb-4">
            <p className="text-white/90 text-md text-center leading-relaxed mb-6">
              {
               "Our logistics management offer services including Customs Clearance, Container Sales, Container Handling, and Empty and Full Container Transport within Tanzania and across its borders."
              }
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-2xl font-bold text-primary mb-4">
              {"Logistics Management"}
            </h4>
          </div>

          {/* Services */}
          <div className="grid grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 shadow-xl"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-white font-bold">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-primary text-[20px] font-semibold mb-2">
                    {service.title}
                  </h2>
                </div>
                <p className="text-white/90 text-sm text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
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

export default ServicesAndSolutions2;
