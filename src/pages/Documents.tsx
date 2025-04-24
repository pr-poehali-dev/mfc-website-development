import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

const Documents = () => {
  const documentForms = [
    {
      id: "form-1",
      title: "Заявление на выдачу паспорта РФ",
      description: "Форма для получения/замены паспорта гражданина РФ",
      category: "personal",
      fileName: "passport_form.pdf",
    },
    {
      id: "form-2",
      title: "Заявление о регистрации по месту жительства",
      description: "Форма для регистрации по месту постоянного проживания",
      category: "registration",
      fileName: "registration_form.pdf",
    },
    {
      id: "form-3",
      title: "Заявление на получение загранпаспорта",
      description: "Форма для оформления загранпаспорта нового образца",
      category: "personal",
      fileName: "foreign_passport_form.pdf",
    },
    {
      id: "form-4",
      title: "Регистрация права собственности",
      description: "Бланк заявления о государственной регистрации прав",
      category: "property",
      fileName: "property_registration_form.pdf",
    },
    {
      id: "form-5",
      title: "Заявление на детское пособие",
      description: "Для получения ежемесячного пособия на ребенка",
      category: "benefits",
      fileName: "child_benefit_form.pdf",
    },
    {
      id: "form-6",
      title: "Регистрация ИП",
      description: "Заявление на регистрацию физического лица в качестве ИП",
      category: "business",
      fileName: "business_registration_form.pdf",
    }
  ];

  const handleDownload = (fileName: string) => {
    // В реальном приложении здесь была бы логика для скачивания файла
    console.log(`Downloading ${fileName}`);
    alert(`Скачивание файла ${fileName}`);
  };

  const handlePrint = (fileName: string) => {
    // В реальном приложении здесь была бы логика для печати файла
    console.log(`Printing ${fileName}`);
    alert(`Печать файла ${fileName}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Документы и формы заявлений</h1>
        <p className="text-center mb-8 max-w-3xl mx-auto">
          Здесь вы можете найти бланки заявлений и образцы документов, необходимых для получения услуг в МФЦ
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid grid-cols-3 md:grid-cols-6">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="personal">Личные</TabsTrigger>
                <TabsTrigger value="registration">Прописка</TabsTrigger>
                <TabsTrigger value="property">Имущество</TabsTrigger>
                <TabsTrigger value="benefits">Пособия</TabsTrigger>
                <TabsTrigger value="business">Бизнес</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {documentForms.map(form => (
                    <Card key={form.id} className="flex flex-col h-full">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="flex items-center">
                              <FileText className="mr-2 h-5 w-5 text-primary" />
                              {form.title}
                            </CardTitle>
                            <CardDescription>{form.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow"></CardContent>
                      <div className="p-4 pt-0 flex space-x-2 mt-auto">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() => handleDownload(form.fileName)}
                        >
                          <Download className="mr-1 h-4 w-4" />
                          Скачать
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() => handlePrint(form.fileName)}
                        >
                          <Printer className="mr-1 h-4 w-4" />
                          Печать
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Табы для остальных категорий с фильтрацией */}
              {["personal", "registration", "property", "benefits", "business"].map(category => (
                <TabsContent key={category} value={category} className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {documentForms
                      .filter(form => form.category === category)
                      .map(form => (
                        <Card key={form.id} className="flex flex-col h-full">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div>
                                <CardTitle className="flex items-center">
                                  <FileText className="mr-2 h-5 w-5 text-primary" />
                                  {form.title}
                                </CardTitle>
                                <CardDescription>{form.description}</CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="flex-grow"></CardContent>
                          <div className="p-4 pt-0 flex space-x-2 mt-auto">
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1"
                              onClick={() => handleDownload(form.fileName)}
                            >
                              <Download className="mr-1 h-4 w-4" />
                              Скачать
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1"
                              onClick={() => handlePrint(form.fileName)}
                            >
                              <Printer className="mr-1 h-4 w-4" />
                              Печать
                            </Button>
                          </div>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Часто задаваемые вопросы</CardTitle>
                <CardDescription>Ответы на распространенные вопросы о документах</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Какие документы нужны для получения паспорта?</AccordionTrigger>
                    <AccordionContent>
                      Для получения паспорта необходимо предоставить: заявление, свидетельство о рождении, две фотографии 3,5x4,5 см и квитанцию об оплате госпошлины.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Как заполнять заявление на регистрацию?</AccordionTrigger>
                    <AccordionContent>
                      Заявление необходимо заполнять печатными буквами, чернилами черного или синего цвета. Исправления не допускаются. Подписи должны быть проставлены в присутствии сотрудника МФЦ.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Можно ли распечатать бланки дома?</AccordionTrigger>
                    <AccordionContent>
                      Да, вы можете скачать бланки с нашего сайта и распечатать их на принтере. Важно использовать бумагу формата А4 и распечатывать без масштабирования.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Как долго рассматривается заявление?</AccordionTrigger>
                    <AccordionContent>
                      Сроки рассмотрения зависят от типа услуги. Обычно это от 5 до 30 рабочих дней. Точные сроки указаны в описании каждой услуги.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Что делать, если я ошибся в заявлении?</AccordionTrigger>
                    <AccordionContent>
                      Если вы обнаружили ошибку, необходимо заполнить новый бланк заявления. Исправления в документах не допускаются.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Помощь в заполнении</CardTitle>
                <CardDescription>Специалисты МФЦ помогут вам заполнить все необходимые документы</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Если у вас возникли трудности с заполнением документов, вы можете:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Обратиться к специалисту МФЦ лично</li>
                  <li>Позвонить по телефону горячей линии</li>
                  <li>Получить консультацию в чате на нашем сайте</li>
                </ul>
                <Button className="w-full">Получить консультацию</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documents;
