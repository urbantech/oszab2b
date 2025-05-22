import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, FlaskRound, Zap } from "lucide-react";

const features = [
  {
    title: "Skin Tone Matching AI",
    description: "Accurately analyzes and matches skin tones across diverse demographics with 98% accuracy.",
    icon: <Zap className="h-10 w-10 text-osaz-pink" />,
  },
  {
    title: "Ingredient Optimization",
    description: "Recommends personalized skincare ingredients based on individual skin profiles and concerns.",
    icon: <FlaskRound className="h-10 w-10 text-osaz-orange" />,
  },
  {
    title: "Osaz Data Library",
    description: "Access to the world's largest dermatologically-validated skincare ingredient database.",
    icon: <Database className="h-10 w-10 text-osaz-blue" />,
  },
];

export function Features() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Skincare AI Platform
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Our AI solutions provide enterprise-grade accuracy for skincare formulation, 
            recommendation, and analysis across diverse demographics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-heading">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}