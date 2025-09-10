'use client';

import { Star, MessageCircle, ExternalLink } from 'lucide-react';
import { User } from '../lib/types';
import { getReputationLevel } from '../lib/utils';

interface MatchCardProps {
  user: User;
  onConnect: () => void;
  variant?: 'active' | 'completed';
}

export function MatchCard({ user, onConnect, variant = 'active' }: MatchCardProps) {
  const reputationLevel = getReputationLevel(user.reputationScore);

  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-200 group">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 flex-1">
          {/* Avatar */}
          <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-lg">{user.avatar}</span>
          </div>

          {/* User Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="text-white font-medium truncate">{user.displayName}</h3>
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-white/80 text-xs">{user.reputationScore}</span>
              </div>
            </div>
            <p className="text-white/60 text-sm mb-2">@{user.telegramUsername}</p>
            
            {/* Skills Offered */}
            <div className="mb-2">
              <p className="text-white/80 text-xs mb-1">Offers:</p>
              <div className="flex flex-wrap gap-1">
                {user.skillsOffered.slice(0, 3).map(skill => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
                {user.skillsOffered.length > 3 && (
                  <span className="text-white/60 text-xs">+{user.skillsOffered.length - 3} more</span>
                )}
              </div>
            </div>

            {/* Skills Wanted */}
            <div className="mb-3">
              <p className="text-white/80 text-xs mb-1">Wants:</p>
              <div className="flex flex-wrap gap-1">
                {user.skillsWanted.slice(0, 2).map(skill => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
                {user.skillsWanted.length > 2 && (
                  <span className="text-white/60 text-xs">+{user.skillsWanted.length - 2} more</span>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-4 text-xs text-white/60">
              <span>{user.pastExchanges} exchanges</span>
              <span>{reputationLevel}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col space-y-2 ml-4">
          <button
            onClick={onConnect}
            className="btn-primary text-xs px-3 py-1 flex items-center space-x-1"
          >
            <MessageCircle className="w-3 h-3" />
            <span>Connect</span>
          </button>
          <button className="btn-secondary text-xs px-3 py-1 flex items-center space-x-1">
            <ExternalLink className="w-3 h-3" />
            <span>View</span>
          </button>
        </div>
      </div>
    </div>
  );
}
