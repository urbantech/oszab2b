import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Video, BookOpen, ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Resources | ByOsaz",
};

export default function ResourcesPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-osaz-peach/20 dark:from-slate-950 dark:to-slate-900 py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Resources & Learning
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Explore our comprehensive collection of guides, tutorials, and industry insights
              to help you make the most of ByOsaz's AI capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <Card className="border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-osaz-pink text-white">Blog</Badge>
                </div>
                <CardTitle className="text-2xl font-heading">Latest Articles</CardTitle>
                <CardDescription className="text-lg">
                  Industry insights and product updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Link href="/blog/ai-skincare-future" className="block p-4 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors">
                    <h3 className="font-medium mb-2">The Future of AI in Skincare</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Exploring how AI is revolutionizing personalized skincare recommendations</p>
                  </Link>
                  
                  <Link href="/blog/machine-learning-beauty" className="block p-4 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors">
                    <h3 className="font-medium mb-2">Machine Learning in Beauty Tech</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Understanding the role of ML in modern beauty technology</p>
                  </Link>
                  
                  <Link href="/blog" className="inline-flex items-center text-osaz-blue hover:text-osaz-blue/80 transition-colors">
                    View all articles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Webinars */}
            <Card className="border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-osaz-orange text-white">Webinars</Badge>
                </div>
                <CardTitle className="text-2xl font-heading">Video Content</CardTitle>
                <CardDescription className="text-lg">
                  Live sessions and recorded tutorials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Link href="/webinars/api-masterclass" className="block p-4 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors">
                    <div className="flex items-start gap-3">
                      <Video className="h-5 w-5 text-osaz-orange mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">API Integration Masterclass</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">60 min • Advanced</p>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/webinars/skin-analysis" className="block p-4 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors">
                    <div className="flex items-start gap-3">
                      <Video className="h-5 w-5 text-osaz-orange mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Skin Analysis Deep Dive</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">45 min • Intermediate</p>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/webinars" className="inline-flex items-center text-osaz-blue hover:text-osaz-blue/80 transition-colors">
                    Browse all webinars
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Documentation */}
            <Card className="border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-osaz-blue text-white">Documentation</Badge>
                </div>
                <CardTitle className="text-2xl font-heading">Technical Guides</CardTitle>
                <CardDescription className="text-lg">
                  Implementation guides and API docs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Link href="/docs/quickstart" className="block p-4 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors">
                    <div className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-osaz-blue mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Quickstart Guide</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Get up and running in minutes</p>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/docs/api-reference" className="block p-4 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors">
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-osaz-blue mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">API Reference</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Complete API documentation</p>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/docs" className="inline-flex items-center text-osaz-blue hover:text-osaz-blue/80 transition-colors">
                    View all documentation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Additional Resources
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Download our comprehensive guides and resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/resources/whitepaper.pdf" className="flex items-center justify-between p-6 bg-white dark:bg-slate-950 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className="bg-osaz-red/10 p-3 rounded-lg">
                  <Download className="h-6 w-6 text-osaz-red" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Technical Whitepaper</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">PDF • 2.4 MB</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">Download</Button>
            </Link>
            
            <Link href="/resources/case-study.pdf" className="flex items-center justify-between p-6 bg-white dark:bg-slate-950 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className="bg-osaz-blue/10 p-3 rounded-lg">
                  <Download className="h-6 w-6 text-osaz-blue" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Case Study: Enterprise Implementation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">PDF • 1.8 MB</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">Download</Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}