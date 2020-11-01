import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Denise', age: 21 },
      { name: 'Henry', age: 26 }
    ]
  }

  switchNameHandler = () => {
    // console.log("Was clicked");
    // this.state.persons[0].name = "Maximillian"; DON'T DO THIS. React does not recognise this as a state change and the UI will not update
    this.setState({persons: [
      { name: 'Maximillian', age: 50 },
      { name: 'Denise', age: 22 },
      { name: 'Henry', age: 26 }
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Swimming</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
    // this is equivalent to the JSX that is written above
  }
}

export default App;
