import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './index.css'; 

// Importar tus componentes
import Login from './components/Login';
import Home from './components/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Ruta para la página de Login */}
        <Route path="/" element={<Login />} />
        {/* Ruta para la página de Home */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
