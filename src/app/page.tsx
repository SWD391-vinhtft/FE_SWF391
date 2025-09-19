'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Recycle, 
  Leaf, 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  Heart,
  ArrowRight,
  Star,
  Shield,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

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
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <Recycle className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Green Loop</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button asChild variant="outline" size="sm">
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button asChild variant="gradient" size="sm">
                <Link href="/auth/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-light/10" />
        
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
                  <Leaf className="mr-1 h-4 w-4" />
                  Sustainable Fashion Platform
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Circular Fashion for a{' '}
                  <span className="text-primary">Greener Future</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Join the sustainable fashion revolution. Buy, sell, and rent pre-loved clothing 
                  while reducing waste and building a circular economy.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="gradient" asChild>
                  <Link href="/auth/register">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="xl" variant="outline" asChild>
                  <Link href="/marketplace">
                    Explore Marketplace
                  </Link>
                </Button>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Items Listed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5K+</div>
                  <div className="text-sm text-muted-foreground">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
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
                        <ShoppingBag className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Marketplace</h3>
                        <p className="text-sm text-muted-foreground">Buy & sell sustainable fashion</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card hover>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium">Loved Items</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card hover>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium">Impact Score</div>
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
              Why Choose Green Loop?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're revolutionizing fashion with innovative features that make sustainable shopping easy and rewarding.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Recycle,
                title: "Circular Economy",
                description: "Extend the lifecycle of clothing through buying, selling, and renting pre-loved items."
              },
              {
                icon: Leaf,
                title: "Sustainability Tracking",
                description: "Monitor your environmental impact with detailed sustainability metrics and scoring."
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Every item is verified for quality and authenticity before listing on our platform."
              },
              {
                icon: Users,
                title: "Community Driven",
                description: "Connect with like-minded individuals who share your passion for sustainable fashion."
              },
              {
                icon: Zap,
                title: "Smart Matching",
                description: "AI-powered recommendations help you discover items that match your style and values."
              },
              {
                icon: Star,
                title: "Reward System",
                description: "Earn sustainability points and rewards for your eco-friendly fashion choices."
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card hover className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
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

      {/* CTA Section */}
      <section className="py-20">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-90" />
            <CardContent className="relative z-10 p-12 text-center text-white">
              <motion.div variants={itemVariants} className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Ready to Make a Difference?
                </h2>
                <p className="text-xl max-w-2xl mx-auto opacity-90">
                  Join thousands of users who are already making fashion more sustainable. 
                  Start your circular fashion journey today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="xl" variant="secondary" asChild>
                    <Link href="/auth/register">
                      Create Account
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                    <Link href="/marketplace">
                      Browse Marketplace
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                  <Recycle className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Green Loop</span>
              </div>
              <p className="text-muted-foreground">
                Making fashion circular, one item at a time.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/marketplace" className="hover:text-primary transition-colors">Marketplace</Link></li>
                <li><Link href="/auth/register" className="hover:text-primary transition-colors">Join</Link></li>
                <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How it Works</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Green Loop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
