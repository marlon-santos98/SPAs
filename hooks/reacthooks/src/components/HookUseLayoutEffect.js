import React from 'react'
import { useLayoutEffect, useEffect, useState } from 'react'

const HookUseLayoutEffect = () => {
    const [name, setName] = useState("Algum nome")
    useEffect(() => {
        console.log("2")
        setName("Outro nome")
    }, [])

    useLayoutEffect(() => {
        console.log("1")
        setName("Nome alterado")
    }, [])

    console.log(name)
  return (
    <div>
        <hr />
        <h2>HookUseLayoutEffect</h2>
        <p>Nome: {name}</p>
    </div>
  )
}

export default HookUseLayoutEffect