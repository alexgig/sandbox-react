'use strict';

import { createSlice, configureStore } from '@reduxjs/toolkit'

export type State = number;

const slice = createSlice(
    { name: 'slice'
    , initialState: 0
    , reducers: 
        { increment: s => s + 1
        , decrement: s => s - 1
        }
    }
);

export const actions = slice.actions;

export const store = configureStore(
    { reducer: slice.reducer
    }
);

