import React from "react";
import classes from './App.module.css';
import AboutMe from './AboutData'

const About = (props) => {   //properties can also be named props
    console.log(props);
    return(
        <div className={classes.Container}>
        <div className={classes.AboutLeft}>
          <h3>{AboutMe.title}</h3>
          <p>{AboutMe.description}</p>
        </div>

        <div className={classes.AboutRight}><img src="./Sharath.jpg"/></div>
      </div>
    )
}

export default About;