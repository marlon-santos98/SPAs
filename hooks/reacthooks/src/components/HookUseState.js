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

    //useState e input
    const [age, setAge] = useState(18)
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(age)
    }

  

  return (

    <div>
        <h2>UseState</h2>
        <p>Variavel: {userName}</p>
        <p>UseState: {name}</p>
        <button onClick={changeNames}>Mudar nomes</button>
        <hr />
        {/* UseState e input */}
        <p>Digite a sua idade: </p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
          <input type="submit" value='Enviar' />
        </form>
        <p>Voce tem {age} anos</p>
        <hr />
    </div>

  )
}

export default HookUseState