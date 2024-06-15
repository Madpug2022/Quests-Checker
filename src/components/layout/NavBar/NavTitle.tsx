"use client"

import useLocation from "@/hooks/useLocation"


const NavTitle = () => {
    const { location } = useLocation()
    return (
        <h2 className="navbar__title">{location}</h2>
    )
}

export default NavTitle
