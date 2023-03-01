import "./inputElement.css";
import { MdErrorOutline } from "react-icons/md";

export const InputElement = (props: any) => {
    return (
        <div className="input-element">
            <label>{props.label}</label>
            {props.error ? <p className="error-msg"><MdErrorOutline/> {props.error}</p> : ''}
            <input type={props.type} name={props.name} id={props.id} {...props.register} />

        </div>
    );
}