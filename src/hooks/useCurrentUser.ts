import { useState, useEffect } from 'react'
import { getCurrentUser } from '../services/auth-service';
import { useNavigate } from 'react-router-dom'

export const useCurrentUser = () => {
    const [user, setUser] = useState<any>(null);
    const navigate = useNavigate()

    useEffect(() => {
        const currentUser = getCurrentUser()
        setUser(currentUser)
        if(!currentUser){
            navigate("/login")
        }
    }, [])
    return user?.data
}