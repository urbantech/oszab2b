import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Products | ByOsaz",
};

export default function ProductsPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-osaz-peach/20 dark:from-slate-950 dark:to-slate-900 py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our AI-Powered Products
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Comprehensive solutions designed to revolutionize skincare formulation, 
              analysis, and personalization.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Skin Tone Matching AI */}
            <Card className="border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <Badge className="bg-osaz-pink text-white mb-3">Flagship Product</Badge>
                </div>
                <CardTitle className="text-2xl font-heading">Skin Tone Matching AI</CardTitle>
                <CardDescription className="text-lg">
                  Advanced computer vision for accurate skin tone analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="bg-osaz-orange/20 text-osaz-orange p-1 rounded-full mr-2 mt-0.5">✓</span>
                    <span>98% accuracy across diverse demographics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-osaz-orange/20 text-osaz-orange p-1 rounded-full mr-2 mt-0.5">✓</span>
                    <span>Trained on 100K+ dermatologist-validated images</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-osaz-orange/20 text-osaz-orange p-1 rounded-full mr-2 mt-0.5">✓</span>
                    <span>Real-time analysis via API or SDK</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/products/skin-tone-matching" passHref className="w-full">
                  <Button className="w-full bg-osaz-red hover:bg-osaz-red/90 text-white">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Ingredient Optimization */}
            <Card className="border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <Badge className="bg-osaz-blue text-white mb-3">Enterprise Grade</Badge>
                </div>
                <CardTitle className="text-2xl font-heading">Ingredient Optimization</CardTitle>
                <CardDescription className="text-lg">
                  Personalized formulation recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="bg-osaz-orange/20 text-osaz-orange p-1 rounded-full mr-2 mt-0.5">✓</span>
                    <span>10,000+ ingredient efficacy data points</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-osaz-orange/20 text-osaz-orange p-1 rounded-full mr-2 mt-0.5">✓</span>
                    <span>Compatibility analysis for formulations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-osaz-orange/20 text-osaz-orange p-1 rounded-full mr-2 mt-0.5">✓</span>
                    <span>Evidence-based recommendation engine</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/products/ingredient-optimization" passHref className="w-full">
                  <Button className="w-full bg-osaz-red hover:bg-osaz-red/90 text-white">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Osaz Data Library */}
            <Card className="border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <Badge className="bg-osaz-cyan text-white mb-3">Research-Grade</Badge>
                </div>
                <CardTitle className="text-2xl font-heading">Osaz Data Library</CardTitle>
                <CardDescription className="text-lg">
                  The world's largest skincare dataset
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="bg-osaz-orange/20 text-osaz-orange p-1 rounded-full mr-2 mt-0.5">✓</span>
                    <span>25,000+ ingredients with full properties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-osaz-orange/20 text-osaz-orange p-1 rounded-full mr-2 mt-0.5">✓</span>
                    <span>Clinical research integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-osaz-orange/20 text-osaz-orange p-1 rounded-full mr-2 mt-0.5">✓</span>
                    <span>Regular updates with new research</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/products/data-library" passHref className="w-full">
                  <Button className="w-full bg-osaz-red hover:bg-osaz-red/90 text-white">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-osaz-peach/20 dark:bg-slate-900">
        <div className="container-tight text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">Ready to transform your skincare solutions?</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a personalized demo to see how our AI can enhance your products and services.
          </p>
          <Link href="/demo" passHref>
            <Button 
              className="bg-osaz-red hover:bg-osaz-red/90 text-white font-medium px-8 py-3 rounded-xl text-lg"
            >
              Request Demo
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}