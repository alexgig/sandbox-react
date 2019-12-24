import React from 'react'
import { Button } from 'rmwc'
import { connect } from 'react-redux'
import { actions } from '../store'


const mapStateToProps = (state, ownProps) => ({
    value: state.counters[ownProps.id]
})


const mapDispatchToProps = actions;


export const component = (props) => {
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
