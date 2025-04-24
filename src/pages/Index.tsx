
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, FileText, Calendar, Users, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Многофункциональный центр предоставления государственных и муниципальных услуг</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Получите государственные услуги быстро и удобно в режиме «одного окна»</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services" className="btn-secondary">Все услуги</Link>
              <Link to="/schedule" className="bg-white text-primary py-2 px-6 rounded-md hover:bg-opacity-90 transition-opacity">Записаться на приём</Link>
            </div>
          </div>
        </section>
        
        {/* Popular Services */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Популярные услуги</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="service-card">
                <CardHeader>
                  <CardTitle>Паспорт гражданина РФ</CardTitle>
                  <CardDescription>Получение, замена, восстановление</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Оформление паспорта по достижении 14 лет, замена по возрасту или в связи с изменением персональных данных.</p>
                </CardContent>
                <CardFooter>
                  <Link to="/services" className="text-primary hover:underline">Подробнее →</Link>
                </CardFooter>
              </Card>
              
              <Card className="service-card">
                <CardHeader>
                  <CardTitle>Регистрация недвижимости</CardTitle>
                  <CardDescription>Оформление прав собственности</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Государственная регистрация прав на недвижимое имущество и сделок с ним, постановка на кадастровый учет.</p>
                </CardContent>
                <CardFooter>
                  <Link to="/services" className="text-primary hover:underline">Подробнее →</Link>
                </CardFooter>
              </Card>
              
              <Card className="service-card">
                <CardHeader>
                  <CardTitle>Социальные выплаты</CardTitle>
                  <CardDescription>Пособия, льготы, компенсации</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Оформление социальных пособий, ежемесячных выплат на детей, субсидий на оплату жилищно-коммунальных услуг.</p>
                </CardContent>
                <CardFooter>
                  <Link to="/services" className="text-primary hover:underline">Подробнее →</Link>
                </CardFooter>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/services" className="btn-primary">Все услуги</Link>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Преимущества обращения в МФЦ</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Экономия времени</h3>
                <p>Получение услуг различных ведомств в одном месте без необходимости посещать множество организаций.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Профессиональная помощь</h3>
                <p>Квалифицированные сотрудники помогут с заполнением документов и проконсультируют по всем вопросам.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Удобный график работы</h3>
                <p>Центры работают в удобное время, включая выходные дни, с возможностью предварительной записи.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quick Links */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Быстрые ссылки</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/schedule" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center">
                <Calendar className="w-10 h-10 text-primary mr-4" />
                <div>
                  <h3 className="text-xl font-bold">Записаться на приём</h3>
                  <p className="text-muted-foreground">Выберите удобную дату и время</p>
                </div>
              </Link>
              
              <Link to="/offices" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center">
                <MapPin className="w-10 h-10 text-primary mr-4" />
                <div>
                  <h3 className="text-xl font-bold">Найти ближайший МФЦ</h3>
                  <p className="text-muted-foreground">Адреса и часы работы офисов</p>
                </div>
              </Link>
              
              <Link to="/documents" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center">
                <FileText className="w-10 h-10 text-primary mr-4" />
                <div>
                  <h3 className="text-xl font-bold">Перечень документов</h3>
                  <p className="text-muted-foreground">Что нужно для получения услуг</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        
        {/* News & Updates */}
        <section className="py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Новости и объявления</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Изменения в режиме работы</CardTitle>
                  <CardDescription>10 июня 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>В связи с праздничными днями меняется график работы центров МФЦ. 12 июня – выходной день, 13 июня – рабочий день по обычному графику.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Новая услуга в МФЦ</CardTitle>
                  <CardDescription>5 июня 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Теперь в МФЦ можно подать заявление на получение электронной подписи физического лица. Услуга доступна во всех филиалах.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
