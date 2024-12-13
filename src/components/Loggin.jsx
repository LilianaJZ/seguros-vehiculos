import { Link, useNavigate } from "react-router-dom";
import "../pages/Login.css"


function Loggin() {

  let redireccion = useNavigate();
  const handleClick = () => {
    redireccion("/signin")
  }

  return (
    <div className="espalda">

      <button className="btn btn2" onClick={handleClick} >Registrarse</button>

    </div>
  );
}
export default Loggin;
