// import React from 'react'
// import { useSelector } from 'react-redux'
// import { useDispatch } from "react-redux"

// export default function Box(index) {
//     const state = useSelector(state => state);
    

//     const color = useSelector((state) => state.color)
   
//     const dispatch = useDispatch()
//         const boxColors = useSelector(state => state.boxColors);
//         const boxColor =boxColors[index]
    

//             return (    
//                 <div>
//                 <h4 className="box" style={{backgroundColor: boxColor? boxColor: color}}></h4> 

//                 <input type="text" onChange={e =>
//                     dispatch({
//                       type: "EACH_BOX",
//                       payload: { color: e.target.value, index: index }
//                     })
//                   }/> 
                 
        

//         </div>
//     )
// }
