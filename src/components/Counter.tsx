import React from 'react'
import { Action, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Button } from 'rmwc'
import { connect } from 'react-redux'
import { State, actions } from '../store'


interface ownProps {
    id : string
}

const mapStateToProps = (state: State, ownProps: ownProps) => ({
    value: state.counters[ownProps.id]
})

const mapDispatchToProps = actions;


interface Props {
    value : number
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
            <p>Count: {props.value}</p>
        </div>
    );
}


export default connect
    ( mapStateToProps
    , mapDispatchToProps
    )(component);
