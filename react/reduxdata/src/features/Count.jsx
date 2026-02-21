import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, zero } from './counterSlice';

function Count() {

    const count = useSelector((data)=>data.counter.value)
    console.log(count);

    const dispatch = useDispatch()
    
  return (
    <div>
      hello this A Count {count}

      <button onClick={()=>dispatch(increment())} >increment </button>
      <button onClick={()=>dispatch(decrement())} >decrement </button>
      <button onClick={()=>dispatch(zero())} >zero </button>
    </div>
  )
}

export default Count
