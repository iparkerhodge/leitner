import React from 'react'

const IndexCard = () => {
    const classes = {
        // see app/assets/stylesheets/application.css
        card: 'flip-card rounded mx-2 z-10',
        inner: 'flip-card-inner rounded z-10',
        front: 'flip-card-front bg-white flex justify-center items-center rounded font-sharpie z-10',
        back: 'flip-card-back flex justify-center items-center rounded font-sharpie bg-white z-10',
        backContainer: 'relative h-full w-full bg-white rounded z-10',
        lineTop: 'absolute w-full h-0.5 bg-red-600 rounded opacity-70 z-10',
        line: 'absolute w-full h-0.5 bg-blue-600 rounded opacity-40 z-10',
        p: 'text-2xl z-10'
    }
    return (
        <div className={classes.card}>
            <div className={classes.inner}>
                <div className={classes.front}>
                    <p className={classes.p}>Remember anything ...</p>
                </div>
                <div className={classes.back}>
                    <div className={classes.backContainer}>
                        <div className={classes.lineTop} style={{ top: '35px' }} />
                        <div className={classes.line} style={{ top: '60px', }} />
                        <div className={classes.line} style={{ top: '85px', }} />
                        <div className={classes.line} style={{ top: '110px', }} />
                        <div className={classes.line} style={{ top: '135px', }} />
                        <div className={classes.line} style={{ top: '160px', }} />
                        <div className={classes.line} style={{ top: '185px', }} />
                    </div>
                    <div className='absolute top-0 left-0 h-full w-full'>
                        <div className='h-full w-full flex justify-center items-center'>
                            <p className={classes.p}>Forever!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexCard