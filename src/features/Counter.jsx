import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement, reset } from './counterSlice';
import { Button } from "@/components/ui/button"

function Counter() {
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();

  return (
    <div>
        <div>
          <h1>Counter App</h1>
            <h2>{count}</h2>
            <Button onClick={()=> dispatch(increment())}>Increment</Button>
            <Button onClick={()=> dispatch(decrement())}>Decrement</Button>
            <Button onClick={()=> dispatch(reset())}>Reset</Button>
        </div>
    </div>
  )
}

export default Counter