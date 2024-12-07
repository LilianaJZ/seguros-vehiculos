import React, { useState } from 'react';
import "../index.css";

function Login() {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="container" id="container">
    {/* Formulario de registro */}
    <div className="form-container sign-up">
      <form>
        <h1>Registrarse</h1>
        <label htmlFor="registro-nombre">Nombre</label>
        <div className="container-input">
          <input
            type="text"
            placeholder="Ingrese su nombre"
            id="registro-nombre"
          />
        </div>
        <label htmlFor="registro-correo">Crear usuario</label>
        <div className="container-input">
          <input
            type="text"
            placeholder="Ingrese su correo"
            id="registro-correo"
          />
        </div>
        <label htmlFor="registro-contra">Crear contraseña</label>
        <div className="container-input">
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            id="registro-contra"
          />
        </div>
        <button type="button" className="btn-registrar">
          REGISTRAR
        </button>
      </form>
    </div>

    {/* Formulario de inicio de sesión */}
    <div className="form-container sign-in">
      <form>
        <h1 className="h1">Ingresar al Sistema</h1>
        <label htmlFor="login-correo">Usuario</label>
        <div className="container-input">
          <input
            type="text"
            placeholder="Ingrese su correo"
            id="login-correo"
          />
        </div>
        <label htmlFor="login-contra">Contraseña</label>
        <div className="container-input">
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            id="login-contra"
          />
        </div>
        <button type="button" className="btn-login">
          INICIAR SESIÓN
        </button>
      </form>
    </div>

    {/* Contenedor de alternancia */}
    <div className="toggle-container">
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1>¡BIENVENIDO!</h1>
          <p>
            Nos alegra verte de vuelta. Vamos a calcular tu seguro para
            ofrecerte la mejor opción disponible.
          </p>
          <button className="hidden" id="login">
            INICIAR SESIÓN
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h3>¡HOLA!</h3>
          <p>
            ¡Bienvenido a nuestro portal de seguros! Aquí te ayudaremos a
            encontrar la cobertura ideal.
          </p>
          <button className="hidden" id="register">
            REGISTRAR
          </button>
        </div>
      </div>
    </div>
  </div>
);
}

export default Login;
