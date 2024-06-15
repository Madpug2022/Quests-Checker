"use client"
import Image from 'next/image'
import logo from "@/assets/logos/logo.png"
import './styles.scss'
import { SidebarButtonEnum, sidebarButtons } from './config'
import SidebarButton from './SidebarButton'
import { useState } from 'react'

const Sidebar = () => {
    const [currentTab, setCurrentTab] = useState<SidebarButtonEnum>(SidebarButtonEnum.HOME)
    return (
        <aside className='sidebar__container'>
            <Image
                src={logo}
                alt='Logo'
                width={45}
                height={35}
                className='sidebar__logo'
            />
            <nav className='sidebar__nav'>
                {sidebarButtons.map((button, index) => (
                    <SidebarButton
                        key={index}
                        button={button}
                        currentTab={currentTab}
                        setCurrentTab={setCurrentTab}
                    />
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar
