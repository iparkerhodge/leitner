import React from 'react'

interface MenuOptions {
    open: boolean
    user: any
}

const MenuOptions: React.FC<MenuOptions> = ({ open, user }) => {
    console.log(user)
    return (
        <div className={`flex flex-col items-center py-4 sm:pt-16 text-white font-bold font-slab transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}>
            {user
                ? <a href='/login' className='cursor-pointer'>Logout</a>
                : <>
                    <a href='/signup' className='cursor-pointer'>Sign Up</a>
                    <a href='/login' className='cursor-pointer'>Login</a>
                </>
            }
            <br />

            <a href='/' className='cursor-pointer'>Home</a>
            <a className='cursor-pointer'>Learn</a>
            <a href='/manage' className='cursor-pointer'>Manage</a>
        </div>
    )
}

export default MenuOptions