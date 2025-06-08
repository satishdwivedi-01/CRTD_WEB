import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProfileCompletion = () => {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
        <div className="flex-1">
          <h3 className="font-medium text-yellow-800 mb-1">Your profile is incomplete</h3>
          <p className="text-sm text-yellow-700">Please complete your profile to access all features.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCompletion;