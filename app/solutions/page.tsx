import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Database, Lock } from "lucide-react";

export default function SolutionsPage() {
  return (
    <MainLayout>
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Solutions for Every Need
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover our comprehensive range of solutions designed to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Code2 className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Development Tools</h3>
            <p className="text-muted-foreground mb-4">
              Powerful development tools to streamline your workflow and boost productivity.
            </p>
            <Button variant="ghost" className="group">
              Learn more
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Database className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Data Management</h3>
            <p className="text-muted-foreground mb-4">
              Secure and scalable data management solutions for your enterprise needs.
            </p>
            <Button variant="ghost" className="group">
              Learn more
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Lock className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Security Solutions</h3>
            <p className="text-muted-foreground mb-4">
              Advanced security measures to protect your applications and data.
            </p>
            <Button variant="ghost" className="group">
              Learn more
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
      </main>
    </MainLayout>
  );
}