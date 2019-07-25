import axios from "axios";
export const SHOW_SATE = 'SHOW_SATE';
export const ADD_COUNT = 'ADD_COUNT';

export const DEC_COUNT = 'DEC_COUNT';
///////////////         Server code
/////////////////////////


/**
 * We don't have to use the variable 'payload', we can also just name it: 'item'
 * @param {Object} item 
 */

export var number=0; 

export function addToCart(item) {
  return {
      type: 'ADD',
      item: item
  };
}
// export function addTodo(data) {
//   console.log('data from action',data)
//   return {
//       type: "ADDTODO",
//       data:data
//   }
// }
export function removeFromCart(item) {
  return {
      type: 'REMOVE',
      item: item
  };
}

///////////////////////Input Form ke liye
export function addTodo(finalform) {
  return function(dispatch){
    axios.post("http://localhost:3000/form",finalform)
    .then(function(response){
      dispatch({type:"ADDTODO", payload:response.data})
    })
    .catch(function(err){
      dispatch({type:"GET_MOBILES_REJECTED", payload:err})
    })
}
}




// export function getMobiles(){
//   return function(dispatch){
//     axios.get("http://localhost:3001/mobiles")
//       .then(function(response){
//         dispatch({type:"ADD", payload:response.data})
//       })
//       .catch(function(err){
//         dispatch({type:"GET_MOBILES_REJECTED", payload:err})
//       })
//   }
// }