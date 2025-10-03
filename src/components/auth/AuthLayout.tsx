'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Recycle, ArrowLeft } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  showBackButton?: boolean;
  backHref?: string;
}

export function AuthLayout({ children, showBackButton = true, backHref = '/' }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="bg-primary rounded-full p-2">
                <Recycle className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">Green Loop</span>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-4">
              {showBackButton && (
                <Link
                  href={backHref}
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Link>
              )}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        {children}
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full border-t bg-card/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            {/* Copyright */}
            <p>© 2025 Green Loop. All rights reserved.</p>

            {/* Links */}
            <div className="flex items-center gap-4">
              <Link href="/about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>

            {/* Tagline */}
            <p className="text-xs">🌱 Circular Fashion for a Sustainable Future</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
} 