import React, { useState } from 'react'
import Hamburger from './hamburger'

const Menu = () => {
    const [open, setOpen] = useState(false)

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        setOpen(!open)
    }

    return (
        <>
            {open &&
                <div className='absolute h-screen w-screen opacity-5 bg-black top-0 left-0 z-30' />

            }
            <div className='z-40'>
                {/* Hamburger */}
                <div id='hamburger' className='cursor-pointer fixed top-2.5 z-50' onClick={handleClick}>
                    {/* mobile */}
                    <div className='inline sm:hidden'>
                        <Hamburger open={open} />
                    </div>
                    {/* desktop */}
                    <div className='hidden sm:inline'>
                        <Hamburger open={open} />
                    </div>
                </div>
                <div>
                    {/* desktop */}
                    <div className={`hidden sm:inline absolute top-0 left-0 h-screen bg-[#58D2CE] z-0 transition-[width] ${open ? 'w-36' : 'w-0'}`}>
                        <p className={`transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}>hello</p>
                    </div>
                    {/* mobile */}
                    <div className={`inline sm:hidden absolute top-10 left-0 w-screen bg-[#58D2CE] transition-[height] ${open ? 'h-10' : 'h-0'}`}>
                        <p className={`transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}>hello</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu