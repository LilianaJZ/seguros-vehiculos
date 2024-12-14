import React, { useState } from "react";
import StartStopButton from "./StarEngine";

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    // Aquí podrías manejar la lógica de autenticación.
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={formData.username}
          onChange={handleChange}
          required
          
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
          
        />
      </div>

      {/* Renderiza el botón StartEngine */}
      <div style={{ marginTop: "20px" }}>
        <StartStopButton />
      </div>
    </form>
  );
};

export default LoginForm;
