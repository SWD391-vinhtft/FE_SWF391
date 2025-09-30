'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon, CategoryIcons, FeatureIcons } from '@/lib/icons';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function HomePage() {
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const brands = [
    {
      id: 1,
      name: "UNIQLO",
      logo: "UNIQLO",
      description: "Fashion for everyone",
      image: "https://dongphuchaianh.vn/wp-content/uploads/2022/08/phoi-ao-so-mi-nu-voi-quan-short.jpg",
                  icon: "shirt",
      color: "from-red-500 to-red-600"
    },
    {
      id: 2,
      name: "ELISE",
      logo: "ELISE",
      description: "High-end fashion brand",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
                  icon: "shirtIcon",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      id: 3,
      name: "HNOSS",
      logo: "HNOSS",
      description: "Trendy fashion brand",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
                  icon: "shirt",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 4,
      name: "FOREVER 21",
      logo: "FOREVER 21",
      description: "Youth fashion brand",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop",
                  icon: "shirtIcon",
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 5,
      name: "H&M",
      logo: "H&M",
      description: "Sustainable fashion",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=500&fit=crop",
                  icon: "shirt",
      color: "from-green-500 to-green-600"
    },
    {
      id: 6,
      name: "ZARA",
      logo: "ZARA",
      description: "Fast fashion leader",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=500&fit=crop",
                  icon: "shirt",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const nextBrand = () => {
    setCurrentBrandIndex((prev) => (prev + 1) % brands.length);
  };

  const prevBrand = () => {
    setCurrentBrandIndex((prev) => (prev - 1 + brands.length) % brands.length);
  };

  // Auto-scroll for products
  useEffect(() => {
    if (!isAutoScrolling) return;
    
    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % 5); // 5 positions: 0-4 (12 products, showing 8 at a time)
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-primary-light/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                  <Icon name="shirt" size={16} className="mr-1" />
                  Premium Recycled Clothing
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                  Stylish Clothes,{' '}
                  <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Sustainably Reborn</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Discover beautiful apparel made from recycled and upcycled materials. 
                  From everyday basics to statement pieces, shop fashion that’s kinder to the planet.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="gradient" asChild className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Link href="/auth/register">
                    Start Shopping
                    <Icon name="arrowRight" size={20} className="ml-2" />
                  </Link>
                </Button>
                <Button size="xl" variant="outline" asChild className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2">
                  <Link href="/marketplace">
                    Explore Products
                  </Link>
                </Button>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center space-x-8">
                <motion.div 
                  className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-primary/20"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold text-primary">5K+</div>
                  <div className="text-sm text-muted-foreground">Recycled Products</div>
                </motion.div>
                <motion.div 
                  className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-primary/20"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold text-primary">2K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </motion.div>
                <motion.div 
                  className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-primary/20"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Quality Assured</div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <Card hover className="col-span-2">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon name="package" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Recycled Clothing</h3>
                        <p className="text-sm text-muted-foreground">Upcycled apparel & sustainable fashion</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card hover>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <Icon name="truck" size={32} className="text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium">Fast Delivery</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card hover>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <Icon name="award" size={32} className="text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium">High Quality</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary-light/30 rounded-full"
                animate={{
                  y: [10, -10, 10],
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why Choose Our Recycled Clothing?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We bring you high-quality upcycled garments with a commitment to environmental protection and sustainable development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "recycle",
                title: "Recycled Fabrics",
                description: "Garments crafted from responsibly recycled and upcycled materials."
              },
              {
                icon: "leaf",
                title: "Environmental Protection",
                description: "Every product contributes to waste reduction and protecting our green planet."
              },
              {
                icon: "shield",
                title: "Quality Assurance",
                description: "All garments are thoroughly inspected for fit, comfort, and durability."
              },
              {
                icon: "users",
                title: "Green Community",
                description: "Connect with like-minded people who share environmental consciousness."
              },
              {
                icon: "truck",
                title: "Fast Delivery",
                description: "Quick and convenient home delivery service."
              },
              {
                icon: "tag",
                title: "Affordable Prices",
                description: "High-quality products at reasonable prices for everyone."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card hover className="h-full border-2 border-transparent hover:border-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <CardHeader>
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon name={feature.icon} size={24} className="text-primary" />
                    </motion.div>
                    <CardTitle className="text-xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Products Carousel */}
      <section className="py-20">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center gap-4">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Featured Products
              </h2>
              <Button
                size="sm"
                variant="outline"
                onClick={toggleAutoScroll}
                className="h-8 w-8 p-0"
              >
                {isAutoScrolling ? (
                  <Icon name="pause" size={16} />
                ) : (
                  <Icon name="play" size={16} />
                )}
              </Button>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular recycled products that customers love
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-4"
                animate={{
                  x: `-${currentProductIndex * 12.5}%` // Shift by 12.5% for each product
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                style={{
                  width: `${12 * 12.5}%` // 12 products * 12.5% each = 150%
                }}
              >
                {[
                {
                  id: 1,
                  name: "Recycled Denim Jacket",
                  price: "1.199.000₫",
                  originalPrice: "1.599.000₫",
                  image: "https://images.unsplash.com/photo-1520975682031-c43e7b43f5f4?w=300&h=300&fit=crop",
                  category: "Outerwear",
                  rating: 4.8,
                  reviews: 124,
                  description: "Classic trucker jacket crafted from recycled denim"
                },
                {
                  id: 2,
                  name: "Upcycled Denim Tote Bag",
                  price: "599.000₫",
                  originalPrice: "899.000₫",
                  image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
                  category: "Accessories",
                  rating: 4.9,
                  reviews: 89,
                  description: "Stylish tote bag made from recycled jeans"
                },
                {
                  id: 3,
                  name: "Organic Cotton Tee (Recycled Blend)",
                  price: "299.000₫",
                  originalPrice: "399.000₫",
                  image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=300&h=300&fit=crop",
                  category: "Tops",
                  rating: 4.7,
                  reviews: 156,
                  description: "Soft everyday tee using recycled fibers"
                },
                {
                  id: 4,
                  name: "Upcycled Flannel Shirt",
                  price: "549.000₫",
                  originalPrice: "749.000₫",
                  image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=300&h=300&fit=crop",
                  category: "Shirts",
                  rating: 4.6,
                  reviews: 203,
                  description: "Plaid flannel remade from reclaimed fabrics"
                },
                {
                  id: 5,
                  name: "Recycled Polyester Windbreaker",
                  price: "899.000₫",
                  originalPrice: "1.199.000₫",
                  image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=300&h=300&fit=crop",
                  category: "Outerwear",
                  rating: 4.8,
                  reviews: 67,
                  description: "Lightweight jacket made from recycled bottles"
                },
                {
                  id: 6,
                  name: "Upcycled Fabric Scarf",
                  price: "479.000₫",
                  originalPrice: "679.000₫",
                  image: "https://cdn.kkfashion.vn/25112-large_default/ao-so-mi-nu-tay-ngan-phoi-hai-tui-asm15-14.jpg",
                  category: "Accessories",
                  rating: 4.7,
                  reviews: 142,
                  description: "Soft scarf made from fabric remnants"
                },
                {
                  id: 7,
                  name: "Recycled Wool Beanie",
                  price: "329.000₫",
                  originalPrice: "479.000₫",
                  image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=300&h=300&fit=crop",
                  category: "Accessories",
                  rating: 4.5,
                  reviews: 89,
                  description: "Cozy beanie knit from recycled wool"
                },
                {
                  id: 8,
                  name: "Upcycled Canvas Sneakers",
                  price: "899.000₫",
                  originalPrice: "1.199.000₫",
                  image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=300&fit=crop",
                  category: "Footwear",
                  rating: 4.8,
                  reviews: 156,
                  description: "Low-top sneakers with recycled canvas uppers"
                },
                {
                  id: 9,
                  name: "Recycled Nylon Shorts",
                  price: "449.000₫",
                  originalPrice: "629.000₫",
                  image: "https://images.unsplash.com/photo-1520975682031-100c4d4f7b9a?w=300&h=300&fit=crop",
                  category: "Bottoms",
                  rating: 4.6,
                  reviews: 203,
                  description: "Quick-dry shorts made from recycled nylon"
                },
                {
                  id: 10,
                  name: "Upcycled Canvas Backpack",
                  price: "879.000₫",
                  originalPrice: "1.249.000₫",
                  image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
                  category: "Accessories",
                  rating: 4.9,
                  reviews: 78,
                  description: "Durable backpack made from recycled canvas"
                },
                {
                  id: 11,
                  name: "Recycled Cotton Hoodie",
                  price: "699.000₫",
                  originalPrice: "949.000₫",
                  image: "https://images.unsplash.com/photo-1520975682031-3b8bdc6a4f37?w=300&h=300&fit=crop",
                  category: "Sweatshirts",
                  rating: 4.7,
                  reviews: 134,
                  description: "Comfy hoodie with recycled cotton blend"
                },
                {
                  id: 12,
                  name: "Upcycled Leather Belt",
                  price: "499.000₫",
                  originalPrice: "699.000₫",
                  image: "https://images.unsplash.com/photo-1618354691505-8b6d74a585dd?w=300&h=300&fit=crop",
                  category: "Accessories",
                  rating: 4.4,
                  reviews: 67,
                  description: "Handcrafted belt from reclaimed leather"
                }
                ].map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  className="group flex-shrink-0"
                  style={{ width: '12.5%' }}
                >
                  <Card hover className="h-full overflow-hidden">
                    <div className="relative">
                      <div className="aspect-square relative overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-full h-full bg-gradient-to-br from-primary/10 to-primary-light/10 flex items-center justify-center">
                                  <div class="text-primary text-2xl">📦</div>
                                </div>
                              `;
                            }
                          }}
                        />
                        <div className="absolute top-2 left-2">
                          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <div className="absolute top-2 right-2">
                          <Button size="sm" variant="ghost" className="h-6 w-6 p-0 bg-white/80 hover:bg-white">
                            <Icon name="heart" size={12} />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-1">
                      <div className="space-y-1">
                        <div>
                          <h3 className="font-semibold text-xs group-hover:text-primary transition-colors line-clamp-1">
                            {product.name}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                            {product.description}
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-1">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Icon
                                key={i}
                                name="star"
                                size={8}
                                className={`${
                                  i < Math.floor(product.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {product.rating}
                          </span>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex items-center space-x-1">
                            <span className="text-xs font-bold text-primary">
                              {product.price}
                            </span>
                            <span className="text-xs text-muted-foreground line-through">
                              {product.originalPrice}
                            </span>
                          </div>
                          <Button size="sm" variant="gradient" className="w-full text-xs py-1 h-5">
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
            
            {/* Auto-scroll indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {Array.from({ length: 5 }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentProductIndex === index
                      ? 'bg-primary'
                      : 'bg-muted-foreground/30'
                  }`}
                  onClick={() => {
                    setCurrentProductIndex(index);
                    setIsAutoScrolling(false);
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-muted/30">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Shop by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find exactly what you're looking for in our organized product categories
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                name: "Tops", 
                icon: "shirt", 
                count: "120+", 
                color: "from-blue-500 to-blue-600",
                image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=300&fit=crop"
              },
              { 
                name: "Bottoms", 
                icon: "briefcase", 
                count: "90+", 
                color: "from-pink-500 to-pink-600",
                image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=400&h=300&fit=crop"
              },
              { 
                name: "Outerwear", 
                icon: "shield", 
                count: "80+", 
                color: "from-green-500 to-green-600",
                image: "https://images.unsplash.com/photo-1520975682031-c43e7b43f5f4?w=400&h=300&fit=crop"
              },
              { 
                name: "Dresses", 
                icon: "gem", 
                count: "70+", 
                color: "from-purple-500 to-purple-600",
                image: "https://images.unsplash.com/photo-1520975682031-3b8bdc6a4f37?w=400&h=300&fit=crop"
              },
              { 
                name: "Activewear", 
                icon: "activity", 
                count: "60+", 
                color: "from-orange-500 to-orange-600",
                image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=400&h=300&fit=crop"
              },
              { 
                name: "Accessories", 
                icon: "tag", 
                count: "140+", 
                color: "from-gray-500 to-gray-600",
                image: "https://images.unsplash.com/photo-1618354691505-8b6d74a585dd?w=400&h=300&fit=crop"
              },
              { 
                name: "Footwear", 
                icon: "shoppingBag", 
                count: "50+", 
                color: "from-red-500 to-red-600",
                image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop"
              },
              { 
                name: "Kids", 
                icon: "users", 
                count: "40+", 
                color: "from-yellow-500 to-yellow-600",
                image: "https://images.unsplash.com/photo-1520975682031-100c4d4f7b9a?w=400&h=300&fit=crop"
              }
            ].map((category, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Card hover className="text-center group cursor-pointer border-2 border-transparent hover:border-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
                  <div className="relative">
                    <div 
                      className="h-32 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${category.image})` }}
                    >
                      <div className="absolute inset-0 bg-black/40"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                          className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon name={category.icon} size={32} className="text-white" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.count} products
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Your Favorite Brands */}
      <section className="py-20">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Your Favorite{' '}
              <span className="text-primary">Brands</span>
            </h2>
            
            {/* Feature Icons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="refresh" size={20} className="text-primary" />
                </div>
                <span className="text-sm font-medium">Updated daily</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="gem" size={20} className="text-primary" />
                </div>
                <span className="text-sm font-medium">Hundreds of brands</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="tag" size={20} className="text-primary" />
                </div>
                <span className="text-sm font-medium">Attractive prices</span>
              </div>
            </div>
          </motion.div>

          {/* Brand Carousel */}
          <motion.div variants={itemVariants} className="relative">
            <div className="flex items-center justify-center space-x-4">
              {/* Previous Button */}
              <Button
                size="sm"
                variant="outline"
                className="h-12 w-12 rounded-full p-0"
                onClick={prevBrand}
              >
                <Icon name="chevronLeft" size={24} />
              </Button>

              {/* Brand Cards Container */}
              <div className="flex-1 max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {brands.slice(currentBrandIndex, currentBrandIndex + 4).map((brand, index) => (
                    <motion.div
                      key={brand.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <Card hover className="h-full overflow-hidden">
                        <div className="relative">
                          <div className="aspect-square relative overflow-hidden">
                            <img 
                              src={brand.image} 
                              alt={brand.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                // Fallback to icon if image fails to load
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `
                                    <div class="w-full h-full bg-gradient-to-br ${brand.color} flex items-center justify-center">
                                      <div class="text-white">
                                        <svg class="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                        </svg>
                                        <p class="text-sm font-medium">${brand.name}</p>
                                      </div>
                                    </div>
                                  `;
                                }
                              }}
                            />
                            <div className="absolute inset-0 bg-black/30"></div>
                            <div className="absolute top-4 right-4">
                              <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                                <Icon name={brand.icon} size={16} className="text-gray-800" />
                              </div>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                                <h3 className="font-bold text-lg text-center text-gray-800">
                                  {brand.logo}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <CardContent className="p-6 text-center">
                          <div className="space-y-2">
                            <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                              {brand.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {brand.description}
                            </p>
                            <Button size="sm" variant="outline" className="mt-3">
                              Shop Now
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <Button
                size="sm"
                variant="outline"
                className="h-12 w-12 rounded-full p-0"
                onClick={nextBrand}
              >
                <Icon name="chevronRight" size={24} />
              </Button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: Math.ceil(brands.length / 4) }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    Math.floor(currentBrandIndex / 4) === index
                      ? 'bg-primary'
                      : 'bg-muted-foreground/30'
                  }`}
                  onClick={() => setCurrentBrandIndex(index * 4)}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden border-0 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary opacity-95" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
            <CardContent className="relative z-10 p-12 text-center text-white">
              <motion.div variants={itemVariants} className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Ready to Protect the Environment?
                </h2>
                <p className="text-xl max-w-2xl mx-auto opacity-90">
                  Join thousands of customers who are contributing to environmental protection. 
                  Start your green shopping journey today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="xl" variant="secondary" asChild className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/90 hover:bg-white text-primary">
                    <Link href="/auth/register">
                      Create Account
                      <Icon name="arrowRight" size={20} className="ml-2" />
                    </Link>
                  </Button>
                  <Button size="xl" variant="outline" className="border-2 border-white/50 text-white hover:bg-white hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                    <Link href="/marketplace">
                      View Products
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
