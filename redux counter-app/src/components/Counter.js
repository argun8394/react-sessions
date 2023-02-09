import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../redux/counter/counterSlice';
import { decrement } from '../redux/counter/counterSlice';

function Counter() {
    const countValue = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    // console.log(countValue)
  return (

    <div>
        <h1>{countValue}</h1>

        <button onClick ={() => dispatch(increment())}>increment</button>
        <button onClick ={() => dispatch(decrement())}>decredecrement</button>

    </div>

    
  )
}

export default Counter