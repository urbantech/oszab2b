import Link from "next/link";
import { Brain, Twitter, Linkedin, Github } from "lucide-react";
import { FOOTER_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Brain className="h-7 w-7 text-osaz-red" />
              <span className="font-heading font-bold text-2xl text-osaz-red">ByOsaz</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              AI-powered skincare solutions via APIs, datasets, and enterprise-grade tooling.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href={SITE_CONFIG.links.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-500 hover:text-osaz-blue transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href={SITE_CONFIG.links.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-osaz-blue transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href={SITE_CONFIG.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-500 hover:text-osaz-blue transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.title}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-osaz-blue dark:text-gray-400 dark:hover:text-osaz-pink transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.title}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-osaz-blue dark:text-gray-400 dark:hover:text-osaz-pink transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Developers</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.developers.map((link) => (
                <li key={link.title}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-osaz-blue dark:text-gray-400 dark:hover:text-osaz-pink transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} ByOsaz. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Built with care by the ByOsaz team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}