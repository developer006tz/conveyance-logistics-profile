import { PageNavigation } from "@/components/PageNavigation";
import { Globe, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <PageNavigation currentPath="/" />
      <div className="min-h-[297mm] w-[210mm] mx-auto bg-secondary relative overflow-hidden">
        {/* Hero Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://conveyance.co.tz/images/sliders/tech-globe.webp"
            alt="Technology Globe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/70 to-secondary/95" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col min-h-[297mm]">
          {/* Logo Section */}
          <div className="pt-12 px-8">
            <img
              src="https://api.conveyance.co.tz/images/logo.png"
              alt="Conveyance Logo"
              className="w-[200px] mx-auto"
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            {/* Company Profile Title */}
            <div className="mb-12">
              <h2 className="text-2xl font-medium text-primary tracking-widest uppercase mb-2">
                Company Profile
              </h2>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-[1px] bg-primary/30" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div className="w-12 h-[1px] bg-primary/30" />
              </div>
            </div>

            <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
              Conveyance Logistics
            </h1>
            <div className="w-24 h-1 bg-primary mb-8" />
            <p className="text-2xl text-primary font-light max-w-2xl leading-relaxed">
              Your Future in Container Solutions
            </p>
          </div>

          {/* Enhanced Footer */}
          <div className="relative">
            {/* Decorative Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

            <div className="p-4 bg-gradient-to-t from-secondary to-secondary/80 backdrop-blur-sm">
              <div className="w-full mx-auto">
                <div className="grid grid-cols-2 gap-8 text-white">
                  {/* Website */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm text-primary font-medium">
                    www.conveyance.co.tz
                    </span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm text-primary font-medium">
                    info@conveyance.co.tz
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
