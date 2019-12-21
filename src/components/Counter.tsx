import React from 'react'
import { Action, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Button } from 'rmwc'
import { connect } from 'react-redux'
import * as R from 'ramda'


export interface State
    { count: object
    }


const initialState: State =
    { count: {}
    }


const reducers =
    { increment: (s: State, a: PayloadAction<string>) : State => {
        const newState = R.over( R.lensPath(['count', a.payload]), (count: number) => count + 1 || 0, s)
        return newState
        }
    , decrement: (s: State, a: PayloadAction<string>) : State => {
        const newState = R.over( R.lensPath(['count', a.payload]), (count: number) => count - 1 || 0, s)
        return newState
        }
    }


export const slice = createSlice(
    { name: 'counter'
    , initialState
    , reducers
    }
);


const mapStateToProps = (state: State) => state
  

const mapDispatchToProps = slice.actions;


interface Props {
    count : any
    id : string
    decrement(id: string): Action<string>
    increment(id: string): Action<string>
}


export const component = (props: Props) => {
    return (
        <div>
            <div>
                <Button raised icon="add" onClick={() => props.increment(props.id)}>Increment</Button>
                <Button raised icon="remove" onClick={() => props.decrement(props.id)}>Decrement</Button>
            </div>
            <p>Count: {props.count[props.id]}</p>
        </div>
    );
}


export default connect
( mapStateToProps
, mapDispatchToProps
)(component);
