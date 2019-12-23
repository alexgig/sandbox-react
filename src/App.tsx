import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { ThemeProvider } from 'rmwc'
import Counter from './components/Counter'
import { State } from './store'
import * as R from 'ramda'


const mapStateToProps = (state: State) => (
  { counters: state.counters
  }
);


const mapDispatchToProps = {};


interface Props
  { counters: any
  }


const App = (props: Props) => {
  return (
    <ThemeProvider options={ {primary: '#61DAFB', secondary: 'blue'} }>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Counter id="counter-1"></Counter>
        <Counter id="counter-2"></Counter>
        <div>Total: {R.sum(R.values(props.counters))}</div>
      </div>
    </ThemeProvider>
  );
}


export default connect
  ( mapStateToProps
  , mapDispatchToProps
  )(App);
