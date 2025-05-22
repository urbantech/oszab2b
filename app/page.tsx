import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { CTASection } from "@/components/home/cta-section";
import { MainLayout } from "@/components/layout/main-layout";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Our AI solutions power some of the world's most innovative skincare and beauty brands.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {/* Placeholder logos - would be replaced with actual partner logos */}
            <div className="h-16 w-32 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center">Logo 1</div>
            <div className="h-16 w-32 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center">Logo 2</div>
            <div className="h-16 w-32 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center">Logo 3</div>
            <div className="h-16 w-32 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center">Logo 4</div>
          </div>
        </div>
      </section>
      <CTASection />
    </MainLayout>
  );
}