import { useState } from 'react'
import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends Component {
  state = {
    count: { first: 0, second: 23 },
    pount: 12
  }
  render() {
    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button
            onClick={() => {
              this.setState((state, props) => {
                return {
                  count: {
                    first: state.count.first + 12
                    , second: state.count.second + 23
                  }
                };
              },
                () => {
                  console.log(this.state);
                });
            }}
          >
            count is {this.state.count.first}; {this.state.count.second}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR{this.state.pount}
          </p>
        </div >
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    );
  }
}

export default App
