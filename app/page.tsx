import { WelcomeScreen } from '../components/WelcomeScreen';
import { Dashboard } from '../components/Dashboard';

export default function Home() {
  return (
    <main className="min-h-screen">
      <WelcomeScreen />
      <Dashboard />
    </main>
  );
}
