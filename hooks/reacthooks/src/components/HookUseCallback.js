import React from 'react'
import { useCallback, useState } from 'react'

import List from './List'

const HookUseCallback = () => {

    const [counter, setCounter] = useState(0)
    const getItemsFromDatabase = useCallback(() =>{
        return ['a', 'b', 'c']
    }, [])
  return (
    <div>
        <hr />
        <h2>Use Callback</h2>
        <List getItems = {getItemsFromDatabase}/>
        <button onClick={() => setCounter(counter + 1)}>Alterar</button>
        <p>{counter}</p>
    </div>
  )
}

export default HookUseCallback