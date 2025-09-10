# SkillSwap Connect

A Base Mini App for exchanging skills and fostering community learning.

## Features

- **Smart Skill Matching**: Intelligent matching based on complementary skills
- **Reputation & Trust System**: User reviews, ratings, and skill validation
- **Structured Exchange Framework**: Templates and guidelines for smooth exchanges
- **Progress Tracking**: Monitor exchange progress with dispute resolution

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Add your OnchainKit API key to `.env.local`:
```
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Next.js 15** with App Router
- **MiniKit** for Base Mini App functionality
- **OnchainKit** for blockchain integration
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons

## Project Structure

```
├── app/                 # Next.js app directory
├── components/          # React components
├── lib/                # Utilities and types
└── public/             # Static assets
```

## Key Components

- `WelcomeScreen`: Initial onboarding experience
- `Dashboard`: Main application interface
- `MatchingSection`: Skill matching and discovery
- `UserProfile`: User profile management
- `SkillInputForm`: Skill management interface
- `ProgressTracker`: Exchange progress visualization

## Business Model

- Micro-transactions for boosted visibility
- Small fees for dispute resolution
- Optional premium features

## License

MIT License
