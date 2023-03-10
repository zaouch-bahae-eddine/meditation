import { useState } from "react"
import { ButtonElement } from "./buttonElement"
import './setTimer.css'

const SetTimer = (props: any) => {

    return (
      <div className={props.display ? "popup-style" : "popup-style hidden"}>
        <form className="p-12">
          <h1 className='popup-header'>Meditation Time</h1>
          <div className="time-inputs">
            <div className="min-inputs">
              <input type="number" value={props.timerValue.minDouzen} className="min-douzen" onChange={(event) => props.handleMinDouzenInputChange(event)}/>
              <input type="number" value={props.timerValue.minUnit} className="min-unit" onChange={(event) => props.handleMinUnitInputChange(event)}/>
            </div>
            <div className="semicolomn-breack">:</div>
            <div className="sec-inputs">
              <input type="number" value={props.timerValue.secDouzen} className="sec-douzen" onChange={(event) => props.handleSecDouzenInputChange(event)}/>
              <input type="number" value={props.timerValue.secUnit} className="sec-unit" onChange={(event) => props.handleSecUnitInputChange(event)}/>
            </div>
          </div>
          <ButtonElement onClick={() => {
            props.handleSubmit()
            props.hiddePopup()
          }} 
          type="button" id="submit-login" label="Go on !" class={['background-light-pink', 'p-16', 'mt-12']} />
        </form>
      </div>
    )
}
export default SetTimer 