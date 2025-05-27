
import React, { useState } from 'react';
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Package,
  DollarSign,
  Clock,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

const ServiceManagement = () => {
  const { toast } = useToast();
  const [services, setServices] = useState<Service[]>([
    {
      id: '1',
      name: 'الدعم الفني الأساسي',
      description: 'دعم فني عبر الهاتف والإيميل',
      price: 99,
      duration: '24 ساعة',
      category: 'دعم فني',
      status: 'active',
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      name: 'الدعم الفني المتقدم',
      description: 'دعم فني شامل مع زيارات موقعية',
      price: 299,
      duration: '12 ساعة',
      category: 'دعم فني',
      status: 'active',
      createdAt: '2024-01-10'
    },
    {
      id: '3',
      name: 'استشارات تقنية',
      description: 'استشارات متخصصة في التكنولوجيا',
      price: 199,
      duration: '48 ساعة',
      category: 'استشارات',
      status: 'inactive',
      createdAt: '2024-01-05'
    }
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    duration: '',
    category: '',
    status: 'active' as const
  });

  const handleAdd = () => {
    setIsAdding(true);
    setFormData({
      name: '',
      description: '',
      price: '',
      duration: '',
      category: '',
      status: 'active'
    });
  };

  const handleEdit = (service: Service) => {
    setEditingId(service.id);
    setFormData({
      name: service.name,
      description: service.description,
      price: service.price.toString(),
      duration: service.duration,
      category: service.category,
      status: service.status
    });
  };

  const handleSave = () => {
    if (!formData.name || !formData.description || !formData.price) {
      toast({
        title: "خطأ في البيانات",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    if (isAdding) {
      const newService: Service = {
        id: (services.length + 1).toString(),
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        duration: formData.duration,
        category: formData.category,
        status: formData.status,
        createdAt: new Date().toISOString().split('T')[0]
      };
      setServices([...services, newService]);
      toast({
        title: "تم إضافة الخدمة",
        description: "تم إضافة الخدمة الجديدة بنجاح",
      });
    } else if (editingId) {
      setServices(services.map(service => 
        service.id === editingId 
          ? { 
              ...service, 
              name: formData.name,
              description: formData.description,
              price: parseFloat(formData.price),
              duration: formData.duration,
              category: formData.category,
              status: formData.status
            }
          : service
      ));
      toast({
        title: "تم تحديث الخدمة",
        description: "تم تحديث بيانات الخدمة بنجاح",
      });
    }

    setIsAdding(false);
    setEditingId(null);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    setServices(services.filter(service => service.id !== id));
    toast({
      title: "تم حذف الخدمة",
      description: "تم حذف الخدمة بنجاح",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">إدارة الخدمات</h1>
          <p className="text-gray-600 mt-2">إضافة وتعديل وحذف خدمات النظام</p>
        </div>
        <Button 
          onClick={handleAdd}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          إضافة خدمة جديدة
        </Button>
      </div>

      {/* إحصائيات سريعة */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center space-x-3">
            <Package className="w-8 h-8 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">إجمالي الخدمات</p>
              <p className="text-2xl font-bold text-gray-900">{services.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center space-x-3">
            <Users className="w-8 h-8 text-green-600" />
            <div>
              <p className="text-sm text-gray-600">الخدمات النشطة</p>
              <p className="text-2xl font-bold text-gray-900">
                {services.filter(s => s.status === 'active').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center space-x-3">
            <DollarSign className="w-8 h-8 text-yellow-600" />
            <div>
              <p className="text-sm text-gray-600">متوسط السعر</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(services.reduce((sum, s) => sum + s.price, 0) / services.length)} ر.س
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center space-x-3">
            <Clock className="w-8 h-8 text-purple-600" />
            <div>
              <p className="text-sm text-gray-600">الخدمات غير النشطة</p>
              <p className="text-2xl font-bold text-gray-900">
                {services.filter(s => s.status === 'inactive').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* جدول الخدمات */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>اسم الخدمة</TableHead>
                <TableHead>الوصف</TableHead>
                <TableHead>السعر</TableHead>
                <TableHead>المدة</TableHead>
                <TableHead>الفئة</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>تاريخ الإنشاء</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(isAdding || editingId) && (
                <TableRow>
                  <TableCell>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="اسم الخدمة"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="وصف الخدمة"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      placeholder="السعر"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      value={formData.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      placeholder="المدة"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      placeholder="الفئة"
                    />
                  </TableCell>
                  <TableCell>
                    <select
                      value={formData.status}
                      onChange={(e) => handleInputChange('status', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="active">نشط</option>
                      <option value="inactive">غير نشط</option>
                    </select>
                  </TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" onClick={handleSave}>
                        <Save className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={handleCancel}>
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              )}
              
              {services.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.name}</TableCell>
                  <TableCell className="max-w-xs truncate">{service.description}</TableCell>
                  <TableCell>{service.price} ر.س</TableCell>
                  <TableCell>{service.duration}</TableCell>
                  <TableCell>{service.category}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      service.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {service.status === 'active' ? 'نشط' : 'غير نشط'}
                    </span>
                  </TableCell>
                  <TableCell>{service.createdAt}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleEdit(service)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive"
                        onClick={() => handleDelete(service.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ServiceManagement;
