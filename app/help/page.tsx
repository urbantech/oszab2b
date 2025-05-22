import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, BookOpen } from "lucide-react";
import Link from "next/link";

export default function HelpPage() {
  const helpSections = [
    {
      title: "Documentation",
      description: "Browse our comprehensive documentation to learn how to use our platform.",
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      link: "/docs",
      linkText: "View Documentation"
    },
    {
      title: "Contact Support",
      description: "Can't find what you're looking for? Our support team is here to help.",
      icon: <MessageCircle className="h-6 w-6 text-green-600" />,
      link: "/contact",
      linkText: "Contact Us"
    },
    {
      title: "FAQ",
      description: "Find answers to common questions about our platform and services.",
      icon: <MessageCircle className="h-6 w-6 text-purple-600" />,
      link: "/faq",
      linkText: "View FAQ"
    },
    {
      title: "Email Us",
      description: "Prefer to email? We'll get back to you as soon as possible.",
      icon: <Mail className="h-6 w-6 text-red-600" />,
      link: "mailto:support@byosaz.ai",
      linkText: "Email Support"
    }
  ];

  return (
    <main className="container py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">How can we help you today?</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Find answers, guides, and support for all your questions about our platform.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {helpSections.map((section, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                {section.icon}
                <CardTitle className="text-xl">{section.title}</CardTitle>
              </div>
              <CardDescription className="text-base">
                {section.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline">
                <Link href={section.link}>
                  {section.linkText}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 dark:bg-slate-800 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Our customer support team is available 24/7 to assist you with any questions or issues you may have.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/contact">Contact Support</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/demo">Request a Demo</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
