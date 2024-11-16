import React from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface FeedbackMessageProps {
  success: boolean;
  onClose: () => void;
}

export default function FeedbackMessage({ success, onClose }: FeedbackMessageProps) {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-24 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 ${
      success ? 'bg-green-500' : 'bg-red-500'
    } text-white max-w-md animate-fade-in`}>
      {success ? (
        <CheckCircle className="w-5 h-5 flex-shrink-0" />
      ) : (
        <XCircle className="w-5 h-5 flex-shrink-0" />
      )}
      <p className="flex-1">
        {success
          ? 'E-Mail-Client wird geöffnet. Bitte senden Sie die vorbereitete E-Mail ab.'
          : 'Es gab ein Problem beim Öffnen des E-Mail-Clients. Bitte versuchen Sie es erneut.'}
      </p>
      <button
        onClick={onClose}
        className="p-1 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Schließen"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}