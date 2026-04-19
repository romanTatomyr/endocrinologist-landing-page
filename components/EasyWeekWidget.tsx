'use client';
import { useEffect } from 'react';

export default function EasyWeekWidget() {
  useEffect(() => {
    // Якщо скрипт вже є, не створюємо дублікат
    if (document.getElementById('easyweek-script')) return;

    const script = document.createElement('script');
    script.id = 'easyweek-script';
    script.src = 'https://booking.easyweek.com.ua/widget.js';
    script.async = true;
    
    script.onload = () => {
      // Ініціалізація в МАНУАЛЬНОМУ режимі
      // Це головна фішка: віджет "спить" і чекає на команду .open()
      (window as any).ewWidget = new (window as any).EasyWeekWidget({
        url: 'https://booking.easyweek.com.ua/l-r-endokrinolog',
        trigger: 'manual', 
      });
    };

    document.body.appendChild(script);
  }, []);

  return null; // Цей компонент нічого не малює, він просто завантажує скрипт
}