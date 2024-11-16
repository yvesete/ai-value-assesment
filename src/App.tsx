import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeForm from './components/WelcomeForm';
import AssessmentTool from './components/AssessmentTool';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const [showAssessment, setShowAssessment] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleFormSubmit = (name: string, email: string) => {
    console.log('Form submitted:', { name, email });
    setShowAssessment(true);
  };

  return (
    <div>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      {showAssessment ? (
        <AssessmentTool />
      ) : (
        <WelcomeForm onSubmit={handleFormSubmit} />
      )}
      <Footer />
    </div>
  );
}

export default App;