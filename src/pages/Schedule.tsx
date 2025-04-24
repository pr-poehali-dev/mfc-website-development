
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Schedule = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Запись на приём</h1>
        <p className="mb-8">Страница с расписанием и формой записи будет доступна в следующих обновлениях.</p>
      </main>
      
      <Footer />
    </div>
  );
};

export default Schedule;
