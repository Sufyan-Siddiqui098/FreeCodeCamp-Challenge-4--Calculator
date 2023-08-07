import React from 'react'
import { useSelector } from 'react-redux'


const Display = () => {
  const display = useSelector((state)=> state.calculate.display)
  const calculation = useSelector((state)=>state.calculate.calculation)
  
  return (
    <div className='display'>
      <div className="smallD">{calculation}</div>
      <input type="text" name="display" id="display" readOnly value={display}  />
    </div>
  )
}

export default Display