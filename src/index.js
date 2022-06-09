import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';

// step 0 - require stuff from redux, react-redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// step 1 - declare reducers
const totalLikes = ( state= 0, action ) =>{
    console.log( 'in totalLikes:', action );
    if( action.type === 'INCREMENT_LIKES' ){
        state ++;
    }
    return state;
}

// step 2 - create store & combine reducers
const store = createStore(
    combineReducers({
        totalLikes
    })
)

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));