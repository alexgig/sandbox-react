import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { State, actions, store } from './store'
import { Button, ThemeProvider } from 'rmwc'

interface Props
  { count: number
  , increment: any
  , decrement: any
  }

const App = ( props : Props ) => {
  return (
    <ThemeProvider
      options={
        { primary: '#61DAFB'
        , secondary: 'blue'
        }
      }
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Button raised icon="add" onClick={props.increment}>Increment</Button>
            <Button raised icon="remove" onClick={props.decrement}>Decrement</Button>
          </div>
          <p>Count: {props.count}</p>
        </header>
      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = (state: State) => (
  { count: state
  }
);

const mapDispatchToProps = actions;

export default connect
  ( mapStateToProps
  , mapDispatchToProps
  )(App);
