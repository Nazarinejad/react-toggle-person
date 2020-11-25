import React, { Component } from "react";
import "./App.css";

import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    //this.inputElementRef = React.createRef();
  }

  componentDidMount(){
    //this.inputElementRef.current.focus();
  }
  state = {
    showPersons: false,
    personList: [
      {
        id: 0,
        name: "name one",
        age: 22,
      },
      {
        id: 1,
        name: "name two",
        age: 28,
      },
      {
        id: 2,
        name: "name three",
        age: 35,
      },
    ],
  };


  togglePersonsHandler = () => {
    let showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons,
    });
  };
  
  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.personList];
    persons.splice(personIndex, 1);
    console.log(persons);
    this.setState({ personList: persons });
  };

  changeNameHandler = (id, event) =>{
    const personIndex = this.state.personList.findIndex( p => {
      return p.id === id
    });
    let person = {
      ...this.state.personList[personIndex]
    };
    person.name = event.target.value;
    let persons = [
      ...this.state.personList
    ];
    persons[personIndex] = person;

    this.setState({
      personList : persons  
    })
  }


  render() {
    
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          clicked={this.deletePersonHandler}
          personList={this.state.personList}
          changed={this.changeNameHandler}
        />
      );
    }
 
    return (
      <div className="App">
        <Cockpit 
        pageTitle = {this.props.pageTitle}
        showPersons = {this.state.showPersons}
        clicked={this.togglePersonsHandler}
        />
        {persons}
        
      </div>
    );
  }
}

export default App;
