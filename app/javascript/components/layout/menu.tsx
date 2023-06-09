import React, { useState } from 'react'
import Hamburger from './hamburger'
import MenuOptions from './menuOptions'

const Menu = ({ user }) => {
    const [open, setOpen] = useState(false)

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        setOpen(!open)
    }

    return (
        <>
            <div className='z-40'>
                {/* Hamburger */}
                <div id='hamburger' className='fixed top-2.5 left-[3.75rem] z-50'>
                    {/* mobile */}
                    <div className='inline sm:hidden cursor-pointer'>
                        <Hamburger open={open} onClick={handleClick} />
                    </div>
                    {/* desktop */}
                    <div className='hidden sm:inline cursor-pointer'>
                        <Hamburger open={open} onClick={handleClick} />
                    </div>
                </div>
                <div>
                    {/* desktop */}
                    <div className={`drop-shadow-lg hidden sm:inline absolute top-0 left-0 h-screen bg-[#58D2CE] z-0 transition-[width] ${open ? 'w-36' : 'w-0'}`}>
                        <MenuOptions open={open} user={user} />
                    </div>
                    {/* mobile */}
                    <div className={`drop-shadow-lg inline sm:hidden absolute top-10 left-0 w-screen bg-[#58D2CE] transition-[height] ${open ? 'h-fit' : 'h-0'}`}>
                        <MenuOptions open={open} user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu