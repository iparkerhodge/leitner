import React from 'react'
import IndexCard from '../shared/index_card/index_card'

const Home = () => {
    const text = 'this is a test \n and i am testing \n and i am testing \n and i am testing \n and i am testing'
    return (
        <div className='h-[500px] w-screen -ml-7 sm:-ml-36 bg-[#F8AC48] flex'>
            <div className='w-full flex justify-center items-center'>
                <IndexCard heightPx={200} frontText={text} />
            </div>
        </div>
    )
}

export default Home