// import { RESET } from "../action/action";

var initialState = {
    todos:[{
        title:"Project Submission",
    content:"After ramzan submition",
    description:"try your best to perform your best"
    }]
}
function todoReducer(state = initialState , action) {
    
    switch (action.type) {

        case 'ADDTODO':
            console.log('data from reducer', action.data);

            {
                let currentodos = state.todos;
                currentodos.push(action.data);
                return { 
                    ...state,
                   todos:currentodos
                }
            }

        case 'DELETE_TODO':
        {
            let mtodos = state.todos;
            mtodos = mtodos.filter( todo => todo.title !== action.data );

            return { 
                ...state,
                todos: mtodos
            }
        }
        // case UPDATE_TODO:
        // {
        //     var updateState = state.todoList;
        //     const id = action.payload.id;

        //     var index = updateState.findIndex((x) => x.id == id);

        //     if (index > -1) {
        //         //////////
        //         // "action.payload" object is coming from the update action 
        //         //////////
        //         updateState[index] = action.payload;

        //         return ({
        //             ...state,
        //             todoList: updateState
        //         });
        //     }
        //     else {
        //         return ({
        //             ...state
        //         });
        //     }
        // }

        default:
            return state;
    }
}

export default todoReducer;