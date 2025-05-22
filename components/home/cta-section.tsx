import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-osaz-peach/30 to-osaz-pink/10">
      <div className="container-tight text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Ready to Transform Your Skincare Approach?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Join leading brands using ByOsaz to deliver personalized skincare solutions
            to their customers through AI-driven analysis and recommendations.
          </p>
          <div className="pt-4">
            <Link href="/demo" passHref>
              <Button 
                className="bg-osaz-red hover:bg-osaz-red/90 text-white font-medium px-8 py-6 rounded-xl text-lg group"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 pt-4">
            No credit card required. Get started in minutes.
          </p>
        </div>
      </div>
    </section>
  );
}