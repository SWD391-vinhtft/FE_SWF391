'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@/lib/icons';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="hidden lg:flex items-center justify-between py-2 text-xs text-muted-foreground border-b">
          <div className="flex items-center space-x-4">
            <span>Miễn phí vận chuyển cho đơn hàng trên 1.200.000₫</span>
            <span>•</span>
            <span>30-day return policy</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/help" className="hover:text-primary transition-colors">Help Center</Link>
            <Link href="/orders" className="hover:text-primary transition-colors">Track Order</Link>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <Icon name="recycle" size={20} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Green Loop</span>
            </Link>
          </motion.div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for recycled products..."
                className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
              <Icon name="search" size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <Link href="/shop" className="flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors">
                <span>Shop</span>
                <Icon name="chevronLeft" size={14} className="rotate-90" />
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Women</h4>
                      <ul className="space-y-1 text-sm">
                        <li><Link href="/shop/women/tops" className="hover:text-primary transition-colors">Tops & Shirts</Link></li>
                        <li><Link href="/shop/women/dresses" className="hover:text-primary transition-colors">Dresses</Link></li>
                        <li><Link href="/shop/women/bottoms" className="hover:text-primary transition-colors">Bottoms</Link></li>
                        <li><Link href="/shop/women/outerwear" className="hover:text-primary transition-colors">Outerwear</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Men</h4>
                      <ul className="space-y-1 text-sm">
                        <li><Link href="/shop/men/tops" className="hover:text-primary transition-colors">Tops & Shirts</Link></li>
                        <li><Link href="/shop/men/bottoms" className="hover:text-primary transition-colors">Jeans & Pants</Link></li>
                        <li><Link href="/shop/men/outerwear" className="hover:text-primary transition-colors">Outerwear</Link></li>
                        <li><Link href="/shop/men/activewear" className="hover:text-primary transition-colors">Activewear</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Link href="/marketplace" className="text-sm font-medium hover:text-primary transition-colors">
              Marketplace
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Icon name="search" size={20} />
            </Button>

            {/* Wishlist */}
            <Link href="/wishlist" className="relative inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-muted transition-colors">
              <Icon name="heart" size={20} />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </Link>

            {/* Shopping Cart */}
            <Link href="/orders" className="relative inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-muted transition-colors">
              <Icon name="cart" size={20} />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
            </Link>

            {/* User Menu */}
            <div className="relative group">
              <Button variant="ghost" size="sm">
                <Icon name="user" size={20} />
              </Button>
              {/* User Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <Link href="/profile" className="block px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors">My Profile</Link>
                  <Link href="/orders" className="block px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors">My Orders</Link>
                  <Link href="/wishlist" className="block px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors">Wishlist</Link>
                  <hr className="my-2" />
                  <Link href="/auth/login" className="block px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors">Login</Link>
                  <Link href="/auth/register" className="block px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors">Sign Up</Link>
                </div>
              </div>
            </div>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
