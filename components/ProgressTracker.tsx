'use client';

interface ProgressTrackerProps {
  currentStep: number;
  totalSteps: number;
  variant?: 'step1' | 'step2' | 'completed';
}

export function ProgressTracker({ currentStep, totalSteps, variant = 'step1' }: ProgressTrackerProps) {
  const progress = (currentStep / totalSteps) * 100;

  const getVariantStyles = () => {
    switch (variant) {
      case 'completed':
        return 'from-green-500 to-emerald-500';
      case 'step2':
        return 'from-blue-500 to-cyan-500';
      default:
        return 'from-purple-500 to-pink-500';
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-white/80 text-xs">Progress</span>
        <span className="text-white/60 text-xs">
          {currentStep}/{totalSteps} steps
        </span>
      </div>
      
      <div className="w-full bg-white/10 rounded-full h-2">
        <div
          className={`h-2 bg-gradient-to-r ${getVariantStyles()} rounded-full transition-all duration-300 ease-in-out`}
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="flex justify-between mt-2 text-xs text-white/60">
        <span>Started</span>
        {variant === 'completed' ? (
          <span className="text-green-400">Completed</span>
        ) : (
          <span>In Progress</span>
        )}
      </div>
    </div>
  );
}
