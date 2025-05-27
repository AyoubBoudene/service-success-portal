
import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Ticket, 
  Clock,
  Download,
  Calendar,
  Filter
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Reports = () => {
  const [dateRange, setDateRange] = useState('30days');
  const [reportType, setReportType] = useState('overview');

  const ticketData = [
    { name: 'يناير', resolved: 120, pending: 30, new: 80 },
    { name: 'فبراير', resolved: 140, pending: 25, new: 95 },
    { name: 'مارس', resolved: 160, pending: 20, new: 110 },
    { name: 'أبريل', resolved: 180, pending: 15, new: 125 },
    { name: 'مايو', resolved: 200, pending: 12, new: 140 },
    { name: 'يونيو', resolved: 220, pending: 8, new: 160 }
  ];

  const performanceData = [
    { name: 'الأسبوع 1', responseTime: 2.5, satisfaction: 4.2 },
    { name: 'الأسبوع 2', responseTime: 2.1, satisfaction: 4.5 },
    { name: 'الأسبوع 3', responseTime: 1.8, satisfaction: 4.7 },
    { name: 'الأسبوع 4', responseTime: 1.5, satisfaction: 4.8 }
  ];

  const categoryData = [
    { name: 'تقني', value: 35, color: '#3B82F6' },
    { name: 'فوترة', value: 25, color: '#10B981' },
    { name: 'عام', value: 20, color: '#F59E0B' },
    { name: 'شكاوى', value: 15, color: '#EF4444' },
    { name: 'أخرى', value: 5, color: '#8B5CF6' }
  ];

  const statsCards = [
    { title: 'إجمالي التذاكر', value: '2,847', change: '+12%', icon: Ticket, color: 'blue' },
    { title: 'المستخدمين النشطين', value: '1,284', change: '+8%', icon: Users, color: 'green' },
    { title: 'متوسط وقت الاستجابة', value: '1.2 ساعة', change: '-15%', icon: Clock, color: 'purple' },
    { title: 'معدل الرضا', value: '4.8/5', change: '+5%', icon: TrendingUp, color: 'orange' }
  ];

  const getCardColor = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-500';
      case 'green': return 'bg-green-500';
      case 'purple': return 'bg-purple-500';
      case 'orange': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">التقارير والإحصائيات</h1>
          <p className="text-gray-600 mt-2">تحليل شامل لأداء النظام والخدمات</p>
        </div>
        <div className="flex space-x-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="7days">آخر 7 أيام</option>
            <option value="30days">آخر 30 يوم</option>
            <option value="90days">آخر 90 يوم</option>
            <option value="1year">السنة الماضية</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Download className="w-5 h-5" />
            <span>تصدير التقرير</span>
          </button>
        </div>
      </div>

      {/* بطاقات الإحصائيات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} من الشهر الماضي
                  </p>
                </div>
                <div className={`w-12 h-12 ${getCardColor(stat.color)} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* مخطط التذاكر */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">إحصائيات التذاكر</h2>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ticketData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="resolved" fill="#10B981" name="محلولة" />
              <Bar dataKey="pending" fill="#F59E0B" name="قيد الانتظار" />
              <Bar dataKey="new" fill="#3B82F6" name="جديدة" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* مخطط الأداء */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">مؤشرات الأداء</h2>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="responseTime" stroke="#EF4444" name="وقت الاستجابة (ساعة)" />
              <Line yAxisId="right" type="monotone" dataKey="satisfaction" stroke="#10B981" name="معدل الرضا" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* توزيع الفئات */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">توزيع فئات التذاكر</h2>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* أفضل الموظفين */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">أفضل الموظفين</h2>
          <div className="space-y-4">
            {[
              { name: 'أحمد محمد', resolved: 45, rating: 4.9 },
              { name: 'سارة أحمد', resolved: 42, rating: 4.8 },
              { name: 'محمد علي', resolved: 38, rating: 4.7 },
              { name: 'فاطمة خالد', resolved: 35, rating: 4.6 }
            ].map((agent, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {agent.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{agent.name}</p>
                    <p className="text-sm text-gray-600">{agent.resolved} تذكرة محلولة</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{agent.rating}</p>
                  <p className="text-sm text-gray-600">التقييم</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* إحصائيات سريعة */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">إحصائيات سريعة</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">التذاكر المفتوحة</span>
              <span className="font-semibold text-gray-900">47</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">التذاكر المتأخرة</span>
              <span className="font-semibold text-red-600">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">المحلولة اليوم</span>
              <span className="font-semibold text-green-600">28</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">الموظفين المتاحين</span>
              <span className="font-semibold text-blue-600">8/12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">متوسط وقت الحل</span>
              <span className="font-semibold text-gray-900">4.2 ساعة</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">معدل الحل الأول</span>
              <span className="font-semibold text-purple-600">78%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
