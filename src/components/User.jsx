import React from 'react'
import { Button, TextField } from 'rmwc'
import { connect } from 'react-redux'
import { actions } from '../store'


const mapStateToProps = (state, ownProps) => (
    { fetching: state.fetching
    , username: state.username
    }
)


const mapDispatchToProps = 
    { setUsername : actions.setUsername
    , fetchUser : actions.fetchUser
    }


export const component = (props) => {
    return (
        <div>
            <TextField label="Username" onChange={(e) => props.setUsername(e.target.value)} value={props.username} />
            <Button raised icon="user" onClick={() => props.fetchUser()}>Look up</Button>
            <p>Fetching: { props.fetching ? "True" : "False" }</p>
        </div>
    );
}


export default connect
    ( mapStateToProps
    , mapDispatchToProps
    )(component)

