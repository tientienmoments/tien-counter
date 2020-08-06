import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

const initialState = {
  count: 0,
  color: "blue",
  boxColors: []
}
function reducer(state = initialState, action) {

  //switch case thuong du dung nhieu hon if else    //can 2 state de luu mau, mau chung vaf mau rieng
  switch (action.type) {
    case "INCREMENT":
      state.count++;
      state.boxColors.push(state.color)
      break;
    case "DECREMENT":
      if (state.count <= 0) {
        state.count = 0
        break;
      }
      state.count--
      state.boxColors.pop()
      break;
    case "RESET":
      state.count = 0
      break;

    case "COLOR":
      state.color = action.payload.color
      state.boxColors = state.boxColors.map((boxColors)=>action.payload.color)

      break;
    case "EACH_BOX":

      const boxColors = state.boxColors
      boxColors[action.payload.index] = action.payload.color
      break;
    // case "CHANGE_SPECIFIC_BOX":

    //   const boxColors = state.boxColors
    //   boxColors[action.payload.index] = action.payload.color
    //   break;
    default:
      return state;
  }

  // if (action.type === "INCREMENT"){
  //   state.count++                                         //
  // }else if (action.type === "DECREMENT"){

  //   if (state.count <=0){
  //     state.count=0
  //     return
  //   }
  //   state.count--
  // }


  console.log("count?", state.count)

  return { ...state }
}
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
