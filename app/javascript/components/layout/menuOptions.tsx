import React from 'react'

interface MenuOptions {
    open: boolean
}

const MenuOptions: React.FC<MenuOptions> = ({ open }) => {
    return (
        <div className={`flex flex-col items-center py-4 sm:pt-16 text-white font-bold font-slab transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}>
            <p className='cursor-pointer'>Learn</p>
            <a href='/manage' className='cursor-pointer'>Manage</a>
        </div>
    )
}

export default MenuOptions