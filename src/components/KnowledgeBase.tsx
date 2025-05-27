
import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  Plus, 
  Tag,
  Eye,
  ThumbsUp,
  Clock,
  Filter
} from 'lucide-react';

const KnowledgeBase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', count: 24 },
    { id: 'getting-started', name: 'Getting Started', count: 8 },
    { id: 'billing', name: 'Billing & Plans', count: 6 },
    { id: 'technical', name: 'Technical Support', count: 10 }
  ];

  const articles = [
    {
      id: 1,
      title: 'How to create your first project',
      category: 'getting-started',
      description: 'Step-by-step guide to setting up your first project and getting started with our platform.',
      author: 'Support Team',
      views: 1250,
      likes: 89,
      lastUpdated: '2024-01-10',
      tags: ['beginner', 'setup', 'tutorial']
    },
    {
      id: 2,
      title: 'Understanding billing cycles and payments',
      category: 'billing',
      description: 'Complete guide to how billing works, payment methods, and managing your subscription.',
      author: 'Finance Team',
      views: 890,
      likes: 45,
      lastUpdated: '2024-01-08',
      tags: ['billing', 'payments', 'subscription']
    },
    {
      id: 3,
      title: 'Troubleshooting connection issues',
      category: 'technical',
      description: 'Common solutions for connectivity problems and network configuration tips.',
      author: 'Tech Support',
      views: 2100,
      likes: 156,
      lastUpdated: '2024-01-05',
      tags: ['troubleshooting', 'network', 'connection']
    },
    {
      id: 4,
      title: 'Setting up team collaboration',
      category: 'getting-started',
      description: 'Learn how to invite team members and set up collaborative workspaces.',
      author: 'Product Team',
      views: 756,
      likes: 67,
      lastUpdated: '2024-01-12',
      tags: ['collaboration', 'team', 'workspace']
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'getting-started': return 'bg-green-100 text-green-800';
      case 'billing': return 'bg-blue-100 text-blue-800';
      case 'technical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Knowledge Base</h1>
          <p className="text-gray-600 mt-2">Self-service articles and documentation</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" />
          New Article
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Categories</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{category.name}</span>
                    <span className="text-sm text-gray-400">{category.count}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Search */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="space-y-6">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{article.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                        {categories.find(c => c.id === article.category)?.name || article.category}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{article.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {article.views} views
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" />
                      {article.likes} likes
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Updated {article.lastUpdated}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">By {article.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
