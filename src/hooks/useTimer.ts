
import { useRef, useState } from "react";
import Meditation from '../services/meditation-service'

interface TimerPickerInterface {
    minDouzen?: number,
    minUnit?: number,
    secDouzen?: number,
    secUnit?: number,
}

const useTimer = () => {
    const initialTime = new Date("1970-01-01T" + "00:00:00")
    const [currentTime, setCurrentTime] = useState<Date>(initialTime)
    const [duration, setDuration] = useState(0)
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
      const msToDate = new Date("1970-01-01T" + "00:" + ms)
      setCurrentTime(msToDate)
      setDuration(msToDate.getMinutes()* 60 + msToDate.getSeconds())
    }

    const startTimer = () =>  {

      if((currentTime.getMinutes() > 0 || currentTime.getSeconds() > 0)){
        setIsActive(true)
        setFinished(false)
        chronoRef.current = setInterval(() => {
          setCurrentTime((currentTime) => {
            if((currentTime.getMinutes() > 0 || currentTime.getSeconds() > 0)){
              return new Date(currentTime.getTime() - initialTime.getTime() - 1000)
            }
            setFinished(true)
            stopTimer()
            Meditation.addDuration(duration)
            return initialTime
          })
        }, 1000)
      }
    }

    const stopTimer = () =>  {
      console.log('Stop')
      setIsActive(false)
      clearInterval(chronoRef.current)
    }
    const cancelTimer = () => {
      setIsActive(false)
      setFinished(true)
      clearInterval(chronoRef.current)
      setCurrentTime(initialTime)
    }
    return {initTimer, startTimer, stopTimer, currentTime, isActive, finished, cancelTimer}
}
export default useTimer