import React, { useEffect, useState } from 'react'
import IndexCardBack from './index_card_back';
import IndexCardFront from './index_card_front';

interface IndexCardProps {
    frontText: string;
    backText?: string;
    heightPx?: number;
    heightRem?: number
}

const IndexCard: React.FC<IndexCardProps> = ({ heightPx, heightRem, frontText, backText }) => {
    const [height, setHeight] = useState('300px')
    const [width, setWidth] = useState('500px')
    const [side, setSide] = useState(0) // 0 = front; 1 = back

    useEffect(() => {
        setHeight(calulateContainerSize('h', heightPx, heightRem))
        setWidth(calulateContainerSize('w', heightPx, heightRem))
    }, [heightPx, heightRem])

    const handleClick = () => {
        setSide((side + 1) % 2)
    }

    const classes = {
        container: `bg-white flex flex-col relative drop-shadow rounded`
    }


    return (
        <div className={classes.container} style={{ height: height, width: width }} onClick={handleClick}>
            {side === 0
                ? <IndexCardFront />
                : <IndexCardBack text={frontText} rowHeight={calculateRowSize(height)} />
            }
        </div>
    )
}

export default IndexCard

const calulateContainerSize = (dimension: 'h' | 'w', heightPx: number, heightRem: number): string => {
    const DEFAULT_HEIGHT = 300
    const h = heightPx || heightRem || DEFAULT_HEIGHT
    const w = Math.floor(((5 / 3) * h))
    const unit = heightRem ? 'rem' : 'px' // default to px

    if (dimension === 'h') {
        return `${h}${unit}`
    }
    else {
        return `${w}${unit}`
    }
}

const calculateRowSize = (height: string): string => {
    const unit = height.includes('px') ? 'px' : 'rem'
    const heightNumeric = unit === 'px' ? +(height.substring(0, height.length - 2)) : +(height.substring(0, height.length - 3))
    return `${Math.floor(heightNumeric / 8)}${unit}`
}