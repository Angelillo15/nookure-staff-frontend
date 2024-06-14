import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/global.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ThemeProvider } from './components/provider/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
