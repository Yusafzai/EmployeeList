import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
      super();


      this.state = {
        employees: [],
        searchField: ''
      };

      this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
        .then(users => this.setState({ employees: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render(){
    const { employees, searchField } = this.state;
    const filteredEmpolyees = employees.filter(employee => 
      employee.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
       <div className="App">
            <h1> Employees Working </h1>
           <SearchBox 
             placeholder="search employees"
             handleChange={this.handleChange}
           />
           <CardList employees={filteredEmpolyees} />
       </div>
    );
  }
}

export default App;