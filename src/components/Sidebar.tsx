
import React from 'react';
import { 
  Home, 
  Ticket, 
  Users, 
  BookOpen, 
  MessageCircle, 
  BarChart3,
  Settings,
  Shield,
  FileText,
  UserCheck,
  Package
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'tickets', label: 'Tickets', icon: Ticket },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'knowledge', label: 'Knowledge Base', icon: BookOpen },
    { id: 'chat', label: 'Live Chat', icon: MessageCircle },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  const adminItems = [
    { id: 'admin-users', label: 'إدارة المستخدمين', icon: UserCheck },
    { id: 'admin-services', label: 'إدارة الخدمات', icon: Package },
    { id: 'admin-reports', label: 'التقارير المتقدمة', icon: FileText },
    { id: 'admin-settings', label: 'إعدادات النظام', icon: Settings },
  ];

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">CustomerPro</h1>
        <p className="text-sm text-gray-500 mt-1">Service Platform</p>
      </div>
      
      <nav className="mt-6">
        {/* القائمة الرئيسية */}
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left transition-all duration-200 hover:bg-blue-50 ${
                currentView === item.id
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
        
        {/* قسم لوحة الإدارة */}
        <div className="mt-6 px-6">
          <div className="flex items-center space-x-2 mb-3">
            <Shield className="w-4 h-4 text-gray-400" />
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              لوحة الإدارة
            </h3>
          </div>
        </div>
        
        {adminItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left transition-all duration-200 hover:bg-red-50 ${
                currentView === item.id
                  ? 'bg-red-50 text-red-600 border-r-2 border-red-600'
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">JS</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">John Smith</p>
            <p className="text-xs text-gray-500">Support Agent</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
