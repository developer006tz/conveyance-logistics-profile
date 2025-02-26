import { PageNavigation } from "@/components/PageNavigation";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import React from 'react';

function ContactInformation() {
  const branches = [
    {
      title: "Dar-es-salaam Branch",
      address: "Tanzania Library Services Building, 3rd Floor. Bibi Titi Mohamed/Ali Hassan Mwinyi Road.",
      poBox: "8537 Dar es Salaam, Tanzania.",
      adminPhone: "+255 673 693 881",
      enquiryPhones: ["+255 787 693 880", "+255 769 589 594"],
      adminEmail: "info@conveyance.co.tz",
      enquiryEmail: "sales@conveyance.co.tz",
      hours: [
        "Monday-Friday: 08:00 - 17:00 Hrs",
        "Saturday: 09:00 - 13:00 Hrs",
        "Sunday: Closed",
        "Public Holidays: Closed"
      ]
    },
    {
      title: "Dodoma Branch",
      address: "Ihumwa, Flamingo, Dodoma.",
      poBox: "",
      adminPhone: "+255 673 693 881",
      enquiryPhones: ["+255 785 926 100", "+255 718 712 701"],
      adminEmail: "info@conveyance.co.tz",
      enquiryEmail: "sales@conveyance.co.tz",
      hours: [
        "Monday-Friday: 08:00 - 17:00 Hrs",
        "Saturday: 09:00 - 13:00 Hrs",
        "Sunday: Closed",
        "Public Holidays: Closed"
      ]
    }
  ];

  return (
    <>
      <PageNavigation currentPath="/contact-information" />
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
              Our Contact Information
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          {/* Branches */}
          <div className="grid grid-cols- gap-8 mb-4">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 shadow-xl"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <MapPin className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                  <h2 className="text-primary text-xl font-semibold">
                    {branch.title}
                  </h2>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {/* Address Card */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 shadow-md">
                    <div className="flex items-start text-white">
                      <MapPin className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-primary">Address:</p>
                        <p className="text-sm">{branch.address}</p>
                        {branch.poBox && <p className="text-sm">P.O. Box: {branch.poBox}</p>}
                      </div>
                    </div>
                  </div>
                  
                  {/* Administrative Phone Card */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-white shadow-md">
                    <div className="flex items-start">
                      <Phone className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-primary">Administrative Phone:</p>
                        <p className="text-sm">{branch.adminPhone}</p>
                        <p className="font-medium mt-1">Enquiry Phones:</p>
                        {branch.enquiryPhones.map((phone, i) => (
                          <p key={i} className="text-sm">{phone}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Administrative Email Card */}
                  <div className="bg-white/5 backdrop-blur-sm text-white rounded-lg p-4 shadow-md">
                    <div className="flex items-start">
                      <Mail className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-primary">Administrative Email:</p>
                        <p className="text-sm">{branch.adminEmail}</p>
                        <p className="font-medium mt-1">Enquiry Email:</p>
                        <p className="text-sm">{branch.enquiryEmail}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Working Hours Card */}
                  <div className="bg-white/5 backdrop-blur-sm text-white rounded-lg p-4 shadow-md">
                    <div className="flex items-start">
                      <Clock className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-primary">Hours of Operation:</p>
                        {branch.hours.map((hour, i) => (
                          <p key={i} className="text-sm">{hour}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder - consider replacing with an image of actual map for PDF */}

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

export default ContactInformation;