import React from 'react'
import { useState, useEffect, useMemo } from 'react'

const HookUseMemo = () => {
    const [number, setNumber] = useState(0);

    const premiumNumbers = useMemo(() => {
        return ["0", "100", "200"]
    }, [])

    useEffect(() => {
        console.log("Premium numbers updated");
    }, [premiumNumbers]);

  return (
    <div>
        <hr />
        <h2>useMemo</h2>
        <input type="text" onChange={(e) => setNumber(e.target.value)} />
        {premiumNumbers.includes(number) ? <p>Acertou o numero</p> : ""}    
        </div>
  )
}

export default HookUseMemo