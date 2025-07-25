import React from 'react'
import { useEffect, useState, useRef } from 'react'

const HookUseRef = () => {
    //use ref
    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(()=>{
        numberRef.current = numberRef.current + 1
    })

    //useRef e Dom
    const inputRef = useRef()
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.prevent.Default()
        setText("")

        inputRef.current.focus()
    }
  return (
    <div>
        <hr />
        <h2>use Ref</h2>
        <p>O componente renderizou: {numberRef.current} vezes.</p>
        <p>Counter 1: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Contador A</button>
        <p>Counter 2: {counterB}</p>
        <button onClick={() => setCounterB(counter + 1)}>Contador B</button>

        {/* use ref e dom */}
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} value={text} onChange={(e)=> setText(e.target.value)}/>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default HookUseRef