'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import AdminLayout from '@/components/layout/AdminLayout';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Icon } from '@/lib/icons';

export default function AdminUsersPage() {
  const users = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: i % 5 === 0 ? 'ADMIN' : 'CONSUMER',
    status: i % 3 === 0 ? 'Active' : 'Pending',
  }));

  return (
    <AdminLayout>
      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Users</h1>
            <p className="text-muted-foreground">Manage platform users and roles</p>
          </div>
          <Button variant="gradient">Add User</Button>
        </motion.div>

        <Card>
          <CardHeader>
            <CardTitle>User Directory</CardTitle>
            <CardDescription>Search, filter, and manage users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Input placeholder="Search users..." className="sm:max-w-xs" />
              <Button variant="outline" className="sm:w-40">Filter</Button>
              <Button variant="outline" className="sm:w-40">Export</Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2 pr-4">Name</th>
                    <th className="py-2 pr-4">Email</th>
                    <th className="py-2 pr-4">Role</th>
                    <th className="py-2 pr-4">Status</th>
                    <th className="py-2 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id} className="border-b last:border-0">
                      <td className="py-3 pr-4 font-medium">{u.name}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{u.email}</td>
                      <td className="py-3 pr-4">
                        <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">{u.role}</span>
                      </td>
                      <td className="py-3 pr-4">
                        <span className="px-2 py-1 rounded-full text-xs bg-green-500/10 text-green-600">{u.status}</span>
                      </td>
                      <td className="py-3 text-right">
                        <div className="inline-flex gap-2">
                          <Button size="sm" variant="outline"><Icon name="edit" size={14} /></Button>
                          <Button size="sm" variant="outline"><Icon name="trash" size={14} /></Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}


