'use client';
import { useState } from 'react';

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <button 
        onClick={() => {
          setIsOpen(true);
          setIsLoading(true);
        }}
        className="mt-12 px-10 py-4 border border-[#EAEAEA]/50 text-[#EAEAEA] text-sm tracking-[0.2em] uppercase hover:bg-[#EAEAEA] hover:text-[#1C1C1C] transition-all duration-500 cursor-pointer bg-transparent"
      >
        Записатися на консультацію
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl h-[85vh] bg-[#1C1C1C] rounded-xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)] border border-[#EAEAEA]/10">
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 text-white text-2xl hover:text-gray-400 p-2"
            >
              ✕
            </button>
            
            {/* 1. Заглушка, яка стоїть ПОВЕРХ iframe */}
            {isLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#1C1C1C]">
                <div className="w-10 h-10 border-4 border-gray-700 border-t-white rounded-full animate-spin mb-4"></div>
                <span className="text-sm tracking-widest uppercase text-gray-500">Завантаження...</span>
              </div>
            )}
            
            {/* 2. Контейнер для iframe, який завжди чорний */}
            <div className="w-full h-full bg-[#1C1C1C]">
              <iframe 
                src="https://booking.easyweek.com.ua/l-r-endokrinolog" 
                className={`w-full h-full border-0 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                title="Запис на консультацію"
                onLoad={() => {
                  // Збільшуємо час, щоб "білий спалах" всередині iframe 
                  // пройшов під нашою заглушкою
                  setTimeout(() => {
                    setIsLoading(false);
                  }, 800); // 800мс — це час, коли EasyWeek точно вже прогрузить свій CSS
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}