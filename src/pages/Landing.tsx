
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Shield, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CP</span>
              </div>
              <h1 className="mr-3 text-2xl font-bold text-gray-900">CustomerPro</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>تسجيل دخول العملاء</span>
                </Button>
              </Link>
              <Link to="/admin/login">
                <Button className="flex items-center space-x-2 bg-red-600 hover:bg-red-700">
                  <Shield className="w-4 h-4" />
                  <span>دخول الإدارة</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">منصة خدمة العملاء</span>
            <span className="block text-blue-600">الأكثر تطوراً</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            نوفر لك أفضل تجربة في إدارة خدمة العملاء مع أدوات متقدمة وواجهة سهلة الاستخدام
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link to="/register">
                <Button size="lg" className="w-full flex items-center justify-center px-8 py-3 text-base font-medium">
                  ابدأ مجاناً
                  <ArrowRight className="mr-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:mr-3">
              <Link to="/login">
                <Button variant="outline" size="lg" className="w-full flex items-center justify-center px-8 py-3 text-base font-medium">
                  تسجيل الدخول
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      <Users className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">إدارة العملاء</h3>
                  <p className="mt-5 text-base text-gray-500">
                    نظام شامل لإدارة بيانات العملاء وتتبع تفاعلاتهم
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">إدارة التذاكر</h3>
                  <p className="mt-5 text-base text-gray-500">
                    نظام تذاكر متطور لتتبع ومعالجة طلبات العملاء
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-purple-500 rounded-md shadow-lg">
                      <Star className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">تحليلات متقدمة</h3>
                  <p className="mt-5 text-base text-gray-500">
                    تقارير مفصلة وإحصائيات لتحسين أداء خدمة العملاء
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 CustomerPro. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
