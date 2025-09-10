'use client';

import { useState } from 'react';
import { Users, ArrowRight, Star, TrendingUp } from 'lucide-react';

export function WelcomeScreen() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
      </div>

      <div className="glass-card p-8 max-w-md w-full text-center relative z-10 animate-fade-in">
        {/* Logo and Title */}
        <div className="mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold gradient-text mb-2">
            SkillSwap Connect
          </h1>
          <p className="text-white/80 text-lg">
            Exchange skills, grow together, instantly.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3 text-white/90">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <span className="text-sm">Smart skill matching</span>
          </div>
          <div className="flex items-center space-x-3 text-white/90">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Star className="w-4 h-4" />
            </div>
            <span className="text-sm">Reputation & trust system</span>
          </div>
          <div className="flex items-center space-x-3 text-white/90">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
            <span className="text-sm">Progress tracking</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="btn-primary w-full flex items-center justify-center space-x-2 text-lg py-3"
        >
          <span>Get Started</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        <p className="text-white/60 text-xs mt-4">
          Connect your skills with others in the community
        </p>
      </div>
    </div>
  );
}
