import React from 'react'

interface MenuOptions {
    open: boolean
    user: any
}

const MenuOptions: React.FC<MenuOptions> = ({ open, user }) => {
    return (
        <div className={`flex flex-col items-center py-4 sm:pt-16 text-white font-bold font-slab transition-opacity z-40 ${open ? 'opacity-100' : 'opacity-0'}`}>
            {user &&
                <div className='flex flex-col items-center mb-2'>
                    <p className='text-lg'>{'😀'}</p>
                    <p className='text-[10px]'>{user.email}</p>
                </div>
            }
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