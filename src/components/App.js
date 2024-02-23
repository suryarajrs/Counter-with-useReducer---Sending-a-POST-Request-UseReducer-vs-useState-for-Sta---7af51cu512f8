import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';

const initialState = {
 counter:0
}
const App = () => {
const [state,dispatch] = useReducer(counterReducer,{initialState})
  return (
    <div id="main">

      <span id='counter'>{state.counter}</span>

      <button id='increment-btn' onClick={()=>{dispatch({type:'increment'})}}>increment</button>
      <button id='decrement-btn' onClick={()=>{dispatch({type:'decrement'})}}>decrement</button>

    </div>
  )
}


export default App;
