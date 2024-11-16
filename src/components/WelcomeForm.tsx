import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { EmailService } from '../services/EmailService';
import FeedbackMessage from './FeedbackMessage';

interface WelcomeFormProps {
  onSubmit: (name: string, email: string) => void;
}

export default function WelcomeForm({ onSubmit }: WelcomeFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const success = EmailService.sendEmail(name, email);
      setEmailSuccess(success);
      setShowFeedback(true);

      if (success) {
        setTimeout(() => {
          onSubmit(name, email);
        }, 2000);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      {showFeedback && (
        <FeedbackMessage
          success={emailSuccess}
          onClose={() => setShowFeedback(false)}
        />
      )}
      
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            KI-Wertanalyse für Unternehmen
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Entdecken Sie das Potenzial von KI für Ihr Unternehmen mit unserer kostenlosen Wertanalyse
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-lg border border-purple-200 dark:border-purple-900 focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white disabled:opacity-50"
              placeholder="Ihr Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-lg border border-purple-200 dark:border-purple-900 focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white disabled:opacity-50"
              placeholder="ihre.email@beispiel.de"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group disabled:opacity-50"
          >
            {isSubmitting ? 'Wird gesendet...' : 'Kostenlose Analyse starten'}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
}