import { useState } from 'react'
import { Component } from 'react'

import './App.css'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

class App extends Component {
  state = {
    robots: [],
    searchField: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json()
        .then((users) => this.setState(
          () => {
            return {
              robots: users,
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


    const { robots: robots, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredRobots = robots
      .filter(x =>
        x.name
          .toLocaleUpperCase()
          .includes(searchField)
      );

    return (
      <div className='App'>
        <h1 className='app-title'>Robots Rolodex</h1>

        <SearchBox
          className={'robots-search-box'}
          onChangeHandler={onSearchChange}
          placeholder={'search robots'} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App
