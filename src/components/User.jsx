import React from 'react'
import { Button, TextField } from 'rmwc'
import { connect } from 'react-redux'
import { actions } from '../store'


const mapStateToProps = (state, ownProps) => ({
    username: state.username
})


const mapDispatchToProps = 
    { setUsername : actions.setUsername
    , fetchUser : actions.fetchUser
    }


export const component = (props) => {
    return (
        <div>
            <TextField label="Username" onChange={(e) => props.setUsername(e.target.value)} value={props.username} />
            <Button raised icon="user" onClick={() => props.fetchUser()}>Look up</Button>
        </div>
    );
}


export default connect
    ( mapStateToProps
    , mapDispatchToProps
    )(component)

