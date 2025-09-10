'use client';

import { User, Search, Bell, Menu } from 'lucide-react';
import { User as UserType } from '../lib/types';

interface HeaderProps {
  currentUser: UserType;
  activeTab: 'dashboard' | 'matching' | 'profile';
  onTabChange: (tab: 'dashboard' | 'matching' | 'profile') => void;
}

export function Header({ currentUser, activeTab, onTabChange }: HeaderProps) {
  return (
    <header className="glass-card m-4 p-4">
      <div className="flex items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-white font-bold text-lg">SkillSwap</span>
          </div>

          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => onTabChange('dashboard')}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeTab === 'dashboard' 
                  ? 'text-white' 
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => onTabChange('matching')}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeTab === 'matching' 
                  ? 'text-white' 
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              Find Matches
            </button>
            <button
              onClick={() => onTabChange('profile')}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeTab === 'profile' 
                  ? 'text-white' 
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              Profile
            </button>
          </nav>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
            <Search className="w-5 h-5 text-white/80" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 relative">
            <Bell className="w-5 h-5 text-white/80" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full"></div>
          </button>
          
          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right hidden sm:block">
              <p className="text-white text-sm font-medium">{currentUser.displayName}</p>
              <p className="text-white/60 text-xs">@{currentUser.telegramUsername}</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <span className="text-lg">{currentUser.avatar}</span>
            </div>
          </div>

          <button className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
            <Menu className="w-5 h-5 text-white/80" />
          </button>
        </div>
      </div>
    </header>
  );
}
