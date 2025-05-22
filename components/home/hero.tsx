"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background Design Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-osaz-peach/20 rounded-bl-[100px] -z-10" />
      
      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 lg:py-24">
        {/* Content */}
        <div className="flex flex-col justify-center animate-slide-in">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
            <span className="text-osaz-red">AI-Powered</span> Skincare Solutions
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
            Unlock personalized skincare recommendations with our cutting-edge AI platform, delivering precise ingredient matching and skin tone analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://calendly.com/osaz0mon" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                className={cn(
                  "bg-osaz-red hover:bg-osaz-red/90 text-white font-medium px-6 py-3 rounded-xl text-lg transition-all duration-300 group",
                  isHovered && "shadow-lg"
                )}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Request Demo
                <ArrowRight className={cn(
                  "ml-2 h-5 w-5 transition-transform duration-300",
                  isHovered && "translate-x-1"
                )} />
              </Button>
            </a>
            
            <Link href="/products" passHref>
              <Button 
                variant="outline" 
                className="border-osaz-blue text-osaz-blue hover:bg-osaz-blue/10 font-medium px-6 py-3 rounded-xl text-lg"
              >
                Explore Products
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="flex items-center justify-center animate-fade-in">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute -inset-4 bg-gradient-to-br from-osaz-pink to-osaz-orange opacity-20 blur-xl rounded-full animate-pulse" />
            <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden h-full">
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Skin Analysis</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  Precision analysis powered by our proprietary AI algorithm
                </p>
                
                <div className="space-y-4">
                  <div className="h-8 bg-osaz-peach/30 rounded-lg w-3/4"></div>
                  <div className="h-8 bg-osaz-peach/30 rounded-lg"></div>
                  <div className="h-8 bg-osaz-peach/30 rounded-lg w-5/6"></div>
                  <div className="h-8 bg-osaz-peach/30 rounded-lg w-2/3"></div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <div className="h-10 w-32 bg-osaz-red rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}