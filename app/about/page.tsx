import { Button } from "@/components/ui/button";
import { Building2, Users, Trophy, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main>
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About TechCorp Solutions</h1>
            <p className="text-xl text-primary/90">
              Leading the way in technological innovation since 2010
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2010, TechCorp Solutions has been at the forefront of
                technological innovation. We've helped hundreds of businesses
                transform their operations through cutting-edge solutions and
                expert consultation.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Clients Served
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white border border-border">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Client Focus</h3>
              <p className="text-muted-foreground">
                We put our clients first, ensuring their success through
                dedicated support and tailored solutions.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white border border-border">
              <Trophy className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, from development
                to customer service.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white border border-border">
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously innovate and adapt to stay ahead of technological
                advancements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}