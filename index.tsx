import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
import LanguageSelector from './components/LanguageSelector';
import Navbar from './components/Navbar';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <LanguageProvider>
        <div className="relative z-0">
          <Navbar />
          <LanguageSelector />
          <App />
        </div>
      </LanguageProvider>
    </React.StrictMode>
  );
}