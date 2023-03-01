import { BackLink } from "../components/backLink"
import { ButtonElement } from "../components/buttonElement"
import { InputElement } from "../components/inputElement"
import { WomenLogin } from "../components/persons-item/womenLogin"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { login } from '../services/auth-service'
import { useNavigate } from 'react-router-dom'

type Inputs = {
    email: string;
    password: string;
};

export const Login = () => {
    const navigate = useNavigate()
    const shema = yup.object().shape({
        email: yup.string().email('Not correcte format email').required(),
        password: yup.string().required().min(3, '3 Chars is the min length possible')
    })

    const {register, handleSubmit, formState: {errors}, setError} = useForm<Inputs>({
        resolver:  yupResolver(shema)
    })
    const onSubmit = async (data: Inputs) => {
        login(data.email, data.password)
        .then(currentUser => {
            navigate('/profile')
        })
        .catch(errors => {
            if(errors.response.status == 404){
                //email(user) not founded
                setError("email", {type: 'emailNotFounde', message:"email not find"})
            } else if(errors.response.status == 401){
                //Password incorrect
                setError("password", {type: 'passwordNotCorrect', message:"incorrect password"})
            }
        })
    }

    return(
        <main>
            <BackLink path="/"/>
            <div className="max-w-300 margin-center p-12">
                <WomenLogin />
            </div>
            <h1 className="pl-0-important p-16 color-dark-mauve">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputElement id="email" name="email" label="Email" type="text" register={register("email")} error={errors.email?.message} />
                <InputElement id="password" name="password" label="Password" type="password" register={register("password")} error={errors.password?.message} />
                <ButtonElement type="submit" id="submit-login" label="Login" class={['background-light-mauve', 'p-16', 'mt-12']} />
            </form>
        </main>
    )
}