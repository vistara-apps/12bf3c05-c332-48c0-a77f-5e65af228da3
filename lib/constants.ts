export const SKILLS_CATEGORIES = [
  'Programming',
  'Design',
  'Marketing',
  'Writing',
  'Languages',
  'Music',
  'Photography',
  'Cooking',
  'Fitness',
  'Business',
  'Art',
  'Teaching',
] as const;

export const EXCHANGE_STEPS = [
  'Initial Contact',
  'Schedule Meeting',
  'First Session',
  'Follow-up',
  'Complete Exchange',
] as const;

export const REPUTATION_LEVELS = {
  NEWCOMER: { min: 0, max: 10, label: 'Newcomer' },
  LEARNER: { min: 11, max: 25, label: 'Learner' },
  CONTRIBUTOR: { min: 26, max: 50, label: 'Contributor' },
  MENTOR: { min: 51, max: 100, label: 'Mentor' },
  EXPERT: { min: 101, max: Infinity, label: 'Expert' },
} as const;
