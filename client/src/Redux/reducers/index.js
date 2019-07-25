import { combineReducers } from 'redux';
import cart from './cartReducer';
// import posts from './postReducer'
// import CartNum from './cartReducer'
import products1a from './productsReducer';
import products1b from './productReducer21';
import products1c from './productReducer20';
import products1d from './productReducer19';

import products2a from './productReducer18';
import products2b from './productReducer17';
import products2c from './productReducer16';
import products2d from './productReducer15';

import products3a from './productReducer14';
import products3b from './productReducer13';
import products3c from './productReducer12';
import products3d from './productReducer11';

import products4a from './productReducer10';
import products4b from './productReducer9';
import products4c from './productReducer8';
import products4d from './productReducer7';

import products5a from './productReducer25';
import products5b from './productReducer24';
import products5c from './productReducer23';
import products5d from './productReducer22';

import products6a from './productReducer26';
import products6b from './productReducer27';
import products6c from './productReducer28';
import products6d from './productReducer29';

import products7a from './productReducer30';
import products7b from './productReducer31';
import products7c from './productReducer32';
import products7d from './productReducer33';

import products8a from './productReducer34';
import products8b from './productReducer35';
import products8c from './productReducer36';
import products8d from './productReducer37';
import todos from './reducer';
// import number from './productReducer38';

const rootReducer = combineReducers({
    cart,
   todos,
    products1a,
    products1b,
    products1c,
    products1d,
   
    products2a,
    products2b,
    products2c,
    products2d,

    products3a,
    products3b,
    products3c,
    products3d,

    products4a,
    products4b,
    products4c,
    products4d,
   
    products5a,
    products5b,
    products5c,
    products5d,
   
    products6a,
    products6b,
    products6c,
    products6d,
    
    
    products7a,
    products7b,
    products7c,
    products7d,
    
    
    products8a,
    products8b,
    products8c,
    products8d,
    
    // posts: posts
});

export default rootReducer;