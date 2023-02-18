import { ButtonElement } from "../components/buttonElement";
import { InputElement } from "../components/inputElement";
import { WomenOrder } from "../components/persons-item/womenOrder";

export const Login = () => {
    return(
        <main>
            <WomenOrder />
            <h1 className="page-title float-left p-0 color-dark-mauve">Login</h1>
            <form>
                <InputElement id="email" name="email" label="Email" type="text" />
                <InputElement id="password" name="password" label="Password" type="password" />
                <ButtonElement id="submit-login" label="Login" class={['background-light-mauve', 'p-16']} />
            </form>
        </main>
    );
}