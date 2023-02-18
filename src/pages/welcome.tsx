import { WomenOrder } from "../components/persons-item/womenOrder";
import "./welcome.css";
import "./template.css";
import { Link } from "react-router-dom";
function Welcome() {
  return (
    <main>
        <h1 className="page-title">Welcome</h1>
        <WomenOrder />
        <div className="app-description">
            <h1>BEBIRD</h1>
            <p>Your app to meditate and track your progress</p>
        </div>
        <div className="button-container">
            <Link className="btn btn-login" to="/login">Login</Link>
            <Link className="btn btn-login btn-register" to="#">Regiser</Link>
        </div>
    </main>
  );
}

export default Welcome;
