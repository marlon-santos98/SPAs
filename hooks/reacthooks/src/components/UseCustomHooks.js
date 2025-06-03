import {useState} from 'react'
import { usePrevious } from '../components/usePrevious'

const UseCustomHooks = () => {
  const [number, setNumber] = useState(0);
  const previousValue = usePrevious(number);

  return (
    <div>
        <hr />
        <h2>UseCustomHooks</h2>
        <p>Atual: {number}</p>
        <p>Anterior: {previousValue}</p>
        <button onClick={() => setNumber(Math.random())}>Alterar</button>
    </div>
  )
}

export default UseCustomHooks