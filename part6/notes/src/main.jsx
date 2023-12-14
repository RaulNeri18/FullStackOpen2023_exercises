import React from 'react'
import ReactDOM from 'react-dom/client'
//import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
//import { configureStore } from '@reduxjs/toolkit'

import store from './store'
import App from './App'
//import noteReducer from './reducers/noteReducer'
//import filterReducer from './reducers/filterReducer'
//import noteService from './services/notes'
//import noteReducer, { setNotes } from './reducers/noteReducer'

// using combineReducers
/*
const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})

const store = createStore(reducer)
*/

// using configureStore
/*
const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer
  }
})
*/

//noteService.getAll().then(notes =>
//  store.dispatch(setNotes(notes))
//)

/*
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'ZERO':
      return 0
    default:
      return state
  }
}

const store = createStore(counterReducer)

const App = () => {
  return (
    <div>
      <div>
        {store.getState()}
      </div>
      <button 
        onClick={e => store.dispatch({ type: 'INCREMENT' })}
      >
        plus
      </button>
      <button
        onClick={e => store.dispatch({ type: 'DECREMENT' })}
      >
        minus
      </button>
      <button 
        onClick={e => store.dispatch({ type: 'ZERO' })}
      >
        zero
      </button>
    </div>
  )
}
*/

//console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

//store.subscribe(() => console.log(store.getState()))
//store.dispatch(filterChange('IMPORTANT'))
//store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))