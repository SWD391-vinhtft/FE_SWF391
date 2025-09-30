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

export default function OrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const orders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: '2.249.000₫',
      items: [
        {
          id: 1,
          name: 'Recycled Glass Vase Set',
          price: '699.000₫',
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop'
        },
        {
          id: 2,
          name: 'Eco-Friendly Tote Bag',
          price: '399.000₫',
          quantity: 2,
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop'
        },
        {
          id: 3,
          name: 'Bamboo Kitchen Utensils',
          price: '479.000₫',
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop'
        }
      ],
      shippingAddress: '123 Green Street, Eco City, EC 12345',
      trackingNumber: 'TRK123456789',
      estimatedDelivery: '2024-01-20'
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'Shipped',
      total: '1.139.000₫',
      items: [
        {
          id: 4,
          name: 'Solar Garden Lights',
          price: '599.000₫',
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=100&h=100&fit=crop'
        },
        {
          id: 5,
          name: 'Recycled Paper Notebook',
          price: '229.000₫',
          quantity: 2,
          image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=100&h=100&fit=crop'
        }
      ],
      shippingAddress: '123 Green Street, Eco City, EC 12345',
      trackingNumber: 'TRK987654321',
      estimatedDelivery: '2024-01-18'
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      status: 'Processing',
      total: '1.681.000₫',
      items: [
        {
          id: 6,
          name: 'Yoga Mat (Recycled)',
          price: '879.000₫',
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=100&h=100&fit=crop'
        },
        {
          id: 7,
          name: 'Art Supplies Kit',
          price: '579.000₫',
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=100&h=100&fit=crop'
        }
      ],
      shippingAddress: '123 Green Street, Eco City, EC 12345',
      trackingNumber: null,
      estimatedDelivery: '2024-01-22'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'checkCircle';
      case 'Shipped':
        return 'truck';
      case 'Processing':
        return 'clock';
      default:
        return 'package';
    }
  };

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
              My Orders
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track your orders and view order history
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {orders.map((order) => (
            <motion.div key={order.id} variants={itemVariants}>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <span>Order {order.id}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </CardTitle>
                      <CardDescription>
                        Placed on {order.date} • Total: {order.total}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                      >
                        {selectedOrder === order.id ? 'Hide Details' : 'View Details'}
                      </Button>
                      {order.trackingNumber && (
                        <Button variant="gradient" size="sm">
                          Track Package
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {/* Order Items */}
                    <div className="space-y-3">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 p-3 border border-border rounded-lg">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">{item.price}</p>
                            <p className="text-sm text-muted-foreground">
                              {(parseFloat(item.price.replace(/[^\d]/g, '')) * item.quantity).toLocaleString()}₫
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Order Details */}
                    {selectedOrder === order.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t pt-4 space-y-4"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center space-x-2">
                              <Icon name="mapPin" size={16} />
                              <span>Shipping Address</span>
                            </h4>
                            <p className="text-sm text-muted-foreground">{order.shippingAddress}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center space-x-2">
                              <Icon name="clock" size={16} />
                              <span>Estimated Delivery</span>
                            </h4>
                            <p className="text-sm text-muted-foreground">{order.estimatedDelivery}</p>
                          </div>
                        </div>

                        {order.trackingNumber && (
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center space-x-2">
                              <Icon name="truck" size={16} />
                              <span>Tracking Information</span>
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Tracking Number: {order.trackingNumber}
                            </p>
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="flex items-center space-x-4">
                            <Button variant="outline" size="sm">
                              <Icon name="refresh" size={16} className="mr-2" />
                              Reorder
                            </Button>
                            <Button variant="outline" size="sm">
                              <Icon name="heart" size={16} className="mr-2" />
                              Add to Wishlist
                            </Button>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Order Total</p>
                            <p className="text-lg font-bold text-primary">{order.total}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {orders.length === 0 && (
          <motion.div variants={itemVariants} className="text-center py-12">
            <Icon name="package" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-bold mb-2">No orders yet</h3>
            <p className="text-muted-foreground mb-4">
              Start shopping to see your orders here.
            </p>
            <Button variant="gradient" asChild>
              <Link href="/shop">
                Start Shopping
                <Icon name="arrowRight" size={20} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
}
