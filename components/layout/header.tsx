"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Brain, 
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-sm dark:bg-slate-900 py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Brain className="h-8 w-8 text-osaz-red" />
          <span className="font-heading font-bold text-2xl text-osaz-red">ByOsaz</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {MAIN_NAV_ITEMS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "text-base font-medium hover:text-osaz-blue transition-colors",
                pathname === item.href ? "text-osaz-blue" : "text-gray-700 dark:text-gray-300"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login" passHref>
            <Button variant="ghost" className="font-medium">
              Log In
            </Button>
          </Link>
          <Link href="/demo" passHref>
            <Button className="bg-osaz-red hover:bg-osaz-red/90 text-white font-medium">
              Request Demo
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 absolute top-full left-0 right-0 border-t border-gray-100 dark:border-gray-800 shadow-lg animate-fade-in">
          <div className="container py-4 flex flex-col gap-4">
            {MAIN_NAV_ITEMS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "py-2 px-4 text-base font-medium hover:text-osaz-blue transition-colors",
                  pathname === item.href ? "text-osaz-blue" : "text-gray-700 dark:text-gray-300"
                )}
              >
                {item.title}
              </Link>
            ))}
            <div className="border-t border-gray-100 dark:border-gray-800 pt-4 flex flex-col gap-3">
              <Link href="/login" passHref>
                <Button variant="ghost" className="w-full justify-start font-medium">
                  Log In
                </Button>
              </Link>
              <Link href="/demo" passHref>
                <Button className="w-full bg-osaz-red hover:bg-osaz-red/90 text-white font-medium">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}