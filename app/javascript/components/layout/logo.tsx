import React from 'react'
import owl from '../../../assets/images/owl.png'

const Logo = () => (
    <div className='flex items-center'>
        <img src={owl} className='h-8 sm:h-12 mr-3' />
        <div className='text-[#186052] font-black leading-4'>
            <h4>Leitner</h4>
            <h4>Learning</h4>
        </div>
    </div>
)

export default Logo