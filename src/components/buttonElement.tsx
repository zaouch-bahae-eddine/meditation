export const ButtonElement = (props: any) => {
    return(
        <button type={props.type ? 'button': props.type} className={"btn " + props.class.join(' ')} id={props.id}>{props.label}</button>
    );
}