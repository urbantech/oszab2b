"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Interactive Demo
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Experience our platform's features in this interactive demonstration
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Feature Showcase</h3>
            <p className="text-gray-600 mb-4">
              Explore our core features and see how they can benefit your workflow
            </p>
            <Button variant="outline" className="w-full">
              Start Tour <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Live Preview</h3>
            <p className="text-gray-600 mb-4">
              Test drive our platform with sample data and real-time interactions
            </p>
            <Button variant="outline" className="w-full">
              Try Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}