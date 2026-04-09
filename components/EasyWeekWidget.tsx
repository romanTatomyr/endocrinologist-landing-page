import { useEffect } from 'react';

// Повідомляємо TypeScript, що у об'єкта window з'являться нові властивості від EasyWeek
declare global {
  interface Window {
    EasyWeekWidget: any;
    ewWidget: any;
  }
}

const EasyWeekWidget = () => {
  useEffect(() => {
    // Запобігаємо повторному додаванню скрипта при ререндері
    if (document.getElementById('easyweek-script')) return;

    const script = document.createElement('script');
    script.id = 'easyweek-script';
    script.src = "https://booking.easyweek.com.ua/widget.js";
    script.async = true;

    script.onload = () => {
      if (window.EasyWeekWidget) {
        // Створюємо екземпляр віджета
        window.ewWidget = new window.EasyWeekWidget({
          url: 'https://booking.easyweek.com.ua/l-r-endokrinolog',
          // Вмикаємо прихований режим, щоб використовувати власні кнопки на сайті
          button: { 
            show: false // Стандартна кнопка EasyWeek не буде заважати дизайну
          }
        });
      }
    };

    document.head.appendChild(script);

    // Очистка при видаленні компонента
    return () => {
      const existingScript = document.getElementById('easyweek-script');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      // Видаляємо сліди віджета з DOM, якщо вони були створені
      const widgetNodes = document.querySelectorAll('.ew-widget, [class*="easyweek"]');
      widgetNodes.forEach(node => node.remove());
    };
  }, []);

  return null; // Компонент працює у фоні
};

export default EasyWeekWidget;