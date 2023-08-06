import React from "react";
import classes from './App.module.css';

const Navbar = (props) => {   //properties can also be named props
    console.log(props);
    return(
       <header className={classes.Navbar}>
        <nav>
        <ul>
          <li><a href="#home" className={classes.active}>Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Resume">Resume</a></li>
        </ul>
        </nav>
        </header>
    )
}
export default Navbar;