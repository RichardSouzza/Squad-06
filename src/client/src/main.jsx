import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contribuinte from './pages/Contribuinte';
import Login from './pages/Login';
import './assets/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/contribuinte" element={<Contribuinte />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
