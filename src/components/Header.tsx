import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  return (
    <header className="w-full px-6 py-4 bg-white dark:bg-gray-900 fixed top-0 z-50 border-b border-purple-100 dark:border-purple-900">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          digitalto
        </h1>
        <div className="flex items-center gap-6">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a
            href="https://www.digitalto.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity"
          >
            Website besuchen
          </a>
        </div>
      </div>
    </header>
  );
}