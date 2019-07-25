import initialState from './initialState';

export default function cart(state = initialState.cart, action) {
    switch (action.type) {
        case 'ADD':
        // -------------------------------
        return [...state, action.item];
        // ------------------
        // return {...state, action.items:[...state.mobiles, ...action.payload], msg:'Saved! Click to continue'}
  
        //   break;

    //   number++;
        case 'REMOVE':
        
        return state.filter( i => i.id !== action.item.id);
   
        default:
            return state;
    }
};

