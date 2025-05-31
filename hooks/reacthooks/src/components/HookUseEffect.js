import React from 'react'
import { useEffect, useState } from 'react'

const HookUseEffect = () => {
    //use effect sem dependencia
    useEffect(() => {
        console.log('Estou sendo executado')
    })

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }

    //array de deps vazio
    useEffect(() => {
        console.log('Serei excutado apenas 1 vez')
    }, [])

    //item no array de deps
    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {
        if (anotherNumber > 0){
        console.log('Sou executado apenas quando o another number muda')
        }
    }, [anotherNumber])

    //cleanup do useeffect
    useEffect(()=>{
        const timer = setTimeout(() => {
            console.log('Hello world')
        }, 2000)
        return () => clearTimeout(timer)
    }, [anotherNumber])
  return (
    <div>
        <h2>useEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Executar</button>
        <p>Another number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar another number</button>
        <hr />
    </div>
  )
}

export default HookUseEffect