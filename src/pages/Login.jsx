import Formulario from "../components/Formulario";
import SingIn from "../components/SingIn";
import "./Login.css"


function Login() {
  return (
    <div className="login-page">
      <Formulario className ="formulario" />
      <SingIn className = "espalda" />

      
    </div>
  );
}
export default Login;
