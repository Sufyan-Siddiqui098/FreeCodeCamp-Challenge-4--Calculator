import React from 'react'
import {handleNumber, handleClear, handleDecimal, handleOperator, handleResult} from '../store/calculatorSlice'
import { useDispatch } from 'react-redux'



const Keys = () => {
    const dispatch = useDispatch()

  return (
    <div className='grid-4'>
        <button onClick={()=>{dispatch(handleClear())}} className="operator btn row-expand"  id='clear' >AC</button>
        {/* Operator */}
        <button onClick={()=> dispatch(handleOperator('/'))} className="operator btn" id='divide'>/</button>
        <button onClick={()=> dispatch(handleOperator('*'))} className="operator btn" id='multiply'>*</button>
        <button onClick={()=>dispatch(handleNumber("1"))} className="btn" id='one'>1</button>
        <button onClick={()=>dispatch(handleNumber("2"))} className="btn" id='two'>2</button>
        <button onClick={()=>dispatch(handleNumber("3"))} className="btn" id='three'>3</button>
        {/* Operator */}
        <button onClick={()=> dispatch(handleOperator("+"))}   className="operator btn" id='add'>+</button>
        <button onClick={()=>dispatch(handleNumber("4"))} className="btn" id='four'>4</button>
        <button onClick={()=>dispatch(handleNumber("5"))} className="btn" id='five'>5</button>
        <button onClick={()=>dispatch(handleNumber("6"))} className="btn" id='six'>6</button>
        {/* Operator */}
        <button onClick={()=> dispatch(handleOperator('-'))}   className="operator btn" id='subtract'>-</button>
        <button  onClick={()=>dispatch(handleNumber("7"))} className="btn" id='seven'>7</button>
        <button  onClick={()=>dispatch(handleNumber("8"))} className="btn" id='eight'>8</button>
        <button  onClick={()=>dispatch(handleNumber("9"))} className="btn" id='nine'>9</button>
        {/* Result  */}
        <button  onClick={()=> dispatch(handleResult())}   className="operator btn col-expand" id='equals'>=</button>
        <button  onClick={()=>dispatch(handleNumber("0"))}  className="btn row-expand" id='zero'>0</button>
        <button  onClick={()=>dispatch(handleDecimal('.'))} className="btn" id='decimal'>.</button>
    </div>
  )
}

export default Keys