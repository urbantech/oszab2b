import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Users, Globe, Mail, ArrowRight, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About | ByOsaz",
};

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white to-osaz-peach/20 dark:from-slate-950 dark:to-slate-900 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container-wide relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block animate-fade-in">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium text-osaz-red bg-osaz-red/10 rounded-full">
                <Brain className="w-4 h-4 mr-2" />
                Revolutionizing Skincare
              </div>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-osaz-red via-osaz-orange to-osaz-pink animate-fade-in">
              About ByOsaz
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-in">
              Revolutionizing skincare through artificial intelligence and data-driven solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-osaz-blue bg-osaz-blue/10 rounded-full">
                Our Purpose
              </div>
              <h2 className="text-4xl font-bold leading-tight">
                Empowering Beauty Through
                <span className="text-osaz-red"> Technology</span>
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                At ByOsaz, we're on a mission to democratize access to personalized skincare through 
                cutting-edge AI technology. We believe everyone deserves skincare solutions that are 
                as unique as they are.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our team of experts combines dermatological science with artificial intelligence to 
                deliver precise, personalized skincare recommendations at scale.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-8 hover:shadow-lg transition-shadow duration-300 group">
                <Brain className="h-10 w-10 mb-6 text-osaz-red group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-xl mb-3">AI-Powered</h3>
                <p className="text-gray-600 dark:text-gray-400">Advanced machine learning algorithms</p>
              </Card>
              <Card className="p-8 hover:shadow-lg transition-shadow duration-300 group">
                <Users className="h-10 w-10 mb-6 text-osaz-blue group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-xl mb-3">User-Focused</h3>
                <p className="text-gray-600 dark:text-gray-400">Personalized recommendations</p>
              </Card>
              <Card className="p-8 hover:shadow-lg transition-shadow duration-300 group">
                <Globe className="h-10 w-10 mb-6 text-osaz-cyan group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-xl mb-3">Global Reach</h3>
                <p className="text-gray-600 dark:text-gray-400">Serving clients worldwide</p>
              </Card>
              <Card className="p-8 hover:shadow-lg transition-shadow duration-300 group">
                <Mail className="h-10 w-10 mb-6 text-osaz-orange group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-xl mb-3">Support</h3>
                <p className="text-gray-600 dark:text-gray-400">24/7 customer assistance</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900" id="team">
        <div className="container-tight">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium text-osaz-cyan bg-osaz-cyan/10 rounded-full">
              Our Team
            </div>
            <h2 className="text-4xl font-bold mb-6">Led by Industry Experts</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Our leadership team brings together expertise in dermatology, AI, and technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Chief Scientific Officer",
                bio: "PhD in Dermatology with 15+ years of research experience"
              },
              {
                name: "Michael Rodriguez",
                role: "Chief Technology Officer",
                bio: "Former AI Research Lead at major tech companies"
              },
              {
                name: "Emma Thompson",
                role: "Head of Product",
                bio: "10+ years experience in skincare product development"
              }
            ].map((member, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-osaz-red/20 to-osaz-orange/20 rounded-full mx-auto mb-6 group-hover:scale-105 transition-transform duration-300" />
                  <h3 className="font-semibold text-xl mb-2">{member.name}</h3>
                  <p className="text-osaz-blue font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-24 bg-white dark:bg-slate-950" id="careers">
        <div className="container-tight">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium text-osaz-orange bg-osaz-orange/10 rounded-full">
              Careers
            </div>
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Help us shape the future of skincare technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                position: "Senior AI Engineer",
                location: "San Francisco, CA",
                type: "Full-time"
              },
              {
                position: "Product Manager",
                location: "New York, NY",
                type: "Full-time"
              },
              {
                position: "UX Designer",
                location: "Remote",
                type: "Full-time"
              },
              {
                position: "Technical Writer",
                location: "Remote",
                type: "Contract"
              }
            ].map((job, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 group">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl">{job.position}</h3>
                    <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="group-hover:bg-osaz-red group-hover:text-white transition-colors duration-300">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900" id="contact">
        <div className="container-tight">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium text-osaz-pink bg-osaz-pink/10 rounded-full">
              Contact Us
            </div>
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you.
            </p>
          </div>
          <Card className="max-w-2xl mx-auto p-12 hover:shadow-xl transition-shadow duration-300">
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="bg-osaz-blue/10 p-4 rounded-2xl">
                  <Mail className="h-8 w-8 text-osaz-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Email Us</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">contact@byosaz.ai</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-osaz-blue/10 p-4 rounded-2xl">
                  <Globe className="h-8 w-8 text-osaz-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Visit Us</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    123 Innovation Drive<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
              <Button className="w-full bg-osaz-red hover:bg-osaz-red/90 text-white text-lg py-6 rounded-xl group">
                Send us a message
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
}