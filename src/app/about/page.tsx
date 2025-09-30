'use client';

import React from 'react';
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

export default function AboutPage() {
  const stats = [
    { number: "5K+", label: "Products Sold", icon: "package" },
    { number: "2K+", label: "Happy Customers", icon: "users" },
    { number: "50+", label: "Verified Sellers", icon: "shield" },
    { number: "98%", label: "Customer Satisfaction", icon: "star" }
  ];

  const values = [
    {
      icon: "recycle",
      title: "Sustainability First",
      description: "Every product we offer is made from recycled materials, helping reduce waste and environmental impact."
    },
    {
      icon: "shield",
      title: "Quality Assurance",
      description: "We carefully vet all sellers and products to ensure they meet our high standards for quality and sustainability."
    },
    {
      icon: "users",
      title: "Community Driven",
      description: "We believe in building a community of environmentally conscious consumers and sellers."
    },
    {
      icon: "globe",
      title: "Global Impact",
      description: "Our mission is to make sustainable living accessible to everyone, everywhere."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
      description: "Environmental activist with 10+ years in sustainable business"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      description: "Tech innovator passionate about green technology solutions"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      description: "Operations expert focused on sustainable supply chains"
    },
    {
      name: "David Kim",
      role: "Head of Marketing",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      description: "Marketing strategist with expertise in eco-friendly brands"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary-light/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-6"
          >
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              About Green Loop
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to make sustainable living accessible to everyone by connecting eco-conscious consumers with verified sellers of recycled products.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={stat.icon} size={32} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Green Loop was founded in 2020 with a simple yet powerful vision: to create a world where sustainable living is not just a choice, but an accessible reality for everyone.
                </p>
                <p>
                  What started as a small marketplace for recycled products has grown into a thriving community of environmentally conscious consumers and sellers. We believe that every purchase can be a vote for a better planet.
                </p>
                <p>
                  Today, we're proud to connect thousands of customers with verified sellers who share our commitment to sustainability and quality.
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop"
                  alt="Our team working on sustainability"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-lg"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do at Green Loop
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card hover className="h-full text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name={value.icon} size={32} className="text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The passionate people behind Green Loop's mission
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card hover className="text-center">
                    <CardContent className="p-6">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-2">{member.role}</p>
                      <p className="text-muted-foreground text-sm">{member.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold">
              Join Our Mission
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're a consumer looking for sustainable products or a seller with eco-friendly goods, we'd love to have you join our community.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="gradient" asChild>
                <Link href="/shop">
                  Start Shopping
                  <Icon name="arrowRight" size={20} className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/marketplace">
                  Become a Seller
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
