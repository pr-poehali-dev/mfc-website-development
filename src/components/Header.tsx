
import { Link } from "react-router-dom";
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuLink 
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img src="/logo-b.svg" alt="МФЦ Логотип" className="h-10 w-auto mr-3" />
          <h1 className="text-2xl font-bold">МФЦ "Мои Документы"</h1>
        </div>
        
        <NavigationMenu className="max-w-full md:max-w-none overflow-x-auto">
          <NavigationMenuList className="flex space-x-1">
            <NavigationMenuItem>
              <Link to="/" className={cn(
                "block py-2 px-4 text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors"
              )}>
                Главная
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/services" className={cn(
                "block py-2 px-4 text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors"
              )}>
                Услуги
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/schedule" className={cn(
                "block py-2 px-4 text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors"
              )}>
                Расписание
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/documents" className={cn(
                "block py-2 px-4 text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors"
              )}>
                Документы
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/offices" className={cn(
                "block py-2 px-4 text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors"
              )}>
                Офисы
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contacts" className={cn(
                "block py-2 px-4 text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors"
              )}>
                Контакты
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
