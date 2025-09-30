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

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Clothing', icon: 'shirt', count: '300+' },
    { id: 'tops', name: 'Tops', icon: 'shirt', count: '80+' },
    { id: 'bottoms', name: 'Bottoms', icon: 'briefcase', count: '60+' },
    { id: 'outerwear', name: 'Outerwear', icon: 'shield', count: '50+' },
    { id: 'dresses', name: 'Dresses', icon: 'gem', count: '40+' },
    { id: 'activewear', name: 'Activewear', icon: 'activity', count: '30+' },
    { id: 'footwear', name: 'Footwear', icon: 'shoppingBag', count: '20+' },
    { id: 'accessories', name: 'Accessories', icon: 'tag', count: '60+' }
  ];

  const products = [
    { id: 1, name: "Recycled Denim Jacket", price: "1.199.000₫", originalPrice: "1.599.000₫", rating: 4.7, image: "https://images.unsplash.com/photo-1520975682031-c43e7b43f5f4?w=400&h=400&fit=crop", category: "outerwear", description: "Classic trucker jacket from recycled denim" },
    { id: 2, name: "Organic Cotton Tee (Recycled)", price: "299.000₫", originalPrice: "399.000₫", rating: 4.6, image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop", category: "tops", description: "Soft tee using recycled fibers" },
    { id: 3, name: "Upcycled Flannel Shirt", price: "549.000₫", originalPrice: "749.000₫", rating: 4.5, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop", category: "tops", description: "Plaid flannel from reclaimed fabrics" },
    { id: 4, name: "Recycled Nylon Shorts", price: "449.000₫", originalPrice: "629.000₫", rating: 4.4, image: "https://images.unsplash.com/photo-1520975682031-100c4d4f7b9a?w=400&h=400&fit=crop", category: "bottoms", description: "Quick-dry shorts from recycled nylon" },
    { id: 5, name: "Upcycled Canvas Sneakers", price: "899.000₫", originalPrice: "1.199.000₫", rating: 4.8, image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop", category: "footwear", description: "Low-top sneakers with recycled canvas" },
    { id: 6, name: "Recycled Cotton Hoodie", price: "699.000₫", originalPrice: "949.000₫", rating: 4.7, image: "https://images.unsplash.com/photo-1520975682031-3b8bdc6a4f37?w=400&h=400&fit=crop", category: "outerwear", description: "Comfy hoodie with recycled cotton blend" },
    { id: 7, name: "Upcycled Leather Belt", price: "499.000₫", originalPrice: "699.000₫", rating: 4.5, image: "https://images.unsplash.com/photo-1618354691505-8b6d74a585dd?w=400&h=400&fit=crop", category: "accessories", description: "Handcrafted belt from reclaimed leather" },
    { id: 8, name: "Recycled Wool Beanie", price: "329.000₫", originalPrice: "479.000₫", rating: 4.3, image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=400&h=400&fit=crop", category: "accessories", description: "Cozy beanie knit from recycled wool" }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

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
              Shop Recycled Clothing
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our collection of apparel made from recycled and upcycled materials
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "gradient" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2"
              >
                <Icon name={category.icon} size={16} />
                <span>{category.name}</span>
                <span className="text-xs opacity-75">({category.count})</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <Card hover className="group overflow-hidden">
                  <div className="relative">
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwQzE3NS4yIDE1MCAxNTUgMTcwLjIgMTU1IDE5NUMxNTUgMjE5LjggMTc1LjIgMjQwIDIwMCAyNDBDMjI0LjggMjQwIDI0NSAyMTkuOCAyNDUgMTk1QzI0NSAxNzAuMiAyMjQuOCAxNTAgMjAwIDE1MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-white/80 hover:bg-white">
                        <Icon name="heart" size={16} />
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center space-x-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Icon
                              key={i}
                              name="star"
                              size={14}
                              className={`${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {product.rating}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-primary">
                            {product.price}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            {product.originalPrice}
                          </span>
                        </div>
                        <Button size="sm" variant="gradient">
                          Add to Cart
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
      
      <Footer />
    </div>
  );
}
