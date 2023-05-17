import React from 'react'

interface HamburgerProps {
    open: boolean
    onClick: React.MouseEventHandler<HTMLDivElement>
}

const Hamburger: React.FC<HamburgerProps> = ({ open, onClick }) => {
    const classes = {
        div: 'w-7 h-6 relative rotate-0 transition-transform duration-500 top-0.5 sm:top-3.5 cursor-pointer',
        span: 'block h-1 w-full rounded-[9px] absolute origin-center origin-left transition-all duration-250'
    }

    return (
        <div className={classes.div} onClick={onClick}>
            <span className={`${classes.span} bg-[#3FA594] ${open ? 'rotate-45 sm:bg-[#fff] left-1' : 'top-0 rotate-0'}`} />
            <span className={`${classes.span} top-[8px] ${open ? 'opacity-0' : 'bg-[#3FA594]'}`} />
            <span className={`${classes.span} bg-[#3FA594] ${open ? '-rotate-45 top-[20px] left-1 sm:bg-[#fff]' : 'top-[16px] rotate-0'}`} />
        </div>
    )
}

export default Hamburger