import React from "react";

import Person from "./Person/Person";

const persons = (props) => {
  let allPersons = props.personList.map((person, index) => {
    return <Person key={person.id}
    name={person.name}
    age={person.age}
    click={() => props.clicked(index)}
    changed={(event) => props.changed(person.id, event)} />;
  });
  return (
    <div>
      {allPersons}
    </div>
  );
};

export default persons;
