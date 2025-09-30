'use client';

import React, { useMemo } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

export default function AdminAnalyticsPage() {
  const salesData = [120, 180, 160, 230, 210, 260];
  const usersData = [40, 55, 48, 70, 66, 90];
  const labels = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

  const salesPath = useMemo(() => {
    const width = 600;
    const height = 220;
    const max = Math.max(...salesData) * 1.1;
    const stepX = width / (salesData.length - 1);
    const points = salesData.map((v, i) => {
      const x = i * stepX;
      const y = height - (v / max) * height;
      return `${x},${y}`;
    });
    const line = `M ${points.join(' L ')}`;
    const area = `${line} L ${width},${height} L 0,${height} Z`;
    return { line, area, width, height, max };
  }, [salesData]);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">Key metrics and performance</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Sales</CardTitle>
              <CardDescription>Last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 rounded-lg bg-muted/20 p-4">
                <svg viewBox={`0 0 ${salesPath.width} ${salesPath.height + 20}`} className="w-full h-full">
                  <defs>
                    <linearGradient id="salesGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="rgb(var(--primary))" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="rgb(var(--primary))" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={salesPath.area} fill="url(#salesGradient)" />
                  <path d={salesPath.line} fill="none" stroke="currentColor" className="text-primary" strokeWidth="3" />
                  {labels.map((l, i) => (
                    <text key={l} x={(i * salesPath.width) / (labels.length - 1)} y={salesPath.height + 16} textAnchor="middle" className="fill-muted-foreground text-[10px]">
                      {l}
                    </text>
                  ))}
                </svg>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
              <CardDescription>Growth and engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 rounded-lg bg-muted/20 p-4">
                <svg viewBox="0 0 600 240" className="w-full h-full">
                  {usersData.map((v, i) => {
                    const max = Math.max(...usersData) * 1.2;
                    const barWidth = 600 / (usersData.length * 1.6);
                    const gap = barWidth * 0.6;
                    const x = i * (barWidth + gap) + 40;
                    const height = (v / max) * 180;
                    const y = 200 - height;
                    return (
                      <g key={i}>
                        <rect x={x} y={y} width={barWidth} height={height} rx="4" className="fill-primary/70" />
                        <text x={x + barWidth / 2} y={220} textAnchor="middle" className="fill-muted-foreground text-[10px]">{labels[i]}</text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}


