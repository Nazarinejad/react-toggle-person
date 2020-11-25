import React , {useEffect, useRef} from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    useEffect(()=>{
        console.log('useEffectttttttt');
        toggleBtnRef.current.click();
    },[]);
    let btnClass = '';

    
    if(props.showPersons){
        btnClass = classes.red;
    }
    else{
        btnClass = classes.green;
    }

    return(
        <div className={classes.wrapper}>
            <h1>{props.pageTitle}</h1>
            <button onClick={props.clicked}
            ref={toggleBtnRef}
            className={btnClass}
            > toggle person list</button>
        </div>
    );
}

export default Cockpit;