'use client';

import React from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/lib/icons';

export default function AdminListingsPage() {
  const listings = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: `Listing ${i + 1}`,
    seller: `Seller ${i + 1}`,
    status: i % 2 === 0 ? 'Approved' : 'Pending',
  }));

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Listings</h1>
            <p className="text-muted-foreground">Moderate and manage marketplace listings</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Moderation Queue</CardTitle>
            <CardDescription>Approve or reject submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {listings.map((l) => (
                <div key={l.id} className="flex items-center justify-between border rounded-md p-3">
                  <div>
                    <div className="font-medium">{l.title}</div>
                    <div className="text-xs text-muted-foreground">by {l.seller}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">{l.status}</span>
                    <Button size="sm" variant="outline"><Icon name="check" size={14} /></Button>
                    <Button size="sm" variant="outline"><Icon name="x" size={14} /></Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}


