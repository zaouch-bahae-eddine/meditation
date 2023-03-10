import { WomenOrder } from "../components/persons-item/womenOrder";
import "./welcome.css"
import "./template.css"
import "./timerPicker.css"
import { ButtonElement } from "../components/buttonElement";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useState, ChangeEvent } from 'react'
import useTimer from "../hooks/useTimer";
import SetTimer from "../components/setTimer";
import '../components/setTimer.css'

interface TimerPickerInterface {
  minDouzen?: number,
  minUnit?: number,
  secDouzen?: number,
  secUnit?: number,
}

function TimerPicker() {
    //const currentUser = useCurrentUser()
    const {initTimer, currentTime, startTimer, isActive, finished, stopTimer, cancelTimer } = useTimer()
    const [timer, setTimer] = useState<TimerPickerInterface>({
      minDouzen: 0,
      minUnit: 0,
      secDouzen: 0,
      secUnit: 0
    })
    const [displayPopup, setDisplayPopup] = useState(false)
    const hiddePopup = () => {
      setDisplayPopup(false)
    }
    const showPopup = () => {
      setDisplayPopup(true)
      initializeTimer()
    }
    const handleSubmit = () => {
      initTimer(timer)
      startTimer()
    }
    const initializeTimer = () => {
      setTimer({
        minDouzen: 0,
        minUnit: 0,
        secDouzen: 0,
        secUnit: 0
      })
    }
    const handleMinDouzenInputChange = (event: ChangeEvent) => {
      const target = event.target as HTMLInputElement;
      target.value = target.value.slice(-1)
      setTimer(() => {
        const newTimer = {...timer, minDouzen: parseInt(String(target.value))}
        initTimer(newTimer)
        return newTimer
      })
    }
    const handleMinUnitInputChange = (event: ChangeEvent) => {
      const target = event.target as HTMLInputElement;
      target.value = target.value.slice(-1)
      setTimer(() => {
        const newTimer = {...timer, minUnit: parseInt(String(target.value))}
        initTimer(newTimer)
        return newTimer
      })
    }
    const handleSecDouzenInputChange = (event: ChangeEvent) => {
      const target = event.target as HTMLInputElement;
      target.value = target.value.slice(-1)
      setTimer(() => {
        const newTimer = {...timer, secDouzen: parseInt(String(target.value))}
        initTimer(newTimer)
        return newTimer
      })
    }
    const handleSecUnitInputChange = (event: ChangeEvent) => {
      const target = event.target as HTMLInputElement;
      target.value = target.value.slice(-1)
      setTimer(() => {
        const newTimer = {...timer, secUnit: parseInt(String(target.value))}
        initTimer(newTimer)
        return newTimer
      })
    }
  return (
    <main id="main">

      <h1 className="color-dark-pink text-center p-16">Let's Meditate</h1>
      <div className={isActive ? "timer-display active" : "timer-display"}>
        {
          !finished ?
            (currentTime.getMinutes() || '00') +':' + (currentTime.getSeconds() || '00')
          : 'Pick your time 🙏'
        }
      </div>
      <div className="p-12 postion-relative">
        <div className={isActive ? "person-background": ""}></div>
        <div className={isActive ? "person-background item-2": ""}></div>
          <WomenOrder />
      </div>
      <div className="app-description">
          <p className="color-dark-pink text-center">Your meditation helps evry one around you !</p>
      </div>
      <div className="buttons-timer-container">
        <div className={finished ? "buttons-timer-bottom" : "buttons-timer-bottom hidden"}>
          <ButtonElement
            onClick={()=> showPopup()} 
            id="show-timer-pop"
            type="button"
            label="Timer"
            class={['background-light-pink', 'p-16', 'mt-12']}
          />
          <ButtonElement
            onClick={()=> showPopup()} 
            id="show-timer-pop"
            type="button"
            label="Profile"
            icone="Profile"
            class={['background-light-pink', 'p-16', 'mt-12']}
          />
        </div>
        <div className={!finished ? "buttons-timer-bottom" : "buttons-timer-bottom hidden"}>
          <ButtonElement
            onClick={()=> isActive ? stopTimer() : startTimer()} 
            id="show-timer-pop"
            type="button"
            label={ isActive ? "Stop" : "Play"}
            class={['background-light-pink', 'p-16', 'mt-12']}
          />
          <ButtonElement
            onClick={()=> cancelTimer()} 
            id="show-timer-pop"
            type="button"
            label="Cancel"
            icone="Profile"
            class={['background-light-pink', 'p-16', 'mt-12']}
          />
        </div>
      </div>
      <SetTimer 
        handleMinDouzenInputChange={handleMinDouzenInputChange}
        handleMinUnitInputChange={handleMinUnitInputChange}
        handleSecDouzenInputChange={handleSecDouzenInputChange}
        handleSecUnitInputChange={handleSecUnitInputChange} 
        handleSubmit={handleSubmit}
        display={displayPopup}
        hiddePopup={hiddePopup}
        timerValue={timer}
      />
    </main>
  );
}

export default TimerPicker;
