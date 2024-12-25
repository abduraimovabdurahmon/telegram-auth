
import { useEffect, useRef } from 'react';
import './App.css'

function App() {
  const telegramWrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://telegram.org/js/telegram-widget.js?22';
    scriptElement.setAttribute('data-telegram-login', 'getsmsandroidbot');
    scriptElement.setAttribute('data-size', 'large');
    scriptElement.setAttribute('data-onauth', 'loginViaTelegram(user)');
    scriptElement.async = true;
  
    if (telegramWrapperRef.current) {
      telegramWrapperRef.current.appendChild(scriptElement);
    }
  }, []);

  (window as any).loginViaTelegram = (user: any) => {
    console.log('user', user);
  }

  return (
    <> 
      <div ref={telegramWrapperRef}></div>
    </>
  )
}

export default App
