import { PageNavigation } from "@/components/PageNavigation";
import { Container, History, Lightbulb, Shield, Target } from "lucide-react";
import React from "react";

function CompanyOverview() {
  return (
    <>
      <PageNavigation currentPath="/company-overview" />
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
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Executive Summary
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          {/* Company Overview */}
          <div className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 shadow-xl">
  
              <div className="flex items-center gap-3 mb-6">
                <Container className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-primary">
                About Us
                </h2>
              </div>
              <div className="space-y-4 text-white/90">
                <p className="leading-relaxed">
                  {
                    "Conveyance was founded with the vision to revolutionize the logistics and container industry. We have seamlessly integrated logistics and container solutions by combining cutting-edge technology with extensive industry expertise."
                  }
                </p>
                <p className="leading-relaxed">
                  {
                    "Our commitment to innovation, sustainability, and customer satisfaction has positioned us as a leader in the field. borderless trusts us for their transportation and storage needs, relying on our reliable and efficient solutions."
                  }
                </p>
              </div>
            </div>
          </div>

           {/* Company History */}
           <div className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 shadow-xl">
  
              <div className="flex items-center gap-3 mb-6">
                <History className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-primary">
                Our History
                </h2>
              </div>
              <div className="space-y-4 text-white/90">
                <p className="leading-relaxed">
                  {
                    "Founded in 2018, Conveyance has evolved from a small local logistics company into a leading provider of container and logistics solutions across Tanzania. Our journey began with a clear mission: to connect businesses and facilitate trade through efficient and reliable logistics services."
                  }
                </p>
                <p className="leading-relaxed">
                  {
                    "Today, with our main operations based in Dar es Salaam and a thriving branch in Dodoma, we continue to innovate and expand. Our commitment remains unwavering, putting our clients' needs at the forefront of everything we do. By continuously improving our services and embracing the latest technologies, we aim to contribute to the growth and prosperity of the communities we serve."
                  }
                </p>
              </div>
            </div>
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

export default CompanyOverview;
