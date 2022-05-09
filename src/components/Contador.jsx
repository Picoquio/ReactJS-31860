import React from 'react'
import { useState } from 'react'

const Contador = () => {
  
  const [suma, setSuma] = useState(0)
  
  const clickHandler = () => {
      setSuma(suma + 1)
  }
  return (
    <>
    <button onClick={clickHandler}>
        {suma}
    </button>
    </>
  )
}

export default Contador