import React, { use } from 'react'
import { useRef } from 'react'

import SomeComponent from './SomeComponent' 

const HookUseImperativeHandle = () => {
    const inputRef = useRef();

  return (
    <div>
        <hr />
        <h2>HookUseImperativeHandle</h2>
        <SomeComponent ref={inputRef} />
        <button onClick={() => inputRef.current.validate()}>Validate</button>
    </div>
  )
}

export default HookUseImperativeHandle