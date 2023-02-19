import { WomenOrder } from "../components/persons-item/womenOrder";
import "./welcome.css";
import "./template.css";
import { Link } from "react-router-dom";
function Welcome() {
  return (
    <main>
        <h1 className="color-dark-pink text-center p-12">Salam !</h1>
        <div className="p-12">
            <WomenOrder />
        </div>
        <div className="app-description">
            <h1 className="color-dark-pink text-center">BEBIRD</h1>
            <p>Your app to meditate and track your progress</p>
        </div>
        <form className="button-container p-12">
            <Link className="btn btn-login p-12 m-12" to="/login">Login</Link>
            <Link className="btn btn-login p-12" to="/sign-up">Sign up</Link>
        </form>
    </main>
  );
}

export default Welcome;
