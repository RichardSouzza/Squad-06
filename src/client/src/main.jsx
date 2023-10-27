import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contribuinte from './pages/Contribuinte';
import Login from './pages/Login';
import './assets/styles/index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/client" element={<Contribuinte />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
