import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { POLICIES } from '../data/content';

interface PolicyModalProps {
  policyKey: string | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ policyKey, onClose }) => {
  if (!policyKey) return null;

  const policy = POLICIES[policyKey as keyof typeof POLICIES] || {
    title: 'Information',
    content: 'Details not found.',
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-stone-200 animate-fadeIn max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#edf3eb] text-[#4a6b46] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold font-serif-display text-stone-900">
              {policy.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-700 p-1.5 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6 overflow-y-auto text-stone-700 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
          {policy.content}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#5f7d54] hover:bg-[#506c46] text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
