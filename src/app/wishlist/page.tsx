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

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Recycled Glass Vase Set',
      price: '699.000₫',
      originalPrice: '999.000₫',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
      addedDate: '2024-01-12',
      category: 'Home Decor',
      inStock: true
    },
    {
      id: 2,
      name: 'Eco-Friendly Tote Bag',
      price: '399.000₫',
      originalPrice: '599.000₫',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
      addedDate: '2024-01-10',
      category: 'Fashion',
      inStock: true
    },
    {
      id: 3,
      name: 'Solar Garden Lights',
      price: '599.000₫',
      originalPrice: '879.000₫',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop',
      addedDate: '2024-01-08',
      category: 'Garden',
      inStock: false
    },
    {
      id: 4,
      name: 'Bamboo Kitchen Utensils',
      price: '479.000₫',
      originalPrice: '699.000₫',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
      addedDate: '2024-01-05',
      category: 'Kitchen',
      inStock: true
    },
    {
      id: 5,
      name: 'Recycled Paper Notebook',
      price: '229.000₫',
      originalPrice: '379.000₫',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop',
      addedDate: '2024-01-03',
      category: 'Office',
      inStock: true
    },
    {
      id: 6,
      name: 'Yoga Mat (Recycled)',
      price: '879.000₫',
      originalPrice: '1.249.000₫',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop',
      addedDate: '2024-01-01',
      category: 'Sports',
      inStock: true
    }
  ]);

  const [sortBy, setSortBy] = useState('date');
  const [filterBy, setFilterBy] = useState('all');

  const removeFromWishlist = (id: number) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  const addToCart = (id: number) => {
    // Here you would typically add to cart
    console.log('Added to cart:', id);
  };

  const sortedAndFilteredItems = wishlistItems
    .filter(item => {
      if (filterBy === 'all') return true;
      if (filterBy === 'inStock') return item.inStock;
      if (filterBy === 'outOfStock') return !item.inStock;
      return item.category.toLowerCase() === filterBy.toLowerCase();
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime();
        case 'price':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const categories = ['all', 'inStock', 'outOfStock', 'Home Decor', 'Fashion', 'Garden', 'Kitchen', 'Office', 'Sports'];

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
              My Wishlist
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Save your favorite items for later
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Sort */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium">Filter by:</span>
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={filterBy === category ? "gradient" : "outline"}
                      size="sm"
                      onClick={() => setFilterBy(category)}
                    >
                      {category === 'all' ? 'All Items' : 
                       category === 'inStock' ? 'In Stock' :
                       category === 'outOfStock' ? 'Out of Stock' : category}
                    </Button>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-1 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    <option value="date">Date Added</option>
                    <option value="price">Price</option>
                    <option value="name">Name</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Wishlist Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sortedAndFilteredItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Card hover className="group overflow-hidden">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 bg-white/80 hover:bg-white"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <Icon name="heart" size={16} className="text-red-500 fill-current" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 bg-white/80 hover:bg-white"
                    >
                      <Icon name="externalLink" size={16} />
                    </Button>
                  </div>
                  {!item.inStock && (
                    <div className="absolute top-2 left-2">
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">
                        {item.category}
                      </span>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
                        {item.name}
                      </h3>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            name="star"
                            size={14}
                            className={`${
                              i < Math.floor(item.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground ml-1">
                        {item.rating}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-primary">
                        {item.price}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        {item.originalPrice}
                      </span>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">
                      Added on {item.addedDate}
                    </p>
                    
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="gradient"
                        className="flex-1"
                        disabled={!item.inStock}
                        onClick={() => addToCart(item.id)}
                      >
                        {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <Icon name="trash" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {wishlistItems.length === 0 && (
          <motion.div variants={itemVariants} className="text-center py-12">
            <Icon name="heart" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-bold mb-2">Your wishlist is empty</h3>
            <p className="text-muted-foreground mb-4">
              Start adding items you love to your wishlist.
            </p>
            <Button variant="gradient" asChild>
              <Link href="/shop">
                Start Shopping
                <Icon name="arrowRight" size={20} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        )}

        {/* Summary */}
        {wishlistItems.length > 0 && (
          <motion.div variants={itemVariants} className="mt-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">Wishlist Summary</h3>
                    <p className="text-muted-foreground">
                      {wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''} in your wishlist
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Total Value</p>
                    <p className="text-2xl font-bold text-primary">
                      {wishlistItems.reduce((sum, item) => sum + parseFloat(item.price.replace(/[^\d]/g, '')), 0).toLocaleString()}₫
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
}
