import { configureStore, createSlice } from '@reduxjs/toolkit'
import * as R from 'ramda'


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

