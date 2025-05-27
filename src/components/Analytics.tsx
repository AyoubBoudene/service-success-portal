
import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle,
  Calendar,
  Download
} from 'lucide-react';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const metrics = [
    {
      title: 'Total Tickets',
      value: '156',
      change: '+12%',
      trend: 'up',
      icon: CheckCircle,
      color: 'blue'
    },
    {
      title: 'Avg Response Time',
      value: '2.4h',
      change: '-8%',
      trend: 'down',
      icon: Clock,
      color: 'green'
    },
    {
      title: 'Customer Satisfaction',
      value: '4.8/5',
      change: '+0.2',
      trend: 'up',
      icon: TrendingUp,
      color: 'purple'
    },
    {
      title: 'Active Customers',
      value: '1,234',
      change: '+5%',
      trend: 'up',
      icon: Users,
      color: 'orange'
    }
  ];

  const ticketsByStatus = [
    { status: 'Open', count: 45, color: 'bg-blue-500' },
    { status: 'In Progress', count: 32, color: 'bg-yellow-500' },
    { status: 'Resolved', count: 78, color: 'bg-green-500' },
    { status: 'Closed', count: 156, color: 'bg-gray-500' }
  ];

  const responseTimeData = [
    { day: 'Mon', time: 2.1 },
    { day: 'Tue', time: 1.8 },
    { day: 'Wed', time: 2.4 },
    { day: 'Thu', time: 2.0 },
    { day: 'Fri', time: 2.6 },
    { day: 'Sat', time: 1.9 },
    { day: 'Sun', time: 2.2 }
  ];

  const topAgents = [
    { name: 'John Smith', tickets: 45, satisfaction: 4.9 },
    { name: 'Emma Wilson', tickets: 38, satisfaction: 4.8 },
    { name: 'Mike Johnson', tickets: 32, satisfaction: 4.7 },
    { name: 'Sarah Davis', tickets: 28, satisfaction: 4.6 }
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-2">Performance insights and metrics</p>
        </div>
        <div className="flex items-center gap-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${metric.color}-100`}>
                  <Icon className={`w-6 h-6 text-${metric.color}-600`} />
                </div>
                <div className={`text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-gray-600 text-sm">{metric.title}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Tickets by Status */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Tickets by Status</h2>
          <div className="space-y-4">
            {ticketsByStatus.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="text-gray-700">{item.status}</span>
                </div>
                <span className="font-semibold text-gray-900">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Response Time Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Average Response Time</h2>
          <div className="space-y-4">
            {responseTimeData.map((item, index) => {
              const maxTime = Math.max(...responseTimeData.map(d => d.time));
              const widthPercentage = (item.time / maxTime) * 100;
              
              return (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-8 text-sm text-gray-600">{item.day}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${widthPercentage}%` }}
                    ></div>
                  </div>
                  <span className="w-12 text-sm text-gray-900 text-right">{item.time}h</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Top Performing Agents */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Top Performing Agents</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200">
              <tr>
                <th className="text-left py-3 font-medium text-gray-900">Agent</th>
                <th className="text-left py-3 font-medium text-gray-900">Tickets Resolved</th>
                <th className="text-left py-3 font-medium text-gray-900">Satisfaction Score</th>
                <th className="text-left py-3 font-medium text-gray-900">Performance</th>
              </tr>
            </thead>
            <tbody>
              {topAgents.map((agent, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {agent.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="font-medium text-gray-900">{agent.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-gray-900">{agent.tickets}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-900">{agent.satisfaction}</span>
                      <div className="flex text-yellow-400">
                        {'★'.repeat(Math.floor(agent.satisfaction))}
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${(agent.satisfaction / 5) * 100}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
