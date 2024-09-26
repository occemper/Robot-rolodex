import { useState } from 'react'
import { Component } from 'react'

import './App.css'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

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
          }
        ))
      );

  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleUpperCase();
    this.setState(
      () => {
        return { searchField };
      });
  }

  render() {


    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters
      .filter(x =>
        x.name
          .toLocaleUpperCase()
          .includes(searchField)
      );

    return (
      <div className='App'>
        <SearchBox
          className={'monsters-search-box'}
          onChangeHandler={onSearchChange}
          placeholder={'search monsters'} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App
