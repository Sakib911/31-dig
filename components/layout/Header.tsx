"use client"

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-[35px] w-full z-40 bg-white/70 border-b border-gray-200 backdrop-blur-sm">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 flex items-center justify-between h-[90px]">
        {/* Logo */}
        <Link href="/" className="cover">
          <img src="/logo.png" alt="Digital Pylot" className="h-14" />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-nav-text" />
          ) : (
            <Menu className="h-6 w-6 text-nav-text" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavItem title="Hosting" />
          <NavItem title="Domain" />
          <NavItem title="Digital&nbsp;Marketing" />
          <NavItem title="Design" />
          <NavItem title="Development" />
          <NavItem title="Addons" />
          <Link href="/contact">
            <NavItem title="Contact&nbsp;Us" />
          </Link>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Updated Register Button */}
          <Button
            variant="outline"
            className="rounded-full px-8 py-2 border-blue-500 text-blue-500 hover:bg-blue-100 font-outfit transition-all duration-300"
          >
            Register
          </Button>
          
          {/* Updated Login Button */}
          <Button
            className="rounded-full px-8 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 font-outfit transition-all duration-300"
          >
            Login
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-3 space-y-2">
            <MobileNavItem title="Hosting" />
            <MobileNavItem title="Domain" />
            <MobileNavItem title="Digital&nbsp;Marketing" />
            <MobileNavItem title="Design" />
            <MobileNavItem title="Development" />
            <MobileNavItem title="Addons" />
            <MobileNavItem title="Contact&nbsp;Us" />
          </div>
          <div className="px-4 py-4 border-t border-gray-200 flex gap-4">
            {/* Updated Mobile Register Button */}
            <Button
              variant="outline"
              className="flex-1 rounded-full font-outfit border-blue-500 text-blue-500 hover:bg-blue-100 transition-all duration-300"
            >
              Register
            </Button>
            
            {/* Updated Mobile Login Button */}
            <Button
              className="flex-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 font-outfit transition-all duration-300"
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ title, badge }: { title: string; badge?: string }) {
  return (
    <div className="relative group">
      <button className="flex items-center text-gray-700 hover:text-gray-900 font-outfit text-[16px] font-medium">
        {title}
        {badge && (
          <span className="ml-1 px-2 py-0.5 text-xs bg-orange-500 text-white rounded-full">
            {badge}
          </span>
        )}
        <svg
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

function MobileNavItem({ title, badge }: { title: string; badge?: string }) {
  return (
    <button className="w-full flex items-center justify-between px-4 py-3 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 font-outfit text-[16px] font-medium capitalize">
      <span>{title}</span>
      {badge && (
        <span className="px-2 py-0.5 text-xs bg-orange-500 text-white rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
}
