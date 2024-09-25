import { useState } from 'react'
import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  };



  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json()
        .then((users) => this.setState(
          () => {
            return {
              monsters: users,
            };
          },
          () => {
            console.log(this.state);
          }
        ))
      );

  }

  render() {

    const filteredMonsters = this.state.monsters
      .filter(x =>
        x.name
          .toLocaleUpperCase()
          .includes(this.state.searchField)
      );

    return (
      <div className='App'>
        <input className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={(event) => {
            const searchField = event.target.value.toLocaleUpperCase();
            this.setState(
              () => {
                return { searchField };
              });
          }}
        />
        {
          filteredMonsters.map((monster) => {
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
