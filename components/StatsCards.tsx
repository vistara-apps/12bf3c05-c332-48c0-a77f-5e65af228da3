'use client';

import { TrendingUp, Users, Star, Activity } from 'lucide-react';

export function StatsCards() {
  const stats = [
    {
      title: 'Active Users',
      value: '2,847',
      change: '+12%',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Successful Exchanges',
      value: '1,234',
      change: '+8%',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Average Rating',
      value: '4.8',
      change: '+0.2',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Skills Available',
      value: '156',
      change: '+5',
      icon: Activity,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="glass-card p-6 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-green-400 text-sm font-medium">{stat.change}</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
          <p className="text-white/60 text-sm">{stat.title}</p>
        </div>
      ))}
    </div>
  );
}
