
import React, { useState } from 'react';
import { 
  Send, 
  User, 
  Bot, 
  Search,
  MoreHorizontal,
  Phone,
  Video,
  Paperclip
} from 'lucide-react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [activeChat, setActiveChat] = useState(1);

  const chatList = [
    {
      id: 1,
      customer: 'Sarah Wilson',
      lastMessage: 'I need help with my account settings',
      time: '2 min ago',
      unread: 2,
      status: 'online'
    },
    {
      id: 2,
      customer: 'Mike Johnson',
      lastMessage: 'Thank you for the quick response!',
      time: '15 min ago',
      unread: 0,
      status: 'away'
    },
    {
      id: 3,
      customer: 'Emma Davis',
      lastMessage: 'Is there a way to export my data?',
      time: '1 hour ago',
      unread: 1,
      status: 'offline'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'customer',
      content: 'Hi! I need help with my account settings. I can\'t seem to find where to update my profile information.',
      time: '10:30 AM',
      avatar: 'SW'
    },
    {
      id: 2,
      sender: 'agent',
      content: 'Hello Sarah! I\'d be happy to help you with that. You can update your profile information by going to Settings > Profile. Would you like me to walk you through the process?',
      time: '10:32 AM',
      avatar: 'JS'
    },
    {
      id: 3,
      sender: 'customer',
      content: 'Yes, that would be great! I\'m specifically looking to update my email address.',
      time: '10:33 AM',
      avatar: 'SW'
    },
    {
      id: 4,
      sender: 'agent',
      content: 'Perfect! Here\'s how to update your email address:\n\n1. Click on your profile picture in the top right\n2. Select "Account Settings"\n3. Click on "Email & Password"\n4. Enter your new email and confirm\n\nLet me know if you need any clarification on these steps!',
      time: '10:35 AM',
      avatar: 'JS'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-400';
      case 'away': return 'bg-yellow-400';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="p-8 h-screen max-h-screen overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Live Chat</h1>
          <p className="text-gray-600 mt-2">Real-time customer support conversations</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-5/6 flex">
        {/* Chat List */}
        <div className="w-1/3 border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="overflow-y-auto">
            {chatList.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setActiveChat(chat.id)}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                  activeChat === chat.id ? 'bg-blue-50 border-blue-200' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {chat.customer.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(chat.status)}`}></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-medium text-gray-900 truncate">{chat.customer}</p>
                      <span className="text-xs text-gray-500">{chat.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                  </div>
                  {chat.unread > 0 && (
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">{chat.unread}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">SW</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Sarah Wilson</p>
                <p className="text-sm text-green-600">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Phone className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Video className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreHorizontal className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'agent' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-3 max-w-xs lg:max-w-md ${msg.sender === 'agent' ? 'flex-row-reverse' : ''}`}>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-medium">{msg.avatar}</span>
                  </div>
                  <div>
                    <div className={`p-3 rounded-lg ${
                      msg.sender === 'agent' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{msg.content}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Paperclip className="w-4 h-4 text-gray-600" />
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={handleSendMessage}
                className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
