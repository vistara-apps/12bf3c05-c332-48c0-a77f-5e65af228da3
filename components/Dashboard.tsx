'use client';

import { useState } from 'react';
import { Header } from './Header';
import { StatsCards } from './StatsCards';
import { UserProfile } from './UserProfile';
import { MatchingSection } from './MatchingSection';
import { ActiveExchanges } from './ActiveExchanges';
import { SkillInputForm } from './SkillInputForm';
import { generateMockData } from '../lib/utils';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'matching' | 'profile'>('dashboard');
  const [showSkillForm, setShowSkillForm] = useState(false);
  const { users } = generateMockData();
  const currentUser = users[0]; // Mock current user

  return (
    <div className="min-h-screen">
      <Header 
        currentUser={currentUser}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <StatsCards />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <MatchingSection 
                  users={users.slice(1)} 
                  onStartExchange={() => setShowSkillForm(true)}
                />
              </div>
              <div>
                <ActiveExchanges />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'matching' && (
          <MatchingSection 
            users={users.slice(1)} 
            onStartExchange={() => setShowSkillForm(true)}
            fullWidth
          />
        )}

        {activeTab === 'profile' && (
          <UserProfile 
            user={currentUser}
            onEditSkills={() => setShowSkillForm(true)}
          />
        )}
      </div>

      {showSkillForm && (
        <SkillInputForm
          onClose={() => setShowSkillForm(false)}
          onSubmit={(data) => {
            console.log('Skill form submitted:', data);
            setShowSkillForm(false);
          }}
        />
      )}
    </div>
  );
}
