import { MainLayout } from "@/components/layout/main-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, Check, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export const metadata = {
  title: "Developer Portal | ByOsaz",
};

function CodeSnippet({ language, code }: { language: string; code: string }) {
  return (
    <div className="relative">
      <pre className="bg-slate-950 text-gray-300 p-4 rounded-lg overflow-x-auto">
        <code>{code}</code>
      </pre>
      <Button 
        variant="ghost" 
        size="sm" 
        className="absolute top-2 right-2 h-8 w-8 p-0"
        aria-label="Copy code"
      >
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default function DevelopersPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-osaz-blue/10 to-osaz-cyan/10 dark:from-slate-900 dark:to-slate-950 py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Developer Portal
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Access our powerful APIs to integrate AI-driven skincare analysis and recommendations into your applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-osaz-blue hover:bg-osaz-blue/90 text-white font-medium">
                Get API Keys
              </Button>
              <Button variant="outline" className="border-osaz-blue text-osaz-blue">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* API Overview */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">
            API Endpoints
          </h2>

          <Tabs defaultValue="javascript" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="curl">cURL</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="javascript" className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>GET /users</CardTitle>
                      <CardDescription>Retrieve user profile information</CardDescription>
                    </div>
                    <Badge className="bg-osaz-blue">GET</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CodeSnippet 
                    language="javascript"
                    code={`// Using fetch API
const getUser = async (userId) => {
  const response = await fetch(\`https://api.byosaz.ai/users/\${userId}\`, {
    headers: {
      'Authorization': \`Bearer \${API_KEY}\`,
      'Content-Type': 'application/json'
    }
  });
  
  if (!response.ok) {
    throw new Error(\`API error: \${response.status}\`);
  }
  
  return await response.json();
};`}
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>POST /skin-match</CardTitle>
                      <CardDescription>Analyze skin tone from image</CardDescription>
                    </div>
                    <Badge className="bg-osaz-red">POST</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CodeSnippet 
                    language="javascript"
                    code={`// Using fetch API with image upload
const analyzeSkin = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);
  
  const response = await fetch('https://api.byosaz.ai/skin-match', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${API_KEY}\`
    },
    body: formData
  });
  
  if (!response.ok) {
    throw new Error(\`API error: \${response.status}\`);
  }
  
  return await response.json();
};`}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="python" className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>GET /users</CardTitle>
                      <CardDescription>Retrieve user profile information</CardDescription>
                    </div>
                    <Badge className="bg-osaz-blue">GET</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CodeSnippet 
                    language="python"
                    code={`import requests

def get_user(user_id, api_key):
    headers = {
        'Authorization': f'Bearer {api_key}',
        'Content-Type': 'application/json'
    }
    
    response = requests.get(
        f'https://api.byosaz.ai/users/{user_id}',
        headers=headers
    )
    
    response.raise_for_status()
    return response.json()`}
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>POST /skin-match</CardTitle>
                      <CardDescription>Analyze skin tone from image</CardDescription>
                    </div>
                    <Badge className="bg-osaz-red">POST</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CodeSnippet 
                    language="python"
                    code={`import requests

def analyze_skin(image_path, api_key):
    headers = {
        'Authorization': f'Bearer {api_key}'
    }
    
    with open(image_path, 'rb') as image_file:
        files = {'image': image_file}
        response = requests.post(
            'https://api.byosaz.ai/skin-match',
            headers=headers,
            files=files
        )
    
    response.raise_for_status()
    return response.json()`}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="curl" className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>GET /users</CardTitle>
                      <CardDescription>Retrieve user profile information</CardDescription>
                    </div>
                    <Badge className="bg-osaz-blue">GET</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CodeSnippet 
                    language="bash"
                    code={`curl -X GET 'https://api.byosaz.ai/users/123' \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -H 'Content-Type: application/json'`}
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>POST /skin-match</CardTitle>
                      <CardDescription>Analyze skin tone from image</CardDescription>
                    </div>
                    <Badge className="bg-osaz-red">POST</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CodeSnippet 
                    language="bash"
                    code={`curl -X POST 'https://api.byosaz.ai/skin-match' \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -F 'image=@/path/to/image.jpg'`}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* SDK & Resources */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">
            SDKs & Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>JavaScript SDK</CardTitle>
                <CardDescription>Official JS client for ByOsaz API</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  Seamless integration for web applications with TypeScript support.
                </p>
                <div className="bg-slate-950 text-gray-300 p-3 rounded-lg text-sm mb-4">
                  npm install @byosaz/sdk-js
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="#" passHref>
                  <Button variant="outline" className="text-osaz-blue border-osaz-blue">
                    Documentation
                  </Button>
                </Link>
                <Link href="#" passHref>
                  <Button variant="ghost" className="flex items-center gap-1 text-osaz-blue">
                    GitHub <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Python SDK</CardTitle>
                <CardDescription>Official Python client for ByOsaz API</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  Ideal for data science and backend integrations with async support.
                </p>
                <div className="bg-slate-950 text-gray-300 p-3 rounded-lg text-sm mb-4">
                  pip install byosaz-sdk
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="#" passHref>
                  <Button variant="outline" className="text-osaz-blue border-osaz-blue">
                    Documentation
                  </Button>
                </Link>
                <Link href="#" passHref>
                  <Button variant="ghost" className="flex items-center gap-1 text-osaz-blue">
                    GitHub <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Community & Support</CardTitle>
                <CardDescription>Join our developer community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  Get help from the ByOsaz team and connect with other developers.
                </p>
                <div className="space-y-3">
                  <Link href="#" className="flex items-center gap-2 text-osaz-blue hover:underline">
                    <div className="w-5 h-5 bg-indigo-500 rounded flex items-center justify-center text-white text-xs">D</div>
                    <span>Join our Discord server</span>
                  </Link>
                  <Link href="#" className="flex items-center gap-2 text-osaz-blue hover:underline">
                    <div className="w-5 h-5 bg-sky-500 rounded flex items-center justify-center text-white text-xs">S</div>
                    <span>ByOsaz on Stack Overflow</span>
                  </Link>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="#" passHref className="w-full">
                  <Button className="w-full bg-osaz-red hover:bg-osaz-red/90 text-white">
                    Contact Support
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-osaz-peach/30 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container-tight text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Ready to integrate with ByOsaz?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Start building with our APIs today and transform your skincare applications
            with AI-powered analysis and recommendations.
          </p>
          <Link href="/demo" passHref>
            <Button 
              className="bg-osaz-red hover:bg-osaz-red/90 text-white font-medium px-6 py-3 rounded-xl text-lg"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}