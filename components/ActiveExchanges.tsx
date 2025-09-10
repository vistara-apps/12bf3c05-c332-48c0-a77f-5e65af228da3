'use client';

import { Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { ProgressTracker } from './ProgressTracker';

export function ActiveExchanges() {
  const exchanges = [
    {
      id: '1',
      partner: 'Bob Smith',
      skill: 'UI/UX Design',
      status: 'in-progress',
      currentStep: 2,
      totalSteps: 5,
      avatar: '🎨',
      dueDate: '2024-01-15',
    },
    {
      id: '2',
      partner: 'Carol Davis',
      skill: 'Content Writing',
      status: 'pending',
      currentStep: 1,
      totalSteps: 5,
      avatar: '✍️',
      dueDate: '2024-01-20',
    },
    {
      id: '3',
      partner: 'David Wilson',
      skill: 'Cooking',
      status: 'completed',
      currentStep: 5,
      totalSteps: 5,
      avatar: '👨‍🍳',
      dueDate: '2024-01-10',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-400" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-yellow-400" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400';
      case 'in-progress':
        return 'text-blue-400';
      case 'pending':
        return 'text-yellow-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="glass-card p-6">
      <h2 className="text-xl font-bold text-white mb-6">Active Exchanges</h2>
      
      <div className="space-y-4">
        {exchanges.map(exchange => (
          <div key={exchange.id} className="bg-white/5 border border-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-sm">{exchange.avatar}</span>
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">{exchange.partner}</h3>
                  <p className="text-white/60 text-xs">{exchange.skill}</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {getStatusIcon(exchange.status)}
                <span className={`text-xs capitalize ${getStatusColor(exchange.status)}`}>
                  {exchange.status.replace('-', ' ')}
                </span>
              </div>
            </div>

            <ProgressTracker
              currentStep={exchange.currentStep}
              totalSteps={exchange.totalSteps}
              variant={exchange.status === 'completed' ? 'completed' : 'step1'}
            />

            <div className="flex items-center justify-between mt-3 text-xs text-white/60">
              <span>Due: {exchange.dueDate}</span>
              <button className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 btn-secondary text-sm py-2">
        View All Exchanges
      </button>
    </div>
  );
}
