import { WomenOrder } from "../components/persons-item/womenOrder";
import "./welcome.css";
import "./template.css";
import { Link } from "react-router-dom";
function Welcome() {
  return (
    <main>
        <h1 className="color-dark-pink text-center">Hi !</h1>
        <div className="p-12">
            <WomenOrder />
        </div>
        <div className="app-description">
            <h1 className="color-dark-pink text-center">BEBIRD</h1>
            <p>Your app to meditate and track your progress</p>
        </div>
        <div className="button-container">
            <Link className="btn btn-login p-12" to="/login">Login</Link>
            <Link className="btn btn-login p-12" to="#">Regiser</Link>
        </div>
    </main>
  );
}

export default Welcome;
