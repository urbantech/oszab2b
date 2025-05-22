import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Shield, Database, Cloud } from "lucide-react";

export const metadata = {
  title: "Technology | ByOsaz",
};

export default function TechnologyPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-osaz-peach/20 dark:from-slate-950 dark:to-slate-900 py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our Technology
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Advanced AI solutions built on robust, scalable, and ethical foundations.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Grid */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Explainable AI */}
            <Card className="border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">
                  <Brain className="h-10 w-10 text-osaz-pink" />
                </div>
                <CardTitle className="text-2xl font-heading">Explainable AI</CardTitle>
                <CardDescription className="text-lg">
                  Transparent decision-making processes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="bg-osaz-orange/20 text-osaz-orange p-1 rounded-full mr-2 mt-0.5">✓</span>
                    <span>Clear reasoning behind each recommendation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-osaz-orange/20 text-osaz-orange p-1 rounded-full mr-2 mt-0.5">✓</span>
                    <span>Detailed confidence scores</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-osaz-orange/20 text-osaz-orange p-1 rounded-full mr-2 mt-0.5">✓</span>
                    <span>Visual decision pathways</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Dataset QA */}
            <Card className="border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">
                  <Database className="h-10 w-10 text-osaz-blue" />
                </div>
                <CardTitle className="text-2xl font-heading">Dataset QA</CardTitle>
                <CardDescription className="text-lg">
                  Rigorous data quality assurance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="bg-osaz-orange/20 text-osaz-orange p-1 rounded-full mr-2 mt-0.5">✓</span>
                    <span>Continuous validation processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-osaz-orange/20 text-osaz-orange p-1 rounded-full mr-2 mt-0.5">✓</span>
                    <span>Expert-reviewed datasets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-osaz-orange/20 text-osaz-orange p-1 rounded-full mr-2 mt-0.5">✓</span>
                    <span>Regular updates and maintenance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Bias Mitigation */}
            <Card className="border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">
                  <Shield className="h-10 w-10 text-osaz-cyan" />
                </div>
                <CardTitle className="text-2xl font-heading">Bias Mitigation</CardTitle>
                <CardDescription className="text-lg">
                  Ensuring fair and inclusive results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="bg-osaz-orange/20 text-osaz-orange p-1 rounded-full mr-2 mt-0.5">✓</span>
                    <span>Diverse training data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-osaz-orange/20 text-osaz-orange p-1 rounded-full mr-2 mt-0.5">✓</span>
                    <span>Regular bias audits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-osaz-orange/20 text-osaz-orange p-1 rounded-full mr-2 mt-0.5">✓</span>
                    <span>Ethical AI principles</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Deployment Options */}
            <Card className="border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">
                  <Cloud className="h-10 w-10 text-osaz-orange" />
                </div>
                <CardTitle className="text-2xl font-heading">Deployment Options</CardTitle>
                <CardDescription className="text-lg">
                  Flexible implementation choices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="bg-osaz-orange/20 text-osaz-orange p-1 rounded-full mr-2 mt-0.5">✓</span>
                    <span>Cloud-hosted solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-osaz-orange/20 text-osaz-orange p-1 rounded-full mr-2 mt-0.5">✓</span>
                    <span>On-premises deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-osaz-orange/20 text-osaz-orange p-1 rounded-full mr-2 mt-0.5">✓</span>
                    <span>API integration options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-osaz-peach/20 dark:bg-slate-900">
        <div className="container-tight text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">Ready to experience our technology?</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a demo to see how our AI technology can transform your skincare solutions.
          </p>
          <button className="bg-osaz-red hover:bg-osaz-red/90 text-white font-medium px-8 py-3 rounded-xl text-lg">
            Request Demo
          </button>
        </div>
      </section>
    </MainLayout>
  );
}