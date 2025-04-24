import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, User, Star } from "lucide-react";
import { Input } from "@/components/ui/input";

// Тип для офисов МФЦ
type Office = {
  id: string;
  name: string;
  address: string;
  district: string;
  phone: string;
  workHours: string;
  loadLevel: "low" | "medium" | "high";
  services: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
};

// Данные офисов
const offices: Office[] = [
  {
    id: "office-1",
    name: "МФЦ Центральный",
    address: "ул. Ленина, 25",
    district: "Центральный",
    phone: "8 (800) 123-45-67",
    workHours: "Пн-Пт: 8:00-20:00, Сб: 9:00-16:00",
    loadLevel: "high",
    services: ["Все услуги"],
    coordinates: {
      lat: 55.7558,
      lng: 37.6173
    }
  },
  {
    id: "office-2",
    name: "МФЦ Южный",
    address: "ул. Пушкина, 10",
    district: "Южный",
    phone: "8 (800) 123-45-68",
    workHours: "Пн-Пт: 9:00-19:00, Сб: 10:00-15:00",
    loadLevel: "medium",
    services: ["Все услуги"],
    coordinates: {
      lat: 55.7158,
      lng: 37.6173
    }
  },
  {
    id: "office-3",
    name: "МФЦ Восточный",
    address: "пр. Мира, 120",
    district: "Восточный",
    phone: "8 (800) 123-45-69",
    workHours: "Пн-Пт: 8:00-20:00, Сб: 9:00-16:00",
    loadLevel: "low",
    services: ["Все услуги"],
    coordinates: {
      lat: 55.7558,
      lng: 37.6573
    }
  },
  {
    id: "office-4",
    name: "МФЦ Северный",
    address: "ул. Космонавтов, 55",
    district: "Северный",
    phone: "8 (800) 123-45-70",
    workHours: "Пн-Пт: 10:00-20:00, Сб: 10:00-17:00",
    loadLevel: "medium",
    services: ["Все услуги"],
    coordinates: {
      lat: 55.8058,
      lng: 37.6173
    }
  },
  {
    id: "office-5",
    name: "МФЦ Западный",
    address: "ул. Гагарина, 30",
    district: "Западный",
    phone: "8 (800) 123-45-71",
    workHours: "Пн-Пт: 9:00-19:00, Сб: 9:00-15:00",
    loadLevel: "low",
    services: ["Все услуги"],
    coordinates: {
      lat: 55.7558,
      lng: 37.5773
    }
  }
];

// Функция для отображения загруженности офиса
const LoadIndicator = ({ level }: { level: "low" | "medium" | "high" }) => {
  const getColor = () => {
    switch (level) {
      case "low": return "bg-green-500";
      case "medium": return "bg-yellow-500";
      case "high": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };
  
  const getText = () => {
    switch (level) {
      case "low": return "Свободно";
      case "medium": return "Средняя загруженность";
      case "high": return "Высокая загруженность";
      default: return "Нет данных";
    }
  };
  
  return (
    <div className="flex items-center">
      <div className={`h-3 w-3 rounded-full mr-2 ${getColor()}`}></div>
      <span>{getText()}</span>
    </div>
  );
};

const Offices = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  
  // Фильтрация офисов
  const filteredOffices = offices.filter(office => {
    const matchesSearch = office.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          office.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDistrict = selectedDistrict === "all" || office.district === selectedDistrict;
    return matchesSearch && matchesDistrict;
  });
  
  // Получение уникальных районов для фильтрации
  const districts = Array.from(new Set(offices.map(office => office.district)));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Офисы МФЦ</h1>
        <p className="text-center mb-8 max-w-3xl mx-auto">
          Найдите ближайший к вам многофункциональный центр и узнайте о его загруженности в реальном времени
        </p>
        
        {/* Поиск и фильтрация */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <Input 
                type="text"
                placeholder="Поиск по адресу или названию"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
              <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
            
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="px-4 py-2 border rounded-md w-full md:w-64"
            >
              <option value="all">Все районы</option>
              {districts.map(district => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Табы для просмотра офисов в разных форматах */}
        <Tabs defaultValue="list">
          <TabsList className="mb-6">
            <TabsTrigger value="list">Список</TabsTrigger>
            <TabsTrigger value="map">Карта</TabsTrigger>
          </TabsList>
          
          <TabsContent value="list" className="space-y-6">
            {filteredOffices.length > 0 ? (
              filteredOffices.map(office => (
                <Card key={office.id} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <CardTitle>{office.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {office.address}
                        </CardDescription>
                      </div>
                      <LoadIndicator level={office.loadLevel} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="font-medium">Режим работы</p>
                          <p className="text-sm text-muted-foreground">{office.workHours}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 mr-2 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="font-medium">Телефон</p>
                          <p className="text-sm text-muted-foreground">{office.phone}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" /> 
                      <span>Специалистов: 12</span>
                      <Star className="h-4 w-4 ml-3 mr-1" /> 
                      <span>Рейтинг: 4.8/5</span>
                    </div>
                    <Button>Записаться на приём</Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">Офисы не найдены. Попробуйте изменить параметры поиска.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="map">
            <Card>
              <CardHeader>
                <CardTitle>Карта офисов МФЦ</CardTitle>
                <CardDescription>
                  Интерактивная карта всех офисов многофункциональных центров 
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted h-96 flex items-center justify-center rounded-md">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg font-medium mb-2">Карта офисов МФЦ</p>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                      В реальном приложении здесь была бы интерактивная карта с расположением всех офисов МФЦ
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Информационный блок */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Пиковые часы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">В эти часы наблюдается наибольшая загруженность офисов:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Понедельник и пятница: 9:00-11:00, 17:00-19:00</li>
                <li>Вторник-четверг: 13:00-15:00</li>
                <li>Суббота: 10:00-13:00</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Предварительная запись
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Запись позволяет вам:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Выбрать удобную дату и время</li>
                <li>Избежать ожидания в очереди</li>
                <li>Подготовить нужные документы заранее</li>
              </ul>
              <Button className="w-full mt-4">Записаться на приём</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Контактный центр
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Наши специалисты готовы ответить на все ваши вопросы:</p>
              <p className="font-bold text-lg mb-2">8-800-123-45-67</p>
              <p className="text-sm text-muted-foreground">Ежедневно с 8:00 до 20:00</p>
              <Button variant="outline" className="w-full mt-4">Обратный звонок</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Offices;
