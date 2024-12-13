
import Formulario from "../components/Formulario";
import Loggin from "../components/Loggin";
import SingIn from "../components/SingIn";
import "./Login.css"


function Login() {

  
  return (
    <div className="login-page">
      <Formulario className ="formulario" />
      
      <Loggin className = "espalda"/>

      
    </div>
  );
}
export default Login;
