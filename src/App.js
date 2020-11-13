import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  const [ personsState, setPersonsState ] = useState({
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Denise', age: 21 },
        { name: 'Henry', age: 26 }
      ],
      otherState: 'some other value'
  });

  const switchNameHandler = () => {
    // console.log("Was clicked");
    // personsState.persons[0].name = "Maximillian"; DON'T DO THIS. React does not recognise this as a state change and the UI will not update
    setPersonsState({persons: [
      { name: 'Maximillian', age: 50 },
      { name: 'Denise', age: 22 },
      { name: 'Henry', age: 26 }
    ]})
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Names</button> 
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Swimming</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );

  // note we don't have () on switchNameHandler because we don't want it to be executed immediately, we only want it to execute when the button is clicked
  
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  // this is equivalent to the JSX that is written above
}

export default app;
