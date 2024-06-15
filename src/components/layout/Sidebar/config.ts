"use client"
import { IconType } from "react-icons";
import { FaHouse } from "react-icons/fa6";
import { MdOutlineSpaceDashboard, MdPersonOutline } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FiArchive } from "react-icons/fi";
import { LiaPuzzlePieceSolid } from "react-icons/lia";

export enum SidebarButtonEnum {
    HOME = 'Home',
    DASHBOARD = 'Dashboard',
    YOUR = 'Your',
    PAGE = 'Page',
    LOOKS = 'Looks',
    VERY = 'Very',
    COOL = 'Cool'
}

export interface SidebarButtonI {
    icon: IconType;
    label: SidebarButtonEnum;
    to: string;
}


export const sidebarButtons: SidebarButtonI[] = [
    {
        icon: FaHouse,
        label: SidebarButtonEnum.HOME,
        to: '/'
    },
    {
        icon: MdOutlineSpaceDashboard,
        label: SidebarButtonEnum.DASHBOARD,
        to: '/'
    },
    {
        icon: BsBuilding,
        label: SidebarButtonEnum.YOUR,
        to: '/notfound'
    },
    {
        icon: MdPersonOutline,
        label: SidebarButtonEnum.PAGE,
        to: '/notfound'
    },
    {
        icon: CiHeart,
        label: SidebarButtonEnum.LOOKS,
        to: '/notfound'
    },
    {
        icon: FiArchive,
        label: SidebarButtonEnum.VERY,
        to: '/notfound'
    },
    {
        icon: LiaPuzzlePieceSolid,
        label: SidebarButtonEnum.COOL,
        to: '/notfound'
    },
]
