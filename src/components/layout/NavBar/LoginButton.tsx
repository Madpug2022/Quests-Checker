"use client"

import { useState } from "react"
import placeholder from "@/assets/images/userplaceholder.png"
import { FaPerson } from "react-icons/fa6"
import Image from "next/image"


const LoginButton = () => {
    const [userLogedIn, setUserLogedIn] = useState(true)
    return (
        <div className="navbar__loginButtonContainer__button">
            {userLogedIn ? (
                <button
                    onClick={() => {
                        setUserLogedIn(false)
                    }}
                    className="navbar__loginButtonContainer__button"
                >
                    <Image src={placeholder} alt="user" style={{ borderRadius: "50%" }} height={32} width={32} />
                </button>
            ) : (
                <button
                    onClick={() => {
                        setUserLogedIn(true)
                    }}
                    className="navbar__loginButtonContainer__button"
                >
                    <FaPerson style={{ height: "16px", width: "16px" }} />
                </button>
            )}
        </div>
    )
}

export default LoginButton
