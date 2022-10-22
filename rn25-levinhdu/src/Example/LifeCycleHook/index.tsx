import React from 'react'
import {useState} from 'react'


function LifeCycleHook() {
    
    const [numberState, setNumberState] = useState(0)

    return (
        <>
            <div>{numberState}</div>
            <button>Click</button>
        </>
    )
}

export default LifeCycleHook