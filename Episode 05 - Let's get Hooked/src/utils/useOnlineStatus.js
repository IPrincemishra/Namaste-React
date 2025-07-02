import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    // just check online and offline

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener('offline', () => {
            setOnlineStatus(false)
        })
    }, [])
    
    useEffect(() => {
        window.addEventListener('online', () => {
            setOnlineStatus(true)
        })
    }, [])

    return onlineStatus;
}

export default useOnlineStatus;