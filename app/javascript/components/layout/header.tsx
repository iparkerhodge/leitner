import React from 'react'
import Logo from './logo'
import Menu from './menu'

const Header = () => (
    <div className='h-fit px-2 sm:px-14 pt-2 sm:pt-4 flex items-center justify-between'>
        <Menu />
        <Logo />
    </div>
)

export default Header