
import { useRef, useState } from "react";
import { finished } from "stream";

interface TimerPickerInterface {
    minDouzen?: number,
    minUnit?: number,
    secDouzen?: number,
    secUnit?: number,
}

const useTimer = () => {
    const initialTime = new Date("1970-01-01T" + "00:00:00")
    const [currentTime, setCurrentTime] = useState<Date>(initialTime)
    const [isActive, setIsActive] = useState(false)
    const [finished, setFinished] = useState(true)
    const chronoRef = useRef<any>(null)

    const initTimer = (timer : TimerPickerInterface) => {
      const ms = (
        timer?.minDouzen || timer?.minUnit || timer?.secDouzen || timer?.secUnit ?
        (timer?.minDouzen || '0') +
        '' + (timer?.minUnit || '0') +
        ':' + (timer?.secDouzen || '0') +
        '' + (timer?.secUnit || '0')
        : ''
      )
      
      setCurrentTime(new Date("1970-01-01T" + "00:" + ms))
    }

    const startTimer = () =>  {
      console.log('Start', currentTime)

      if((currentTime.getMinutes() > 0 || currentTime.getSeconds() > 0)){
        setIsActive(true)

        chronoRef.current = setInterval(() => {
          setCurrentTime((currentTime) => {
            if((currentTime.getMinutes() > 0 || currentTime.getSeconds() > 0)){
              return new Date(currentTime.getTime() - initialTime.getTime() - 1000)
            }
            console.log('FInished')
            setFinished(true)
            stopTimer()
            return initialTime
          })
        }, 1000)
      }
    }

    const stopTimer = () =>  {
      console.log('Stop')
      setIsActive(false)
      clearInterval(chronoRef.current)
      setCurrentTime(initialTime)
    }

    return {initTimer, startTimer, stopTimer, currentTime, isActive, finished}
}
export default useTimer