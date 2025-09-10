export interface User {
  userId: string;
  telegramUsername: string;
  skillsOffered: string[];
  skillsWanted: string[];
  reputationScore: number;
  pastExchanges: number;
  avatar?: string;
  displayName?: string;
}

export interface Offer {
  offerId: string;
  userId: string;
  skill: string;
  description: string;
  status: 'active' | 'matched' | 'completed' | 'cancelled';
  createdAt: Date;
}

export interface Request {
  requestId: string;
  userId: string;
  skill: string;
  description: string;
  status: 'active' | 'matched' | 'completed' | 'cancelled';
  createdAt: Date;
}

export interface Match {
  matchId: string;
  offerId: string;
  requestId: string;
  matchTimestamp: Date;
  exchangeStatus: 'pending' | 'in-progress' | 'completed' | 'disputed';
  reviewId?: string;
  offerUser: User;
  requestUser: User;
}

export interface Review {
  reviewId: string;
  reviewerId: string;
  reviewedId: string;
  rating: number;
  comment: string;
  timestamp: Date;
  matchId: string;
}

export interface ExchangeProgress {
  matchId: string;
  currentStep: number;
  totalSteps: number;
  lastUpdated: Date;
  notes?: string;
}
