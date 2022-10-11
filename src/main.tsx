import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Toaster
      position='top-right'
      toastOptions={{
        duration: 2000,
      }}
    />
    <App />
  </React.StrictMode>
);
