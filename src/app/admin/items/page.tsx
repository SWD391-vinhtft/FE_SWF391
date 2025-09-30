'use client';

import React from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Icon } from '@/lib/icons';

export default function AdminItemsPage() {
  const items = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    category: ['tops', 'bottoms', 'outerwear'][i % 3],
    price: `${299000 + i * 20000}₫`,
    stock: 10 + i,
  }));

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Items</h1>
            <p className="text-muted-foreground">Review and manage listed products</p>
          </div>
          <Button variant="gradient">Add Item</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Inventory</CardTitle>
            <CardDescription>Moderate, update or remove items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Input placeholder="Search items..." className="sm:max-w-xs" />
              <Button variant="outline" className="sm:w-40">Bulk Actions</Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2 pr-4">Name</th>
                    <th className="py-2 pr-4">Category</th>
                    <th className="py-2 pr-4">Price</th>
                    <th className="py-2 pr-4">Stock</th>
                    <th className="py-2 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((it) => (
                    <tr key={it.id} className="border-b last:border-0">
                      <td className="py-3 pr-4 font-medium">{it.name}</td>
                      <td className="py-3 pr-4">{it.category}</td>
                      <td className="py-3 pr-4">{it.price}</td>
                      <td className="py-3 pr-4">{it.stock}</td>
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


