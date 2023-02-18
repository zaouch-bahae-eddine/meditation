import { ButtonElement } from "../components/buttonElement";
import { InputElement } from "../components/inputElement";
import { WomenOrder } from "../components/persons-item/womenOrder";

export const Login = () => {
    return(
        <main>
            <div className="max-w-300 margin-center p-12">
                <WomenOrder />
            </div>
            <h1 className="pl-0-important p-16 color-dark-mauve">Login</h1>
            <form>
                <InputElement id="email" name="email" label="Email" type="text" />
                <InputElement id="password" name="password" label="Password" type="password" />
                <ButtonElement id="submit-login" label="Login" class={['background-light-mauve', 'p-16']} />
            </form>
        </main>
    );
}