import { configureStore, createSlice } from '@reduxjs/toolkit'
import * as R from 'ramda'
import axios from 'axios'


const initialState =
    { counters: {}
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
            .then( response => store.dispatch(actions.fetchedUser(response.data)))
    }
    , fetchedUser: (s, a) => {
        console.log(`Fetched: ${s.username}`)
        console.log(a.payload)
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

