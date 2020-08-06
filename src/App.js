import React from 'react';

import './App.css';
import {useDispatch, useSelector} from "react-redux"
import Box from './components/Box'

function App() {
// const boxColor =boxColors[index]


// const state = useSelector(state => state);
// const boxColors = useSelector(state => state.boxColors);




const dispatch = useDispatch()
const count= useSelector((state)=> state.count)


const increment = () => {
  dispatch({type:"INCREMENT"})
}
const decrement = ()=> {
  dispatch({type:"DECREMENT"})

}
const reset = () => {
  dispatch({type:"RESET"})
}
const changeColor = (e) =>{
  dispatch ({type:"COLOR", payload:{color:e.target.value}})
}



const renderBoxes =()=> {
  let boxArray =[]
  // Array.from(Array(state.count)).forEach((x,i)=>{
  //   const boxColor =boxColors[i] || state.color;
  //   boxArray.push(
  //     <div
  //     key={i}
  //       style={{
  //         backgroundColor: boxColor
  //       }}
  //       className="box"
  //     >
  //       <h1>Enter your single color</h1>
  //       <input onChange={e =>
  //           dispatch({
  //             type: "CHANGE_SPECIFIC_BOX",
  //             payload: { color: e.target.value, index: i }
  //           })
  //         }></input>

  //     </div>
  //   )
  // })

  for (let i=0; i < count; i++){
    boxArray.push(<Box/>)
  }


  return boxArray  
}


  return (
    <div className="App">
      <div style={{ marginBottom:"10px"}}>
      <h1>counter</h1>
      <h2>{count}</h2>
      <input type="text" onChange={(e)=> changeColor(e)}/>
      <button onClick={()=> increment()}>increment</button>
      <button onClick={()=> decrement()}>decrement</button>
      <button onClick={()=> reset()}>reset</button>
      </div>
      {renderBoxes()}

    </div>
  );
}

export default App;
