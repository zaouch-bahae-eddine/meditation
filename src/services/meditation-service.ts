import axios from "axios"
import { authHeader } from './auth-header'

const API_URL_DURATION = process.env.REACT_APP_API_URL + "/meditation/durations"

class MeditaionService{
    async addDuration(duration: number){
        return await axios.put(
            API_URL_DURATION,
            {duration: duration},
            { headers: authHeader() }
        )
    }
}
export default new MeditaionService()