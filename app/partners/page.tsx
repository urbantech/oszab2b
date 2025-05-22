import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, HandshakeIcon, Trophy } from "lucide-react";
import Link from "next/link";

export default function PartnersPage() {
  const partnerTypes = [
    {
      title: "Technology Partners",
      description: "Join our ecosystem of technology providers and innovators",
      icon: Building2,
      cta: "Become a Technology Partner",
      href: "/partners/technology"
    },
    {
      title: "Solution Partners",
      description: "Deliver value to customers through integrated solutions",
      icon: HandshakeIcon,
      cta: "Become a Solution Partner",
      href: "/partners/solutions"
    },
    {
      title: "Strategic Alliances",
      description: "Form strategic partnerships to drive mutual growth",
      icon: Trophy,
      cta: "Explore Strategic Alliances",
      href: "/partners/strategic"
    }
  ];

  return (
    <MainLayout>
      <section className="py-16">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Partner with Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Join our partner ecosystem and help shape the future of technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4">
                  <type.icon className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-xl font-semibold mb-2">{type.title}</h2>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <Button asChild>
                  <Link href={type.href}>{type.cta}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}