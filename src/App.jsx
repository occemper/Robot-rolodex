import { useState, useEffect } from 'react'


import './App.css'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState(robots);

  console.log('render');


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setRobots(users));

  }, [])

  useEffect(() => {
    const newFilteredRobots = robots
      .filter(x =>
        x.name
          .toLocaleUpperCase()
          .includes(searchField)
      );

    setFilteredRobots(newFilteredRobots)
  }, [robots, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleUpperCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Robots Rolodex</h1>

      <SearchBox
        className={'robots-search-box'}
        onChangeHandler={onSearchChange}
        placeholder={'search robots'} />
      <CardList robots={filteredRobots} />

    </div>
  )
}

// class App extends Component {
//   state = {
//     robots: [],
//     searchField: ''
//   };



//   }



//   render() {


//     const { robots: robots, searchField } = this.state;
//     const { onSearchChange } = this;

//     

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Robots Rolodex</h1>

//         <SearchBox
//           className={'robots-search-box'}
//           onChangeHandler={onSearchChange}
//           placeholder={'search robots'} />
//         <CardList robots={filteredRobots} />
//       </div>
//     );
//   }
// }

export default App
