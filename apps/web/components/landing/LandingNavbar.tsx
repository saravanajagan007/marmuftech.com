'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Shield } from 'lucide-react';
import { BrandLogo } from '../BrandLogo';

export function LandingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group" aria-label="MarmufTech home">
            <BrandLogo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#hero"
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#process"
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
            >
              Process
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
            >
              Reviews
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              href="/admin"
              className="inline-flex items-center px-3 py-2 text-xs font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-all"
            >
              <Shield className="h-3.5 w-3.5 mr-1 text-emerald-600" />
              <span>Admin</span>
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all"
            >
              <span>Get Free Proposal</span>
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
            >
              Services
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
            >
              Process
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
            >
              Reviews
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
            >
              FAQ
            </a>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-emerald-700 bg-emerald-50 flex items-center"
            >
              <Shield className="h-4 w-4 mr-1.5" />
              <span>Admin Portal Login</span>
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col space-y-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20"
            >
              Get Free Proposal
            </a>
            <a
              href="https://wa.me/918807649359?text=Hello%20MarmufTech,%20I%20would%20like%20to%20inquire%20about%20a%20new%20website%20and%20marketing%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 rounded-xl text-xs font-semibold text-emerald-700 border border-emerald-300 hover:bg-emerald-50"
            >
              Chat on WhatsApp (+91 88076 49359)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
