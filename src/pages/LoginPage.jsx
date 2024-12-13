import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import "../components/LoginForm.css";


function LoginPage() {
    return (
      <div className="page-container">
        <div className="box">
          <h2>Iniciar Sesión</h2>
          <LoginForm />
          <p className="redirect-text">
            ¿No tienes cuenta?{" "}
            <Link to="/registro" className="redirect-link">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    );
  }

export default LoginPage;