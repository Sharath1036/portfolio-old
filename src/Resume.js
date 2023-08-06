import React from "react";
import classes from './App.module.css';

const Resume = (props) => {   //properties can also be named props
    console.log(props);
    return(
      <div className={classes.Container}>
      <div className={classes.ResumeBox} target="_blank"><img src="./UIUXResume.jpg" /></div>
      </div>
    )
}

export default Resume;