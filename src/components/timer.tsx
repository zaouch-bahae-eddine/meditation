
import { useState } from "react";

interface TimerPickerInterface {
    minDouzen?: number,
    minUnit?: number,
    secDouzen?: number,
    secUnit?: number,
  }
export const Timer = (props: any) => {
    
    const [currentTime, setCurrentTime] = useState<Date>(new Date("1970-01-01T00:00:00"))
    const timer: TimerPickerInterface = props.timer
    const ms = (
        timer?.minDouzen || timer?.minUnit || timer?.secDouzen || timer?.secUnit ?
        (timer?.minDouzen || '0') +
        '' + (timer?.minUnit || '0') +
        ':' + (timer?.secDouzen || '0') +
        '' + (timer?.secUnit || '0')
        : ''
      )
      const initialTime = new Date("1970-01-01T" + "00:00:00")
      let pickedTime = new Date("1970-01-01T" + "00:" + ms);
      setCurrentTime(pickedTime)
      const chronometer = setInterval(() => {
        if(pickedTime.getMinutes() == 0 && pickedTime.getSeconds() == 0){
          clearInterval(chronometer)
          props.setStart(false)
        }
        setCurrentTime(new Date(pickedTime.getTime() - initialTime.getTime() - 1000))
        console.log(currentTime)
      }, 1000)
      console.log(new Date(pickedTime.getTime() - 1000))
    return (
        <div className="timer-display">
        {
          timer?.minDouzen || timer?.minUnit || timer?.secDouzen || timer?.secUnit ?
            (currentTime.getMinutes()|| '00') +':' + (currentTime.getSeconds() || '00')
          : ''
        }
      </div>
    );
}