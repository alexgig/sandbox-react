import { configureStore } from '@reduxjs/toolkit'
import * as Counter from './components/Counter'

    
export const store = configureStore(
    { reducer: Counter.slice.reducer
    }
);

