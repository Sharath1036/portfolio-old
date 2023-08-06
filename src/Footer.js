import React from "react";
import classes from './App.module.css';

const Footer = (props) => {   //properties can also be named props
    console.log(props);
    return(
    <table>
    <tr>
    <td>Sharath Pai</td>
    <td>Copyright © 2023 SP</td>
    <td>
      <div className={classes.socials}><a href="https://www.github.com/Sharath1036/" target="_blank"><img className={classes.icons} src="./github.png" /></a></div>
      <div className={classes.socials}><a href="https://www.behance.net/sharathp2/" target="_blank"><img className={classes.icons} src="./behance.png" /></a></div>
      <div className={classes.socials}><a href="https://www.linkedin.com/in/sharathpai107" target="_blank"><img className={classes.icons} src="./linkedin.png" /></a></div>
      <div className={classes.socials}><a href="https://www.twitter.com/Sharath1072" target="_blank"><img className={classes.icons} src="./twitter.png" /></a></div>
      <div className={classes.socials}><a href="https://www.instagram.com/sharath_1007" target="_blank"><img className={classes.icons} src="./instagram.png" /></a></div>
    </td>
    </tr>
    </table>  
)
} 

export default Footer;