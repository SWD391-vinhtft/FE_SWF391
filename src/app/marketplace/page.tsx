'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@/lib/icons';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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

export default function MarketplacePage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Sellers', count: '50+' },
    { id: 'verified', name: 'Verified Sellers', count: '35+' },
    { id: 'new', name: 'New Sellers', count: '15+' },
    { id: 'featured', name: 'Featured', count: '20+' }
  ];

  const sellers = [
    {
      id: 1,
      name: "Green Fashion Co.",
      description: "Sustainable fashion from recycled materials",
      rating: 4.8,
      products: 68,
      followers: "3.2K",
      image: "https://images.unsplash.com/photo-1520975682031-c43e7b43f5f4?w=400&h=300&fit=crop",
      verified: true,
      featured: true
    },
    {
      id: 2,
      name: "Upcycle Denim Studio",
      description: "Premium jackets and bags from recycled denim",
      rating: 4.6,
      products: 42,
      followers: "2.1K",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=300&fit=crop",
      verified: true,
      featured: false
    },
    {
      id: 3,
      name: "Rewoven",
      description: "Knitwear and scarves from reclaimed fabrics",
      rating: 4.9,
      products: 35,
      followers: "2.7K",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=400&h=300&fit=crop",
      verified: true,
      featured: true
    },
    {
      id: 4,
      name: "Bottle2Thread",
      description: "Activewear made from recycled bottles",
      rating: 4.5,
      products: 29,
      followers: "1.9K",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      verified: true,
      featured: false
    },
    {
      id: 5,
      name: "ReLeather",
      description: "Belts and accessories from reclaimed leather",
      rating: 4.7,
      products: 38,
      followers: "2.4K",
      image: "https://images.unsplash.com/photo-1618354691505-8b6d74a585dd?w=400&h=300&fit=crop",
      verified: true,
      featured: false
    },
    {
      id: 6,
      name: "Circular Kids",
      description: "Kidswear from upcycled materials",
      rating: 4.6,
      products: 26,
      followers: "1.6K",
      image: "https://images.unsplash.com/photo-1520975682031-100c4d4f7b9a?w=400&h=300&fit=crop",
      verified: false,
      featured: true
    }
  ];

  const filteredSellers = sellers.filter(seller => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'verified') return seller.verified;
    if (selectedFilter === 'new') return !seller.verified;
    if (selectedFilter === 'featured') return seller.featured;
    return true;
  });

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
            className="text-center space-y-4"
          >
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl font-bold">
              Recycled Clothing Marketplace
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with verified fashion sellers offering apparel made from recycled and upcycled materials
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Active Sellers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2.5K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.8</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "gradient" : "outline"}
                onClick={() => setSelectedFilter(filter.id)}
                className="flex items-center space-x-2"
              >
                <span>{filter.name}</span>
                <span className="text-xs opacity-75">({filter.count})</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Sellers Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSellers.map((seller) => (
              <motion.div key={seller.id} variants={itemVariants}>
                <Card hover className="group overflow-hidden">
                  <div className="relative">
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src={seller.image}
                        alt={seller.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      {seller.verified && (
                        <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                          <Icon name="check" size={12} />
                          <span>Verified</span>
                        </div>
                      )}
                      {seller.featured && (
                        <div className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                          <Icon name="star" size={12} />
                          <span>Featured</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                          {seller.name}
                        </h3>
                        <p className="text-muted-foreground mt-1">
                          {seller.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Icon
                              key={i}
                              name="star"
                              size={16}
                              className={`${
                                i < Math.floor(seller.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground ml-2">
                          {seller.rating}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Products:</span>
                          <span className="font-medium ml-1">{seller.products}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Followers:</span>
                          <span className="font-medium ml-1">{seller.followers}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" className="flex-1">
                          <Icon name="heart" size={16} className="mr-2" />
                          Follow
                        </Button>
                        <Button variant="gradient" className="flex-1">
                          <Icon name="externalLink" size={16} className="mr-2" />
                          Visit Store
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Become a Seller CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-primary-light/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold">
              Want to Sell Your Recycled Products?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our marketplace and start selling your eco-friendly products to customers who care about sustainability.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button size="lg" variant="gradient" className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Become a Seller
                <Icon name="arrowRight" size={20} className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
