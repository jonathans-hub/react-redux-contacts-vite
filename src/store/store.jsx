import {legacy_createStore as createStore, applyMiddleware} from 'redux'
import {contactReducer} from '../reducers/contactReducer'
import thunk from 'redux-thunk'


export const store = createStore (contactReducer, applyMiddleware(thunk))
