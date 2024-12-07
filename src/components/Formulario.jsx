function Formulario() {
    return (
      <div className="form-container">
        <form action="" className="form">
          <input type="text" placeholder="Usuario" className="input" />
          <input type="password" placeholder="Contraseña" className="input" />
          <button type="submit" className="btn">Enviar</button>
        </form>
      </div>
    );
  }
  export default Formulario;
  