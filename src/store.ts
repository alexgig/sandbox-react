import { configureStore } from '@reduxjs/toolkit'
import * as R from 'ramda'
import { Action, PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface State
    { counters: any
    }


const initialState: State =
    { counters: {}
    }


const reducers =
    { increment: (s: State, a: PayloadAction<string>) : State => {
            const newState = R.over( R.lensPath(['counters', a.payload]), (count: number) => count + 1 || 0, s)
            return newState
        }
    , decrement: (s: State, a: PayloadAction<string>) : State => {
            const newState = R.over( R.lensPath(['counters', a.payload]), (count: number) => count - 1 || 0, s)
            return newState
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

