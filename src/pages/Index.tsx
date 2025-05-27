
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import Tickets from '../components/Tickets';
import Customers from '../components/Customers';
import KnowledgeBase from '../components/KnowledgeBase';
import Chat from '../components/Chat';
import Analytics from '../components/Analytics';
import UserManagement from '../components/admin/UserManagement';
import ServiceManagement from '../components/admin/ServiceManagement';
import Reports from '../components/admin/Reports';
import SystemSettings from '../components/admin/SystemSettings';

const Index = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'tickets':
        return <Tickets />;
      case 'customers':
        return <Customers />;
      case 'knowledge':
        return <KnowledgeBase />;
      case 'chat':
        return <Chat />;
      case 'analytics':
        return <Analytics />;
      case 'admin-users':
        return <UserManagement />;
      case 'admin-services':
        return <ServiceManagement />;
      case 'admin-reports':
        return <Reports />;
      case 'admin-settings':
        return <SystemSettings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-1 overflow-auto">
        {renderCurrentView()}
      </main>
    </div>
  );
};

export default Index;
