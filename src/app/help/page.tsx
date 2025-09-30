'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@/lib/icons';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: 'helpCircle' },
    { id: 'shopping', name: 'Shopping', icon: 'shoppingBag' },
    { id: 'selling', name: 'Selling', icon: 'package' },
    { id: 'account', name: 'Account', icon: 'user' },
    { id: 'shipping', name: 'Shipping', icon: 'truck' },
    { id: 'returns', name: 'Returns', icon: 'refresh' },
    { id: 'payment', name: 'Payment', icon: 'creditCard' }
  ];

  const helpArticles = [
    {
      id: 1,
      title: "How to place an order",
      category: "shopping",
      description: "Step-by-step guide to placing your first order on Green Loop",
      content: "To place an order, simply browse our products, add items to your cart, and proceed to checkout..."
    },
    {
      id: 2,
      title: "Understanding product quality standards",
      category: "shopping",
      description: "Learn about our quality standards for recycled products",
      content: "All products on Green Loop must meet our strict quality standards..."
    },
    {
      id: 3,
      title: "How to become a verified seller",
      category: "selling",
      description: "Complete guide to becoming a seller on our platform",
      content: "To become a seller, you need to submit an application with your business information..."
    },
    {
      id: 4,
      title: "Seller verification process",
      category: "selling",
      description: "What to expect during the seller verification process",
      content: "Our verification process includes background checks, product sample reviews..."
    },
    {
      id: 5,
      title: "Creating and managing your account",
      category: "account",
      description: "How to create and manage your Green Loop account",
      content: "Creating an account is simple and free. You can sign up using your email address..."
    },
    {
      id: 6,
      title: "Updating your profile information",
      category: "account",
      description: "How to update your personal information and preferences",
      content: "You can update your profile information at any time by going to your account settings..."
    },
    {
      id: 7,
      title: "Shipping options and delivery times",
      category: "shipping",
      description: "Information about shipping options and estimated delivery times",
      content: "We offer several shipping options including standard, expedited, and express delivery..."
    },
    {
      id: 8,
      title: "Tracking your order",
      category: "shipping",
      description: "How to track your order from placement to delivery",
      content: "Once your order ships, you'll receive a tracking number via email..."
    },
    {
      id: 9,
      title: "Return policy and process",
      category: "returns",
      description: "Our 30-day return policy and how to initiate a return",
      content: "We offer a 30-day return policy for all products. If you're not satisfied..."
    },
    {
      id: 10,
      title: "Refund processing times",
      category: "returns",
      description: "How long it takes to process refunds",
      content: "Refunds are typically processed within 5-7 business days after we receive your return..."
    },
    {
      id: 11,
      title: "Accepted payment methods",
      category: "payment",
      description: "All the payment methods we accept",
      content: "We accept all major credit cards, PayPal, and other secure payment methods..."
    },
    {
      id: 12,
      title: "Payment security and protection",
      category: "payment",
      description: "How we protect your payment information",
      content: "We use industry-standard encryption to protect your payment information..."
    }
  ];

  const filteredArticles = helpArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularTopics = [
    { title: "How to place an order", views: "1.2K" },
    { title: "Return policy", views: "980" },
    { title: "Seller verification", views: "850" },
    { title: "Shipping information", views: "720" },
    { title: "Account setup", views: "650" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-primary/10 to-primary-light/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-6"
          >
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl font-bold">
              Help Center
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to your questions and get the support you need
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto"
          >
            <motion.div variants={itemVariants} className="relative">
              <input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 pr-4 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
              <Icon name="search" size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Categories */}
              <motion.div variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Icon name={category.icon} size={16} />
                        <span className="text-sm">{category.name}</span>
                      </button>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Popular Topics */}
              <motion.div variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Popular Topics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {popularTopics.map((topic, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{topic.title}</span>
                        <span className="text-xs text-muted-foreground">{topic.views}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Support */}
              <motion.div variants={itemVariants}>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Icon name="helpCircle" size={32} className="mx-auto mb-4 text-primary" />
                    <h3 className="font-bold mb-2">Still need help?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Can't find what you're looking for? Contact our support team.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contact">Contact Support</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold mb-4">
                  {selectedCategory === 'all' ? 'All Help Articles' : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-muted-foreground">
                  {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
                </p>
              </motion.div>

              <div className="space-y-4">
                {filteredArticles.map((article) => (
                  <motion.div key={article.id} variants={itemVariants}>
                    <Card hover className="cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors">
                              {article.title}
                            </h3>
                            <p className="text-muted-foreground mb-3">
                              {article.description}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span className="capitalize">{article.category}</span>
                              <span>•</span>
                              <span>5 min read</span>
                            </div>
                          </div>
                          <Icon name="arrowRight" size={20} className="text-muted-foreground ml-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <motion.div variants={itemVariants} className="text-center py-12">
                  <Icon name="search" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-bold mb-2">No articles found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search terms or browse different categories.
                  </p>
                  <Button variant="outline" onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}>
                    Clear Filters
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
