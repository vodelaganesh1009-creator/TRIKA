import React, { useState } from 'react';
import Header from './components/Header';
import HamburgerMenu from './components/HamburgerMenu';
import ChatView from './components/ChatView';
import Placeholder from './components/Placeholder';
import Dashboard from './components/Dashboard';
import BudgetSummary from './components/BudgetSummary';
import FinancialGoals from './components/FinancialGoals';
import LearnGrow from './components/LearnGrow';
import Profile from './components/Profile';
import Settings from './components/Settings';
import ReportsHistory from './components/ReportsHistory';
import About from './components/About';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('Chatbot / Ask AI');
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Chatbot / Ask AI':
        return <ChatView />;
      case 'Dashboard':
        return <Dashboard />;
      case 'Budget Summary':
        return <BudgetSummary />;
      case 'Financial Goals':
        return <FinancialGoals />;
      case 'Learn & Grow (Financial Literacy)':
        return <LearnGrow />;
      case 'Profile / Personalization':
        return <Profile />;
      case 'Settings':
        return <Settings />;
      case 'Reports / History':
        return <ReportsHistory />;
      case 'About / IBM AI Info':
        return <About />;
      case 'Log Out / Exit':
        return <Placeholder title={currentPage} />;
      default:
        return <ChatView />;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gradient-theme text-text-primary font-sans">
      <HamburgerMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={setCurrentPage}
        currentPage={currentPage}
      />
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out">
        <Header onMenuClick={toggleMenu} />
        <main className="flex-grow flex flex-col overflow-hidden p-4">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default App;