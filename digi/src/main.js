import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import i18n dan I18nextProvider
import i18n from './i18n.js'; // Pastikan file i18n.js sudah dibuat di folder src/
import { I18nextProvider } from 'react-i18next';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);