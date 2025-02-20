import { PageNavigation } from "@/components/PageNavigation";
import { ChevronRight } from "lucide-react";
import React from "react";

function TableOfContent() {
  return (
    <>
      <PageNavigation currentPath="/table-of-content" />
      <div className="min-h-[297mm] w-[210mm] mx-auto bg-secondary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
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
        <div className="relative z-10 flex flex-col min-h-[297mm] p-16">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Table of Contents
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          {/* Table of Contents */}
          <div className="flex-1">
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Section 1 */}
              <div className="group">
                <div className="flex items-center justify-between text-white hover:text-primary transition-colors cursor-pointer mb-2">
                  <div className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-semibold">
                      Executive Summary
                    </h2>
                  </div>
                  <span className="text-2xl font-light">01</span>
                </div>
                <div className="pl-8 space-y-3">
                  <div className="flex items-center justify-between text-white/80 hover:text-primary transition-colors cursor-pointer group">
                    <p className="text-lg">Company Overview</p>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-[1px] bg-primary/30 group-hover:bg-primary" />
                      <span>02</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-white/80 hover:text-primary transition-colors cursor-pointer group">
                    <p className="text-lg">Mission & Vision</p>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-[1px] bg-primary/30 group-hover:bg-primary" />
                      <span>03</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="group">
                <div className="flex items-center justify-between text-white hover:text-primary transition-colors cursor-pointer mb-2">
                  <div className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-semibold">
                      Services & Solutions
                    </h2>
                  </div>
                  <span className="text-2xl font-light">04</span>
                </div>
                <div className="pl-8 space-y-3">
                  <div className="flex items-center justify-between text-white/80 hover:text-primary transition-colors cursor-pointer group">
                    <p className="text-lg">Container Solutions</p>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-[1px] bg-primary/30 group-hover:bg-primary" />
                      <span>05</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-white/80 hover:text-primary transition-colors cursor-pointer group">
                    <p className="text-lg">Logistics Management</p>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-[1px] bg-primary/30 group-hover:bg-primary" />
                      <span>06</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="group">
                <div className="flex items-center justify-between text-white hover:text-primary transition-colors cursor-pointer mb-2">
                  <div className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-semibold">Our Products</h2>
                  </div>
                  <span className="text-2xl font-light">08</span>
                </div>
                <div className="pl-8 space-y-3">
                  <div className="flex items-center justify-between text-white/80 hover:text-primary transition-colors cursor-pointer group">
                    <p className="text-lg">Dry Containers & Refer Containers</p>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-[1px] bg-primary/30 group-hover:bg-primary" />
                      <span>08</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-white/80 hover:text-primary transition-colors cursor-pointer group">
                    <p className="text-lg">Flat-rack Containers & Open-Top Containers</p>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-[1px] bg-primary/30 group-hover:bg-primary" />
                      <span>9</span>
                    </div>
                  </div>
                
                </div>
              </div>

              {/* Section 4 */}
              <div className="group">
                <div className="flex items-center justify-between text-white hover:text-primary transition-colors cursor-pointer mb-2">
                  <div className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-semibold">
                     {
                      " Legal Information"
                     }
                    </h2>
                  </div>
                  <span className="text-2xl font-light">10</span>
                </div>
                <div className="pl-8 space-y-3">
                  <div className="flex items-center justify-between text-white/80 hover:text-primary transition-colors cursor-pointer group">
                    <p className="text-lg">
                      {"Business Licence & Certificate of incorporations"}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-[1px] bg-primary/30 group-hover:bg-primary" />
                      <span>10</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-white/80 hover:text-primary transition-colors cursor-pointer group">
                    <p className="text-lg">
                      {"Tax clearance ,TIN Certificate & VRN Certificate"}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-[1px] bg-primary/30 group-hover:bg-primary" />
                      <span>11</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="group">
                <div className="flex items-center justify-between text-white hover:text-primary transition-colors cursor-pointer mb-2">
                  <div className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-semibold">
                      Contact Information
                    </h2>
                  </div>
                  <span className="text-2xl font-light">12</span>
                </div>
                <div className="pl-8 space-y-3">
                  <div className="flex items-center justify-between text-white/80 hover:text-primary transition-colors cursor-pointer group">
                    <p className="text-lg">Office Locations</p>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-[1px] bg-primary/30 group-hover:bg-primary" />
                      <span>12</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-white/80 hover:text-primary transition-colors cursor-pointer group">
                    <p className="text-lg">Get in Touch</p>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-[1px] bg-primary/30 group-hover:bg-primary" />
                      <span>13</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
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

export default TableOfContent;
