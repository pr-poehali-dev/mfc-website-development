import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const timeSlots = [
  "9:00", "9:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"
];

const Schedule = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setSelectedTime(null); // Reset time selection when date changes
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Запись на приём в МФЦ</h1>
        <p className="text-center mb-8 max-w-3xl mx-auto">
          Выберите удобную дату и время для посещения МФЦ. После бронирования вы получите подтверждение на указанный email.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalendarIcon className="mr-2 h-5 w-5" />
                Выберите дату
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                className="rounded-md border"
                disabled={(date) => {
                  // Disable weekends and past dates
                  const day = date.getDay();
                  const isWeekend = day === 0 || day === 6;
                  const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
                  return isWeekend || isPast;
                }}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Выберите время
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!date ? (
                <p className="text-center text-muted-foreground py-8">Сначала выберите дату</p>
              ) : (
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      className={cn(
                        "text-center py-2",
                        selectedTime === time && "bg-primary text-primary-foreground"
                      )}
                      onClick={() => handleTimeSelect(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {date && selectedTime && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Подтверждение записи</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Вы выбрали дату: <strong>{date.toLocaleDateString('ru-RU')}</strong> и время: <strong>{selectedTime}</strong>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">ФИО</label>
                  <input 
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Иванов Иван Иванович"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Телефон</label>
                  <input 
                    type="tel"
                    className="w-full p-2 border rounded-md"
                    placeholder="+7 (___) ___-__-__"
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
                <div>
                  <label className="block text-sm font-medium mb-1">Тип услуги</label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="">Выберите услугу</option>
                    <option value="passport">Оформление паспорта</option>
                    <option value="registration">Регистрация недвижимости</option>
                    <option value="benefits">Социальные выплаты</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
              </div>
              
              <Button className="w-full md:w-auto">Подтвердить запись</Button>
            </CardContent>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Schedule;
