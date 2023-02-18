import "./inputElement.css";
export const InputElement = (props: any) => {
    return (
        <div className="input-element">
            <label>{props.label}</label>
            <input type={props.type} name={props.name} id={props.id} />
        </div>
    );
}