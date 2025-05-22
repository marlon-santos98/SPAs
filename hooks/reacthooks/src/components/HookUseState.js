import React from 'react'
import { useState } from 'react'

const HookUseState = () => {
    //1 - useState
    let userName = "João"
    const [name, setName] = useState("Marlon")

    const changeNames = () => {
        userName = "Joao Souza"
        setName("Marlon Adriano")

    }

  return (

    <div>
        <h2>UseState</h2>
        <p>Variavel: {userName}</p>
        <p>UseState: {name}</p>
        <button onClick={changeNames}>Mudar nomes</button>
        <hr />
    </div>

  )
}

export default HookUseState