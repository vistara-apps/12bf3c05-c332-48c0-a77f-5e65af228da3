'use client';

import { Edit, Star, TrendingUp, Award, Calendar } from 'lucide-react';
import { User } from '../lib/types';
import { getReputationLevel } from '../lib/utils';

interface UserProfileProps {
  user: User;
  onEditSkills: () => void;
}

export function UserProfile({ user, onEditSkills }: UserProfileProps) {
  const reputationLevel = getReputationLevel(user.reputationScore);

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="glass-card p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <span className="text-3xl">{user.avatar}</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">{user.displayName}</h1>
              <p className="text-white/60 mb-2">@{user.telegramUsername}</p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white">{user.reputationScore}</span>
                  <span className="text-white/60">({reputationLevel})</span>
                </div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-white">{user.pastExchanges} exchanges</span>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={onEditSkills}
            className="btn-secondary flex items-center space-x-2"
          >
            <Edit className="w-4 h-4" />
            <span>Edit Profile</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-lg p-4 text-center">
            <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{user.reputationScore}</p>
            <p className="text-white/60 text-sm">Reputation Score</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4 text-center">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{user.pastExchanges}</p>
            <p className="text-white/60 text-sm">Completed Exchanges</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4 text-center">
            <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">3</p>
            <p className="text-white/60 text-sm">Active Exchanges</p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skills Offered */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white">Skills I Offer</h2>
            <button
              onClick={onEditSkills}
              className="text-purple-400 hover:text-purple-300 text-sm"
            >
              Edit
            </button>
          </div>
          <div className="space-y-2">
            {user.skillsOffered.map(skill => (
              <div
                key={skill}
                className="flex items-center justify-between bg-white/5 rounded-lg p-3"
              >
                <span className="text-white">{skill}</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white/80 text-sm">4.8</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Wanted */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white">Skills I Want to Learn</h2>
            <button
              onClick={onEditSkills}
              className="text-purple-400 hover:text-purple-300 text-sm"
            >
              Edit
            </button>
          </div>
          <div className="space-y-2">
            {user.skillsWanted.map(skill => (
              <div
                key={skill}
                className="flex items-center justify-between bg-white/5 rounded-lg p-3"
              >
                <span className="text-white">{skill}</span>
                <span className="text-white/60 text-sm">Learning</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="glass-card p-6">
        <h2 className="text-lg font-bold text-white mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-white text-sm">Completed exchange with Bob Smith</span>
            <span className="text-white/60 text-xs ml-auto">2 days ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-white text-sm">Started learning UI/UX Design</span>
            <span className="text-white/60 text-xs ml-auto">5 days ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-white text-sm">Received 5-star review</span>
            <span className="text-white/60 text-xs ml-auto">1 week ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
