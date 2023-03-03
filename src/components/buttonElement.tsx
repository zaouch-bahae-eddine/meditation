export const ButtonElement = (props: any) => {
    return(
        <button
        type={props.type ? props.type : "button"}
        className={"btn " + props.class.join(' ')}
        id={props.id}
        onClick={props.onClick}>{props.label}</button>
    );
}