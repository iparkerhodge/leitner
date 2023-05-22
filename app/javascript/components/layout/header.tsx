import React from 'react'
import Logo from './logo'
import Menu from './menu'

const Header = ({ currentUser }) => (
    <div className='h-10 sm:h-16 px-2 sm:px-14 flex items-center justify-between'>
        <Menu user={currentUser} />
        <Logo />
    </div>
)

export default Header