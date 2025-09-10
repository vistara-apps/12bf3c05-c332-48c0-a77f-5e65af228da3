import { clsx, type ClassValue } from 'clsx';
import { REPUTATION_LEVELS } from './constants';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function getReputationLevel(score: number) {
  for (const [key, level] of Object.entries(REPUTATION_LEVELS)) {
    if (score >= level.min && score <= level.max) {
      return level.label;
    }
  }
  return 'Newcomer';
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function generateMockData() {
  const mockUsers = [
    {
      userId: '1',
      telegramUsername: 'alice_dev',
      displayName: 'Alice Johnson',
      skillsOffered: ['React', 'TypeScript', 'Node.js'],
      skillsWanted: ['UI/UX Design', 'Photography'],
      reputationScore: 85,
      pastExchanges: 12,
      avatar: '👩‍💻',
    },
    {
      userId: '2',
      telegramUsername: 'bob_designer',
      displayName: 'Bob Smith',
      skillsOffered: ['UI/UX Design', 'Figma', 'Photoshop'],
      skillsWanted: ['React', 'JavaScript'],
      reputationScore: 92,
      pastExchanges: 18,
      avatar: '🎨',
    },
    {
      userId: '3',
      telegramUsername: 'carol_writer',
      displayName: 'Carol Davis',
      skillsOffered: ['Content Writing', 'Copywriting', 'SEO'],
      skillsWanted: ['Social Media Marketing', 'Analytics'],
      reputationScore: 78,
      pastExchanges: 9,
      avatar: '✍️',
    },
    {
      userId: '4',
      telegramUsername: 'david_chef',
      displayName: 'David Wilson',
      skillsOffered: ['Cooking', 'Recipe Development', 'Food Photography'],
      skillsWanted: ['Video Editing', 'YouTube Marketing'],
      reputationScore: 95,
      pastExchanges: 24,
      avatar: '👨‍🍳',
    },
    {
      userId: '5',
      telegramUsername: 'eva_musician',
      displayName: 'Eva Martinez',
      skillsOffered: ['Piano', 'Music Theory', 'Composition'],
      skillsWanted: ['Audio Engineering', 'Music Production'],
      reputationScore: 88,
      pastExchanges: 15,
      avatar: '🎹',
    },
  ];

  return { users: mockUsers };
}
