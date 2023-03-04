import { WomenOrder } from "../components/persons-item/womenOrder";
import "./welcome.css";
import "./template.css";
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
    const {initTimer, currentTime, startTimer, isActive } = useTimer()
    const [timer, setTimer] = useState<TimerPickerInterface>({
      minDouzen: 0,
      minUnit: 0,
      secDouzen: 0,
      secUnit: 0
    })
    const handleSubmit = () => {
      initTimer(timer)
      startTimer()
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

      <h1 className="color-dark-pink text-center p-12">Let's Meditate</h1>
      <div className="timer-display">
        {
          isActive ?
            (currentTime.getMinutes() || '00') +':' + (currentTime.getSeconds() || '00')
          : 'pick Your time'
        }
      </div>
      <div className="p-12">
          <WomenOrder />
      </div>
      <div className="app-description">
          <p className="color-dark-pink text-center">Your meditation helps evry one around you !</p>
      </div>
      <SetTimer 
        handleMinDouzenInputChange={handleMinDouzenInputChange}
        handleMinUnitInputChange={handleMinUnitInputChange}
        handleSecDouzenInputChange={handleSecDouzenInputChange}
        handleSecUnitInputChange={handleSecUnitInputChange} 
        handleSubmit={handleSubmit} 
      />
    </main>
  );
}

export default TimerPicker;
