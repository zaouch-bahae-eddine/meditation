import { WomenOrder } from "../components/persons-item/womenOrder";
import "./welcome.css";
import "./template.css";
import { ButtonElement } from "../components/buttonElement";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useState, ChangeEvent } from 'react'
import { Timer } from "../components/timer";

interface TimerPickerInterface {
  minDouzen?: number,
  minUnit?: number,
  secDouzen?: number,
  secUnit?: number,
}

function TimerPicker() {
    const currentUser = useCurrentUser()
    const [start, setStart] = useState(false)
    const [timer, setTimer] = useState<TimerPickerInterface>({
      minDouzen: 0,
      minUnit: 0,
      secDouzen: 0,
      secUnit: 0
    })
    const handleSubmit = () => {
      if(timer?.minDouzen || timer?.minUnit || timer?.secDouzen || timer?.secUnit)
        setStart(true)
    }
    const handleMinDouzenInputChange = (event: ChangeEvent) => {
      const target = event.target as HTMLInputElement;
      target.value = target.value.slice(-1)
      setTimer({...timer, minDouzen: parseInt(String(target.value))})
    }
    const handleMinUnitInputChange = (event: ChangeEvent) => {
      const target = event.target as HTMLInputElement;
      target.value = target.value.slice(-1)
      setTimer({...timer, minUnit: parseInt(String(target.value))})
    }
    const handleSecDouzenInputChange = (event: ChangeEvent) => {
      const target = event.target as HTMLInputElement;
      target.value = target.value.slice(-1)
      setTimer({...timer, secDouzen: parseInt(String(target.value))})
    }
    const handleSecUnitInputChange = (event: ChangeEvent) => {
      const target = event.target as HTMLInputElement;
      target.value = target.value.slice(-1)
      setTimer({...timer, secUnit: parseInt(String(target.value))})
    }
  return (
    <main>
      <h1 className="color-dark-pink text-center p-12">Let's Meditate</h1>
        {start ? <Timer timer={timer} setStart={setStart} /> : ''}
      <div className="p-12">
          <WomenOrder />
      </div>
      <div className="app-description">
          <p className="color-dark-pink text-center">Your meditation helps evry one around you !</p>
      </div>
      <form className="button-container p-12">
        min-douzen
        <input type="number" className="min-douzen" autoFocus onChange={(event) => handleMinDouzenInputChange(event)}/>
        min-uint
        <input type="number" className="min-unit" onChange={(event) => handleMinUnitInputChange(event)}/>
        sec-douzen
        <input type="number" className="sec-douzen" onChange={(event) => handleSecDouzenInputChange(event)}/>
        sec-unit
        <input type="number" className="sec-unit" onChange={(event) => handleSecUnitInputChange(event)}/>
        <ButtonElement onClick={handleSubmit} type="button" id="submit-login" label="Save" class={['background-light-mauve', 'p-16', 'mt-12']} />
      </form>
    </main>
  );
}

export default TimerPicker;
