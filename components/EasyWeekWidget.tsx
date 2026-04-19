'use client';
import { useEffect } from 'react';

export default function EasyWeekWidget() {
  useEffect(() => {
    // Функція, яка запустить віджет
    const initWidget = () => {
      if (window.EasyWeekWidget) {
        new window.EasyWeekWidget({
          url: 'https://booking.easyweek.com.ua/l-r-endokrinolog',
          button: {
            text: 'Онлайн-запис',
            showText: true,
            color: '#ffffff',
            background: '#36ab48',
            textColor: '#383868',
            textBackground: '#ffffff'
          }
        });
      }
    };

    // Якщо скрипт вже завантажений — запускаємо, якщо ні — завантажуємо
    if (window.EasyWeekWidget) {
      initWidget();
    } else {
      const script = document.createElement('script');
      script.src = 'https://booking.easyweek.com.ua/widget.js';
      script.async = true;
      script.onload = initWidget;
      document.body.appendChild(script);
    }
  }, []);

  return null;
}