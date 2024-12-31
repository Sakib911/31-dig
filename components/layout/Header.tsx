"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" max-w-screen-2xl mx-auto bg-white border-b border-gray-200">
      <div className=" px-4 lg:px-8">
        <div className="flex items-center h-16">
        <div>
        <Link href="/" className=" cover">
            <img src="/logo.png" alt="Digital Pylot" className="h-8" />
          </Link>
        </div>

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
          <nav className="hidden md:flex items-center ml-24 mr-8 gap-4 lg:gap-8">
            <NavItem title="HOSTING" />
            <NavItem title="DOMAIN" />
            <NavItem title="DIGITAL&nbsp;MARKETING" />
            <NavItem title="DESIGN" badge="28" />
            <NavItem title="DEVELOPMENT" />
            <NavItem title="ADDONS" />
            <Link href="/contact">
              <NavItem title="CONTACT&nbsp;US" />
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="rounded-full px-4 lg:px-6 font-outfit">Register</Button>
            <Button className="rounded-full px-4 lg:px-6 bg-[#3B82F6] hover:bg-[#2563EB] font-outfit">Login</Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavItem title="HOSTING" />
            <MobileNavItem title="DOMAIN" />
            <MobileNavItem title="DIGITAL&nbsp;MARKETING" />
            <MobileNavItem title="DESIGN" badge="28" />
            <MobileNavItem title="DEVELOPMENT" />
            <MobileNavItem title="ADDONS" />
            <MobileNavItem title="CONTACT&nbsp;US" />
          </div>
          <div className="px-4 py-3 border-t border-gray-200 flex gap-3">
            <Button variant="outline" className="flex-1 rounded-full font-outfit">Register</Button>
            <Button className="flex-1 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] font-outfit">Login</Button>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ title, badge }: { title: string; badge?: string }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-nav-text hover:text-gray-900 font-outfit text-[18px] font-normal capitalize">
        {title}
        {badge && (
          <span className="ml-1 px-1.5 py-0.5 text-xs bg-orange-500 text-white rounded-full">
            {badge}
          </span>
        )}
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

function MobileNavItem({ title, badge }: { title: string; badge?: string }) {
  return (
    <button className="w-full flex items-center justify-between px-3 py-2 rounded-md text-nav-text hover:text-gray-900 hover:bg-gray-50 font-outfit text-[18px] font-normal capitalize">
      <span>{title}</span>
      {badge && (
        <span className="px-1.5 py-0.5 text-xs bg-orange-500 text-white rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
}