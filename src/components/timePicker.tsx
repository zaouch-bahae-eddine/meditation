import { ButtonElement } from "./buttonElement"

const TimePicker = (props: any) => {
    return (
        <form className="button-container p-12">
        min-douzen
        <input type="number" className="min-douzen" autoFocus onChange={(event) => props.handleMinDouzenInputChange(event)}/>
        min-uint
        <input type="number" className="min-unit" onChange={(event) => props.handleMinUnitInputChange(event)}/>
        sec-douzen
        <input type="number" className="sec-douzen" onChange={(event) => props.handleSecDouzenInputChange(event)}/>
        sec-unit
        <input type="number" className="sec-unit" onChange={(event) => props.handleSecUnitInputChange(event)}/>
        <ButtonElement onClick={props.handleSubmit} type="button" id="submit-login" label="Save" class={['background-light-mauve', 'p-16', 'mt-12']} />
      </form>
    )
}