import { useState } from 'react'
import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends Component {
  state = {
    monsters: [
      {
        name: 'Yago'
      },
      {
        name: 'Bortolomeo'
      },
      {
        name: 'Frank'
      },
      {
        name: 'Linda'
      },
    ]

  }
  render() {
    return (
      <div className='App'>
        {
          this.state.monsters.map((monster) => {
            return <h1>{monster.name}</h1>
          })
        }
      </div>
    );
  }
}

export default App
