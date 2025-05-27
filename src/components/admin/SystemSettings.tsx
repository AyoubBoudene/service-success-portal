
import React, { useState } from 'react';
import { 
  Settings, 
  Database, 
  Mail, 
  Bell, 
  Shield, 
  Globe,
  Server,
  Save,
  RefreshCw
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SystemSettings = () => {
  const [settings, setSettings] = useState({
    siteName: 'CustomerPro',
    siteUrl: 'https://customerpro.com',
    adminEmail: 'admin@customerpro.com',
    maxFileSize: '10',
    sessionTimeout: '30',
    backupFrequency: 'daily',
    maintenanceMode: false,
    emailNotifications: true,
    smsNotifications: false,
    allowRegistration: true,
    requireEmailVerification: true,
    maxLoginAttempts: '5',
    passwordMinLength: '8'
  });

  const handleInputChange = (key: string, value: string | boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    console.log('حفظ الإعدادات:', settings);
    // هنا يمكن إضافة منطق حفظ الإعدادات
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">إعدادات النظام</h1>
          <p className="text-gray-600 mt-2">إدارة الإعدادات العامة للنظام</p>
        </div>
        <div className="flex space-x-3">
          <button 
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Save className="w-5 h-5" />
            <span>حفظ الإعدادات</span>
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2">
            <RefreshCw className="w-5 h-5" />
            <span>إعادة تحميل</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* إعدادات عامة */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Globe className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">الإعدادات العامة</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="siteName">اسم الموقع</Label>
              <Input
                id="siteName"
                value={settings.siteName}
                onChange={(e) => handleInputChange('siteName', e.target.value)}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="siteUrl">رابط الموقع</Label>
              <Input
                id="siteUrl"
                value={settings.siteUrl}
                onChange={(e) => handleInputChange('siteUrl', e.target.value)}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="adminEmail">البريد الإلكتروني للمدير</Label>
              <Input
                id="adminEmail"
                type="email"
                value={settings.adminEmail}
                onChange={(e) => handleInputChange('adminEmail', e.target.value)}
                className="mt-1"
              />
            </div>
          </div>
        </div>

        {/* إعدادات الأمان */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-6 h-6 text-green-600" />
            <h2 className="text-xl font-semibold text-gray-900">إعدادات الأمان</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="maxLoginAttempts">الحد الأقصى لمحاولات تسجيل الدخول</Label>
              <Input
                id="maxLoginAttempts"
                type="number"
                value={settings.maxLoginAttempts}
                onChange={(e) => handleInputChange('maxLoginAttempts', e.target.value)}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="passwordMinLength">الحد الأدنى لطول كلمة المرور</Label>
              <Input
                id="passwordMinLength"
                type="number"
                value={settings.passwordMinLength}
                onChange={(e) => handleInputChange('passwordMinLength', e.target.value)}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="sessionTimeout">انتهاء الجلسة (بالدقائق)</Label>
              <Input
                id="sessionTimeout"
                type="number"
                value={settings.sessionTimeout}
                onChange={(e) => handleInputChange('sessionTimeout', e.target.value)}
                className="mt-1"
              />
            </div>
            
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="allowRegistration"
                checked={settings.allowRegistration}
                onChange={(e) => handleInputChange('allowRegistration', e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <Label htmlFor="allowRegistration">السماح بالتسجيل الجديد</Label>
            </div>
            
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="requireEmailVerification"
                checked={settings.requireEmailVerification}
                onChange={(e) => handleInputChange('requireEmailVerification', e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <Label htmlFor="requireEmailVerification">التحقق من البريد الإلكتروني مطلوب</Label>
            </div>
          </div>
        </div>

        {/* إعدادات النظام */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Server className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-semibold text-gray-900">إعدادات النظام</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="maxFileSize">الحد الأقصى لحجم الملف (MB)</Label>
              <Input
                id="maxFileSize"
                type="number"
                value={settings.maxFileSize}
                onChange={(e) => handleInputChange('maxFileSize', e.target.value)}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="backupFrequency">تكرار النسخ الاحتياطي</Label>
              <select
                id="backupFrequency"
                value={settings.backupFrequency}
                onChange={(e) => handleInputChange('backupFrequency', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="hourly">كل ساعة</option>
                <option value="daily">يومياً</option>
                <option value="weekly">أسبوعياً</option>
                <option value="monthly">شهرياً</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="maintenanceMode"
                checked={settings.maintenanceMode}
                onChange={(e) => handleInputChange('maintenanceMode', e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <Label htmlFor="maintenanceMode">وضع الصيانة</Label>
            </div>
          </div>
        </div>

        {/* إعدادات الإشعارات */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Bell className="w-6 h-6 text-orange-600" />
            <h2 className="text-xl font-semibold text-gray-900">إعدادات الإشعارات</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="emailNotifications"
                checked={settings.emailNotifications}
                onChange={(e) => handleInputChange('emailNotifications', e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <Label htmlFor="emailNotifications">إشعارات البريد الإلكتروني</Label>
            </div>
            
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="smsNotifications"
                checked={settings.smsNotifications}
                onChange={(e) => handleInputChange('smsNotifications', e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <Label htmlFor="smsNotifications">إشعارات الرسائل النصية</Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;
