import "../pages/Login.css"
import StartStopButton from "./StarEngine";

function FormularioDos() {
    return (
        <div className="formularioDos">
          <form action="" className="formDos">
            <input type="text" placeholder="Usuario" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Contraseña" className="input" />
            <StartStopButton/>
          </form>
        </div>
      );
    
}
export default FormularioDos;