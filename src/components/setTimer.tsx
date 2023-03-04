import { ButtonElement } from "./buttonElement"
import './setTimer.css'
const SetTimer = (props: any) => {
    return (
      <div className="popup-style">
        <form className="p-12">
          <h1 className='popup-header'>Meditation Time</h1>
          <div className="time-inputs">
            <div className="min-inputs">
              <input type="number" className="min-douzen" onChange={(event) => props.handleMinDouzenInputChange(event)}/>
              <input type="number" className="min-unit" onChange={(event) => props.handleMinUnitInputChange(event)}/>
            </div>
            <div className="semicolomn-breack">:</div>
            <div className="sec-inputs">
              <input type="number" className="sec-douzen" onChange={(event) => props.handleSecDouzenInputChange(event)}/>
              <input type="number" className="sec-unit" onChange={(event) => props.handleSecUnitInputChange(event)}/>
            </div>
          </div>
          <ButtonElement onClick={props.handleSubmit} type="button" id="submit-login" label="Go on !" class={['background-light-mauve', 'p-16', 'mt-12']} />
        </form>
      </div>
    )
}
export default SetTimer 