'use client';

import { useState } from 'react';
import { Search, Filter, Zap } from 'lucide-react';
import { MatchCard } from './MatchCard';
import { User } from '../lib/types';

interface MatchingSectionProps {
  users: User[];
  onStartExchange: () => void;
  fullWidth?: boolean;
}

export function MatchingSection({ users, onStartExchange, fullWidth = false }: MatchingSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.displayName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.skillsOffered.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSkill = !selectedSkill || user.skillsOffered.includes(selectedSkill);
    return matchesSearch && matchesSkill;
  });

  const allSkills = Array.from(new Set(users.flatMap(user => user.skillsOffered)));

  return (
    <div className={`glass-card p-6 ${fullWidth ? 'w-full' : ''}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Skill Matches</h2>
        <div className="flex items-center space-x-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          <span className="text-white/80 text-sm">Smart matching enabled</span>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
          <input
            type="text"
            placeholder="Search skills or users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
          <select
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
            className="pl-10 pr-8 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 appearance-none min-w-[150px]"
          >
            <option value="">All Skills</option>
            {allSkills.map(skill => (
              <option key={skill} value={skill} className="bg-gray-800">
                {skill}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Match Results */}
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <MatchCard
              key={user.userId}
              user={user}
              onConnect={onStartExchange}
            />
          ))
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-white/60" />
            </div>
            <p className="text-white/60">No matches found</p>
            <p className="text-white/40 text-sm mt-1">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
