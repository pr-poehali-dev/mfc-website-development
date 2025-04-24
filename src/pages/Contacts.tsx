import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  MessageSquare
} from "lucide-react";

const Contacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Контакты МФЦ</h1>
        <p className="text-center mb-8 max-w-3xl mx-auto">
          Свяжитесь с нами удобным для вас способом. Мы готовы ответить на все ваши вопросы о государственных и муниципальных услугах.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                Телефон
              </CardTitle>
              <CardDescription>Свяжитесь с нами по телефону</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="font-bold text-xl mb-2">8-800-123-45-67</p>
              <p className="text-sm text-muted-foreground mb-6">Звонок бесплатный по всей России</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Режим работы контактного центра:</p>
                <p>Пн-Пт: с 8:00 до 20:00</p>
                <p>Сб: с 9:00 до 16:00</p>
                <p>Вс: выходной</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                Email
              </CardTitle>
              <CardDescription>Напишите нам электронное письмо</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="font-bold text-xl mb-2">info@mfc.ru</p>
              <p className="text-sm text-muted-foreground mb-6">Для общих вопросов</p>
              <p className="font-bold text-lg mb-2">support@mfc.ru</p>
              <p className="text-sm text-muted-foreground mb-6">Техническая поддержка</p>
              <p className="text-sm text-muted-foreground">Мы отвечаем на электронные письма в течение 24 часов в рабочие дни.</p>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-primary" />
                Онлайн-чат
              </CardTitle>
              <CardDescription>Получите ответ в реальном времени</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-sm text-muted-foreground mb-6">
                Наши специалисты готовы ответить на ваши вопросы в онлайн-чате. Среднее время ожидания ответа — 3 минуты.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <p>Часы работы онлайн-консультантов:</p>
                <p>Ежедневно с 9:00 до 18:00</p>
              </div>
              <Button className="mt-auto">Начать чат</Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Головной офис МФЦ</CardTitle>
                <CardDescription>Адрес центрального офиса</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Ленина, д. 25</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <Clock className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 8:00-20:00</p>
                    <p className="text-muted-foreground">Сб: 9:00-16:00</p>
                    <p className="text-muted-foreground">Вс: выходной</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <Phone className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">Телефон приемной</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="bg-muted h-64 rounded-md flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg font-medium mb-2">Карта проезда</p>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                      В реальном приложении здесь была бы интерактивная карта с расположением головного офиса МФЦ
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>Социальные сети</CardTitle>
                <CardDescription>Следите за новостями МФЦ</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  <a 
                    href="#" 
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-colors"
                  >
                    <Facebook className="h-6 w-6 mr-3 text-blue-600" />
                    <div>
                      <p className="font-medium">Facebook</p>
                      <p className="text-sm text-muted-foreground">@mfc.official</p>
                    </div>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-colors"
                  >
                    <Twitter className="h-6 w-6 mr-3 text-blue-400" />
                    <div>
                      <p className="font-medium">Twitter</p>
                      <p className="text-sm text-muted-foreground">@mfc_news</p>
                    </div>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-colors"
                  >
                    <Instagram className="h-6 w-6 mr-3 text-pink-600" />
                    <div>
                      <p className="font-medium">Instagram</p>
                      <p className="text-sm text-muted-foreground">@mfc_official</p>
                    </div>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-colors"
                  >
                    <Youtube className="h-6 w-6 mr-3 text-red-600" />
                    <div>
                      <p className="font-medium">YouTube</p>
                      <p className="text-sm text-muted-foreground">МФЦ Канал</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Отправить обращение</CardTitle>
            <CardDescription>Заполните форму, и мы свяжемся с вами в ближайшее время</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="feedback">
              <TabsList className="mb-6 w-full grid grid-cols-3">
                <TabsTrigger value="feedback">Обратная связь</TabsTrigger>
                <TabsTrigger value="complaint">Жалоба</TabsTrigger>
                <TabsTrigger value="suggestion">Предложение</TabsTrigger>
              </TabsList>
              
              <TabsContent value="feedback">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Имя</label>
                      <input 
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email"
                        className="w-full p-2 border rounded-md"
                        placeholder="example@mail.ru"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Тема обращения</label>
                    <input 
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Укажите тему обращения"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Сообщение</label>
                    <textarea 
                      rows={4}
                      className="w-full p-2 border rounded-md"
                      placeholder="Опишите ваш вопрос или предложение"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox"
                      id="consent"
                      className="mr-2"
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      Я согласен на обработку персональных данных
                    </label>
                  </div>
                  
                  <Button type="submit">Отправить сообщение</Button>
                </form>
              </TabsContent>
              
              <TabsContent value="complaint">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Имя</label>
                      <input 
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email"
                        className="w-full p-2 border rounded-md"
                        placeholder="example@mail.ru"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Филиал МФЦ</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="">Выберите филиал</option>
                      <option>МФЦ Центральный</option>
                      <option>МФЦ Южный</option>
                      <option>МФЦ Северный</option>
                      <option>МФЦ Западный</option>
                      <option>МФЦ Восточный</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Описание жалобы</label>
                    <textarea 
                      rows={4}
                      className="w-full p-2 border rounded-md"
                      placeholder="Подробно опишите ситуацию, указав дату и время посещения МФЦ"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Прикрепить файл</label>
                    <input 
                      type="file" 
                      className="w-full p-2 border rounded-md"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Можно прикрепить фото, скан документа или скриншот (макс. размер: 5 МБ)</p>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox"
                      id="consent-complaint"
                      className="mr-2"
                    />
                    <label htmlFor="consent-complaint" className="text-sm text-muted-foreground">
                      Я согласен на обработку персональных данных
                    </label>
                  </div>
                  
                  <Button type="submit">Отправить жалобу</Button>
                </form>
              </TabsContent>
              
              <TabsContent value="suggestion">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Имя</label>
                      <input 
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email"
                        className="w-full p-2 border rounded-md"
                        placeholder="example@mail.ru"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Категория предложения</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="">Выберите категорию</option>
                      <option>Улучшение качества обслуживания</option>
                      <option>Новые услуги</option>
                      <option>Оптимизация процессов</option>
                      <option>Техническое оснащение</option>
                      <option>Другое</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Ваше предложение</label>
                    <textarea 
                      rows={4}
                      className="w-full p-2 border rounded-md"
                      placeholder="Опишите ваше предложение по улучшению работы МФЦ"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox"
                      id="consent-suggestion"
                      className="mr-2"
                    />
                    <label htmlFor="consent-suggestion" className="text-sm text-muted-foreground">
                      Я согласен на обработку персональных данных
                    </label>
                  </div>
                  
                  <Button type="submit">Отправить предложение</Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contacts;
