import React from 'react'
import IndexCard from './components/card'
import owl from '../../../assets/images/owl.png'
import eyes from '../../../assets/images/Owl Eyes.png'

const Home = () => {
    const classes = {
        container: 'pb-20',
        hero: 'h-[500px] w-screen -ml-7 sm:-ml-36 bg-[#F8AC48] flex'
    }
    return (
        <div className={classes.container}>
            <div className={classes.hero}>
                <div className='w-full flex items-center'>
                    <div className='w-1/2 flex justify-center'>
                        <IndexCard />
                    </div>
                    <div className='w-1/2 font-slab z-10'>
                        <h2 className='text-5xl'>Learn anything.</h2>
                        <h2 className='text-5xl'>Remember forever.</h2>
                        <p>A simple flashcard system proven to increase your recall.</p>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex even:justify-start odd:justify-end pr-96'>
                <div className='fixed right-0 bottom-10 rotate-12 z-0 opacity-50'>
                    <img src={eyes} width={500} />
                </div>
                <section>
                    <h4 className='font-sharpie text-3xl'>The Leitner System</h4>
                    <p className='text-slab pt-2'>The Leitner System was developed by the German psychologist Sebastian Leitner in the 1970s. The system is designed to optimize the learning process by spacing out repetitions and focusing on the material that requires more review.</p>
                    <p className='text-slab pt-2'>The key idea behind the Leitner System is to prioritize reviewing the material that gives you the most difficulty, while spacing out repetitions of mastered information. By continuously cycling through the flashcards and promoting or demoting them based on your performance, you optimize the learning process and improve long-term retention.</p>
                </section>
                {/* <img src={owl} width={200} /> */}
            </div>
        </div>
    )
}

export default Home