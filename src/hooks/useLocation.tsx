"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"


const useLocation = () => {
    const [location, setLocation] = useState<string>('Home')

    const pathName = usePathname()
    const path = pathName.split('/')[1]

    useEffect(() => {
        switch (path) {
            case 'home':
                setLocation('Home')
                break
            case 'about':
                setLocation('About')
                break
            case 'services':
                setLocation('Services')
                break
            case 'contact':
                setLocation('Contact')
                break
            default:
                setLocation('Home')
                break
        }
    }, [path])

    return { location }
}

export default useLocation
