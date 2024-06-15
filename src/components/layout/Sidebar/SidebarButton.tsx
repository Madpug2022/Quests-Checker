"use client"
import { SidebarButtonEnum, SidebarButtonI } from './config'

const SidebarButton = ({ button, currentTab, setCurrentTab }:
    {
        button: SidebarButtonI
        currentTab: SidebarButtonEnum
        setCurrentTab: (label: SidebarButtonEnum) => void
    }) => {

    const { icon, label } = button
    return (
        <button onClick={() => setCurrentTab(label)} title={label} className={`sidebar__button ${currentTab === label ? 'sidebar__button--active' : ''}`}>
            {icon({ className: "sidebar__button__icon" })}
        </button>
    )
}

export default SidebarButton
