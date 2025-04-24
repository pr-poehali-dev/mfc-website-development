import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Типы и данные услуг
type Service = {
  id: string;
  title: string;
  description: string;
  category: string;
  processingTime: string;
  cost: string;
  documents: string[];
};

const services: Service[] = [
  {
    id: "passport-rf",
    title: "Паспорт гражданина РФ",
    description: "Оформление, замена и восстановление паспорта гражданина Российской Федерации",
    category: "documents",
    processingTime: "10 рабочих дней",
    cost: "300 ₽",
    documents: [
      "Заявление о выдаче паспорта",
      "Свидетельство о рождении",
      "Фотографии 3.5 x 4.5 см (2 шт)",
      "Квитанция об оплате госпошлины"
    ]
  },
  {
    id: "foreign-passport",
    title: "Загранпаспорт",
    description: "Оформление заграничного паспорта старого и нового образца",
    category: "documents",
    processingTime: "30 календарных дней",
    cost: "5000 ₽ (новый), 2000 ₽ (старый)",
    documents: [
      "Заявление о выдаче загранпаспорта",
      "Паспорт гражданина РФ",
      "Фотографии",
      "Квитанция об оплате госпошлины",
      "Старый загранпаспорт (при наличии)"
    ]
  },
  {
    id: "property-registration",
    title: "Регистрация недвижимости",
    description: "Государственная регистрация прав на недвижимое имущество и сделок с ним",
    category: "property",
    processingTime: "7-9 рабочих дней",
    cost: "2000 ₽",
    documents: [
      "Заявление о государственной регистрации",
      "Документ, удостоверяющий личность",
      "Документ, подтверждающий право (договор купли-продажи, дарения и т.д.)",
      "Квитанция об оплате госпошлины"
    ]
  },
  {
    id: "business-registration",
    title: "Регистрация ИП",
    description: "Государственная регистрация физического лица в качестве индивидуального предпринимателя",
    category: "business",
    processingTime: "3 рабочих дня",
    cost: "800 ₽",
    documents: [
      "Заявление по форме Р21001",
      "Паспорт гражданина РФ",
      "ИНН (при наличии)",
      "Квитанция об оплате госпошлины"
    ]
  },
  {
    id: "social-benefits",
    title: "Социальные выплаты",
    description: "Оформление пособий, льгот и других социальных выплат",
    category: "social",
    processingTime: "10 рабочих дней",
    cost: "Бесплатно",
    documents: [
      "Заявление на предоставление выплаты",
      "Паспорт гражданина РФ",
      "СНИЛС",
      "Документы, подтверждающие право на получение выплаты"
    ]
  },
  {
    id: "cadastral-registration",
    title: "Кадастровый учет",
    description: "Постановка на кадастровый учет земельных участков и объектов недвижимости",
    category: "property",
    processingTime: "5-7 рабочих дней",
    cost: "1500 ₽",
    documents: [
      "Заявление о постановке на кадастровый учет",
      "Паспорт заявителя",
      "Межевой план (для земельных участков)",
      "Технический план (для зданий, сооружений)"
    ]
  }
];

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Фильтрация услуг по поиску и категории
  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Услуги МФЦ</h1>
        <p className="text-center mb-8 max-w-3xl mx-auto">
          В МФЦ "Мои документы" вы можете получить более 300 государственных и муниципальных услуг по принципу "одного окна"
        </p>
        
        {/* Поиск */}
        <div className="relative max-w-md mx-auto mb-8">
          <Input 
            type="text"
            placeholder="Поиск услуг..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          {searchQuery && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="absolute right-2 top-1.5 h-6 w-6 p-0" 
              onClick={() => setSearchQuery("")}
            >
              ✕
            </Button>
          )}
        </div>
        
        {/* Табы для категорий услуг */}
        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 w-full">
            <TabsTrigger value="all">Все услуги</TabsTrigger>
            <TabsTrigger value="documents">Документы</TabsTrigger>
            <TabsTrigger value="property">Недвижимость</TabsTrigger>
            <TabsTrigger value="business">Бизнес</TabsTrigger>
            <TabsTrigger value="social">Соцподдержка</TabsTrigger>
            <TabsTrigger value="other">Прочее</TabsTrigger>
          </TabsList>
        </Tabs>
        
        {/* Список услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map(service => (
              <Card key={service.id} className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-2">
                    <div>
                      <span className="font-semibold">Срок оформления:</span> {service.processingTime}
                    </div>
                    <div>
                      <span className="font-semibold">Стоимость:</span> {service.cost}
                    </div>
                    <div>
                      <span className="font-semibold">Необходимые документы:</span>
                      <ul className="list-disc list-inside mt-1 text-sm">
                        {service.documents.map((doc, index) => (
                          <li key={index}>{doc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Записаться на приём</Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-muted-foreground">Услуги не найдены. Попробуйте изменить параметры поиска.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
