import React from 'react'
import "./styles.scss"
import Sidebar from '@/components/layout/Sidebar'
import NavBar from '@/components/layout/NavBar'

const layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <main className='homepage__layout'>
            <Sidebar />
            <div className='homepage__content'>
                <NavBar />
                {children}
            </div>
        </main>
    )
}

export default layout
