import { BackLink } from "../components/backLink";
import { ButtonElement } from "../components/buttonElement";
import { InputElement } from "../components/inputElement";
import { WomenOrder } from "../components/persons-item/womenOrder";

export const SignUp = () => {
    return(
        <main>
            <BackLink path="/"/>
            <div className="max-w-300 margin-center p-12 pb-0-important">
                <WomenOrder />
            </div>
            <h1 className="pl-0-important pt-0-important p-12 color-dark-mauve">Sign up</h1>
            <form>
                <InputElement id="email" name="email" label="Email" type="text" />
                <InputElement id="password" name="password" label="Password" type="password" />
                <InputElement id="confirmation" name="confirmation" label="Password confirmation" type="password" />
                <ButtonElement id="submit-login" label="Sign up" class={['background-light-mauve', 'p-16']} />
            </form>
        </main>
    );
}