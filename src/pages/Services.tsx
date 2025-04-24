
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Услуги МФЦ</h1>
        <p className="mb-8">Страница с услугами МФЦ будет доступна в следующих обновлениях.</p>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
