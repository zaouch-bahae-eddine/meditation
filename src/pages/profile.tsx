import { WomenOrder } from "../components/persons-item/womenOrder";
import "./welcome.css";
import "./template.css";
import { ButtonElement } from "../components/buttonElement";
import { BackLink } from "../components/backLink";
import { useCurrentUser } from "../hooks/useCurrentUser";


function Profile() {
    const currentUser = useCurrentUser()
    console.log(currentUser)
  return (
    <main>
        <BackLink path="/"/>
        <h1 className="color-dark-pink text-center p-12">Profile</h1>
        <div className="p-12">
            <WomenOrder />
        </div>
        <div className="app-description">
            <h1 className="color-dark-pink text-center">{currentUser?.email}</h1>
        </div>
        <form className="button-container p-12">
        <ButtonElement type="button" id="submit-login" label="Save" class={['background-light-mauve', 'p-16', 'mt-12']} />
        </form>
    </main>
  );
}

export default Profile;
