import React from "react";
import classes from './Person.module.css'
const person = (props) => {
  return (
    <div className={classes.wrapper}
    onClick={props.click}>
      <h3>{props.name}</h3>
      <h4>{props.age}</h4>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
};

export default person;
