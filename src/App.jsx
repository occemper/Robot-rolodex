import { useState } from 'react'
import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends Component {
  state = {
    monsters: [
      {
        id: '1q123',
        name: 'Yago'
      },
      {
        id: '1q123ghfgh',
        name: 'Bortolomeo'
      },
      {
        id: '1q15y43',
        name: 'Frank'
      },
      {
        id: '1dfgq13',
        name: 'Linda'
      },
    ]

  }
  render() {
    return (
      <div className='App'>
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}>
              <h1>{monster.name}</h1>
              </div>
          })
        }
      </div>
    );
  }
}

export default App
