
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Контактная информация</h1>
        <p className="mb-8">Страница с контактной информацией будет доступна в следующих обновлениях.</p>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contacts;
