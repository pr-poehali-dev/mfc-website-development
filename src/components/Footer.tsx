
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">МФЦ "Мои Документы"</h3>
            <p className="mb-2">Единый центр государственных и муниципальных услуг</p>
            <p>© {new Date().getFullYear()} Все права защищены</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Главная</Link></li>
              <li><Link to="/services" className="hover:underline">Услуги</Link></li>
              <li><Link to="/schedule" className="hover:underline">Расписание</Link></li>
              <li><Link to="/documents" className="hover:underline">Документы</Link></li>
              <li><Link to="/offices" className="hover:underline">Офисы</Link></li>
              <li><Link to="/contacts" className="hover:underline">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="mb-2">Единый телефон: 8-800-123-45-67</p>
            <p className="mb-2">Email: info@mfc.ru</p>
            <p>Режим работы: Пн-Пт с 8:00 до 20:00, Сб с 9:00 до 16:00</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
