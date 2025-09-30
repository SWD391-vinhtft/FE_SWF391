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

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);

  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Green Street, Eco City, EC 12345',
    bio: 'Passionate about sustainable living and eco-friendly products.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop'
  });

  const orders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: '$89.99',
      items: 3,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop'
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'Shipped',
      total: '$45.50',
      items: 2,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop'
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      status: 'Processing',
      total: '$67.25',
      items: 4,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=100&h=100&fit=crop'
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: 'Recycled Glass Vase Set',
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop',
      addedDate: '2024-01-12'
    },
    {
      id: 2,
      name: 'Eco-Friendly Tote Bag',
      price: '$15.99',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop',
      addedDate: '2024-01-10'
    },
    {
      id: 3,
      name: 'Solar Garden Lights',
      price: '$24.99',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&h=200&fit=crop',
      addedDate: '2024-01-08'
    }
  ];

  const tabs = [
    { id: 'profile', name: 'Profile', icon: 'user' },
    { id: 'orders', name: 'Orders', icon: 'package' },
    { id: 'wishlist', name: 'Wishlist', icon: 'heart' },
    { id: 'settings', name: 'Settings', icon: 'settings' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log('Profile saved:', profileData);
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
              My Profile
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Manage your account settings and preferences
            </motion.p>
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
            >
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                      <img
                        src={profileData.avatar}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">{profileData.firstName} {profileData.lastName}</h3>
                    <p className="text-sm text-muted-foreground">{profileData.email}</p>
                  </div>

                  <div className="space-y-2">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                          activeTab === tab.id
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Icon name={tab.icon} size={16} />
                        <span className="text-sm">{tab.name}</span>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Personal Information</CardTitle>
                          <CardDescription>
                            Update your personal details and preferences
                          </CardDescription>
                        </div>
                        <Button
                          variant={isEditing ? "gradient" : "outline"}
                          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                        >
                          {isEditing ? 'Save Changes' : 'Edit Profile'}
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">First Name</label>
                          <input
                            type="text"
                            value={profileData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            disabled={!isEditing}
                            className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors disabled:opacity-50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Last Name</label>
                          <input
                            type="text"
                            value={profileData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            disabled={!isEditing}
                            className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors disabled:opacity-50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          value={profileData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          disabled={!isEditing}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors disabled:opacity-50"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <input
                          type="tel"
                          value={profileData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          disabled={!isEditing}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors disabled:opacity-50"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Address</label>
                        <textarea
                          value={profileData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          disabled={!isEditing}
                          rows={3}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors disabled:opacity-50 resize-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Bio</label>
                        <textarea
                          value={profileData.bio}
                          onChange={(e) => handleInputChange('bio', e.target.value)}
                          disabled={!isEditing}
                          rows={4}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors disabled:opacity-50 resize-none"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Order History</CardTitle>
                      <CardDescription>
                        Track your orders and view order details
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {orders.map((order) => (
                          <div key={order.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex items-center space-x-4">
                              <img
                                src={order.image}
                                alt="Order"
                                className="w-16 h-16 rounded-lg object-cover"
                              />
                              <div>
                                <h4 className="font-semibold">{order.id}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {order.items} item{order.items !== 1 ? 's' : ''} • {order.date}
                                </p>
                                <p className="text-sm font-medium text-primary">{order.total}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {order.status}
                              </span>
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Wishlist Tab */}
              {activeTab === 'wishlist' && (
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Wishlist</CardTitle>
                      <CardDescription>
                        Your saved items and favorites
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {wishlistItems.map((item) => (
                          <div key={item.id} className="group">
                            <Card hover className="overflow-hidden">
                              <div className="relative">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-2 right-2">
                                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-white/80 hover:bg-white">
                                    <Icon name="heart" size={16} className="text-red-500 fill-current" />
                                  </Button>
                                </div>
                              </div>
                              <CardContent className="p-4">
                                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                                  {item.name}
                                </h4>
                                <p className="text-lg font-bold text-primary mb-2">{item.price}</p>
                                <p className="text-xs text-muted-foreground mb-3">
                                  Added on {item.addedDate}
                                </p>
                                <div className="flex space-x-2">
                                  <Button size="sm" variant="gradient" className="flex-1">
                                    Add to Cart
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    <Icon name="externalLink" size={16} />
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <motion.div variants={itemVariants}>
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Account Settings</CardTitle>
                        <CardDescription>
                          Manage your account preferences and security
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold">Email Notifications</h4>
                            <p className="text-sm text-muted-foreground">Receive updates about your orders and promotions</p>
                          </div>
                          <Button variant="outline" size="sm">Enable</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold">SMS Notifications</h4>
                            <p className="text-sm text-muted-foreground">Get text messages about order updates</p>
                          </div>
                          <Button variant="outline" size="sm">Disable</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold">Two-Factor Authentication</h4>
                            <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                          </div>
                          <Button variant="outline" size="sm">Setup</Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Privacy Settings</CardTitle>
                        <CardDescription>
                          Control your privacy and data sharing preferences
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold">Profile Visibility</h4>
                            <p className="text-sm text-muted-foreground">Make your profile visible to other users</p>
                          </div>
                          <Button variant="outline" size="sm">Public</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold">Data Sharing</h4>
                            <p className="text-sm text-muted-foreground">Allow sharing of anonymized data for research</p>
                          </div>
                          <Button variant="outline" size="sm">Allow</Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Danger Zone</CardTitle>
                        <CardDescription>
                          Irreversible and destructive actions
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-red-600">Delete Account</h4>
                            <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                          </div>
                          <Button variant="outline" size="sm" className="border-red-500 text-red-500 hover:bg-red-50">
                            Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
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
