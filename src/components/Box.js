import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux"

export default function Box(props) {    //index
 
const state = useSelector(state => state);
// const boxColors = useSelector(state => state.boxColors);
// const boxColor =boxColors[index]

    const color = useSelector((state) => state.color)
       const dispatch = useDispatch()

    const handleChange = (e)=>{
        dispatch({
            type: "EACH_BOX",
            payload: { color: e.target.value, index: boxColor}
          })}
    }

//         

//{{backgroundColor: boxColor? boxColor: color}}
            return (    
                <div className="box" style={{backgroundColor:color}}>
                <h4 ></h4> 

                <input 
                type="text" 

                onChange={handleChange()}
                /> 



        </div>
    )
}
