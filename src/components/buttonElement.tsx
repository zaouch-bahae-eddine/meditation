export const ButtonElement = (props: any) => {
    return(
        <button type={props.type ? 'submit': "button"} className={"btn " + props.class.join(' ')} id={props.id}>{props.label}</button>
    );
}