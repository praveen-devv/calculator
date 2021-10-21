import React from 'react'
import './Display.css'

const Display = ({result}) => {
    return (
        <div className="display">
            {result ? result : 0}
        </div>
    )
}

export default Display
