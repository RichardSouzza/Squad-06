import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contribuinte from './pages/Contribuinte';
import DAM from './pages/DAM';
import Login from './pages/Login';
import Verification from './pages/Verification';
import PINVerification from './pages/PINVerification';
import './assets/styles/index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/pin-verification" element={<PINVerification />} />
      <Route path="/client" element={<Contribuinte />} />
      <Route path="/client/dam" element={<DAM />} />
    </Routes>
  </BrowserRouter>
);
