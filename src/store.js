import { configureStore, createSlice } from '@reduxjs/toolkit'
import * as R from 'ramda'
import axios from 'axios'


const initialState =
    { counters: {}
    , fetching : false
    , username: ""
    , user: {}
    }


const reducers =
    // Counter Component
    { increment: (s, a) => {
        const newState = R.over( R.lensPath(['counters', a.payload]), (count) => count + 1 || 0, s)
        return newState
    }
    , decrement: (s, a ) => {
        const newState = R.over( R.lensPath(['counters', a.payload]), (count) => count - 1 || 0, s)
        return newState
    }
    // User Component
    , fetchUser: (s) => {
        console.log(`Fetching: ${s.username}`)
        axios.get(`https://api.github.com/users/${s.username}`)
            .then( response => {
                store.dispatch(actions.fetchedUser(response.data))
            })
            .catch( error => {
                if (error.response)
                    console.log(`Response:`, error.response)
                else if (error.request)
                    console.log(`Request:`, error.request)
                else
                    console.log(`Error:`, error.message)
                console.log(`Config:`, error.config)
            })
        const newState = R.merge(s, {fetching: true, user: {}})
        return newState
    }
    , fetchedUser: (s, a) => {
        console.log(`Fetched: ${s.username}`)
        const newState = R.merge(s, {fetching: false, user: a.payload})
        return newState
    }
    , setUsername: (s, a) => {
        const newState = R.set( R.lensPath(['username']), a.payload, s)
        return newState;
    }
    }


export const slice = createSlice(
    { name: 'main'
    , initialState
    , reducers
    }
);


export const actions = slice.actions


export const store = configureStore(
    { reducer: slice.reducer
    }
);

