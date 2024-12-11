import "../pages/Login.css"

function FormularioDos() {
    return (
        <div className="formularioDos">
          <form action="" className="formDos">
            <input type="text" placeholder="Usuario" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Contraseña" className="input" />
            <button type="submit" className="btn">Enviar</button>
          </form>
        </div>
      );
    
}
export default FormularioDos;