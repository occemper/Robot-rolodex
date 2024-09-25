import { useState } from 'react'
import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends Component {
  state = {
    monsters: [],
    filteredMonsters: []
  };



  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json()
        .then((users) => this.setState(
          () => {
            return {
              monsters: users,
              filteredMonsters: users
            };
          },
          () => {
            console.log(this.state);
          }
        ))
      );

  }

  render() {
    return (
      <div className='App'>
        <input className='search-box' type='search'
          placeholder='search monsters'
          onChange={(event) => {
            const filteredMonsters = this.state.monsters
              .filter(x =>
                x.name
                  .toUpperCase()
                  .includes(event.target.value.toUpperCase())
              )

            this.setState(() => {
              return { filteredMonsters: filteredMonsters }
            })
          }} />
        {
          this.state.filteredMonsters.map((monster) => {
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
