import { configureStore, createSlice } from '@reduxjs/toolkit'
import * as R from 'ramda'
import axios from 'axios'


const initialState =
    { counters: {}
    , fetching : false
    , username: ""
    }


const reducers =
    { increment: (s, a) => {
        const newState = R.over( R.lensPath(['counters', a.payload]), (count) => count + 1 || 0, s)
        return newState
    }
    , decrement: (s, a ) => {
        const newState = R.over( R.lensPath(['counters', a.payload]), (count) => count - 1 || 0, s)
        return newState
    }
    , fetchUser: (s) => {
        console.log(`Fetching: ${s.username}`)
        axios.get(`https://api.github.com/users/${s.username}`)
            .then( response => {
                console.log( response )
                store.dispatch(actions.fetchedUser())
            })
            .catch( error => {
                if (error.response)
                    console.log(`Response:`, error.response)
                else if (error.request)
                    console.log(`Request:`, error.request)
                else
                    console.log(`Error:`, error.message)
                console.log(`Config:`, error.config)
                store.dispatch(actions.fetchedUser())
            })
        const newState = R.merge(s, {fetching: true})
        return newState
    }
    , fetchedUser: (s) => {
        console.log(`Fetched: ${s.username}`)
        const newState = R.merge(s, {fetching: false})
        return newState
    }
    , setUsername: (s, a) => {
        const newState = R.set( R.lensPath(['username']), a.payload, s)
        return newState;
    }
    }


export const slice = createSlice(
    { name: 'counter'
    , initialState
    , reducers
    }
);


export const actions = slice.actions


export const store = configureStore(
    { reducer: slice.reducer
    }
);

