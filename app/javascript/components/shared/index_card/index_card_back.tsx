import React from 'react'

interface IndexCardBackProps {
    rowHeight: string
    text: string
}

const IndexCardBack: React.FC<IndexCardBackProps> = ({ rowHeight, text }) => {
    const classes = {
        content: 'absolute h-full w-full flex justify-center overflow-hidden',
        span: 'border-b-2 border-blue-700 opacity-50',
        spanFirst: 'border-b-2 border-red-600 w-full pt-2'
    }
    return (
        <>
            <div className={classes.content} style={{ paddingTop: rowHeight, lineHeight: `${rowHeight}px` }}>{text}</div>
            <span className={classes.spanFirst} style={{ height: rowHeight }} />
            <span className={classes.span} style={{ height: rowHeight }} />
            <span className={classes.span} style={{ height: rowHeight }} />
            <span className={classes.span} style={{ height: rowHeight }} />
            <span className={classes.span} style={{ height: rowHeight }} />
            <span className={classes.span} style={{ height: rowHeight }} />
            <span className={classes.span} style={{ height: rowHeight }} />
        </>
    )
}

export default IndexCardBack