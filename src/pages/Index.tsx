
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import Tickets from '../components/Tickets';
import Customers from '../components/Customers';
import KnowledgeBase from '../components/KnowledgeBase';
import Chat from '../components/Chat';
import Analytics from '../components/Analytics';

const Index = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-1 overflow-auto">
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'tickets' && <Tickets />}
        {currentView === 'customers' && <Customers />}
        {currentView === 'knowledge' && <KnowledgeBase />}
        {currentView === 'chat' && <Chat />}
        {currentView === 'analytics' && <Analytics />}
      </main>
    </div>
  );
};

export default Index;
