import React from "react";
import classes from './App.module.css';


const Skills = (props) => {   //properties can also be named props
    console.log(props);
    return(
        <div class={classes.Container}>
        <div class={classes.SkillBox}><img src="./cpp.png" /></div>
        <div class={classes.SkillBox}><img src="./python.png" /></div>
        <div class={classes.SkillBox}><img src="./rpro.png" /></div>
        <div class={classes.SkillBox}><img src="./html.png" /></div>
        <div class={classes.SkillBox}><img src="./css.png" /></div>
        <div class={classes.SkillBox}><img src="./javascript.png" /></div>
        <div class={classes.SkillBox}><img src="./react.png" /></div>
        <div class={classes.SkillBox}><img src="./php.png" /></div>
        <div class={classes.SkillBox}><img src="./mysql.png" /></div>
        <div class={classes.SkillBox}><img src="./flutter.png" /></div>
        <div class={classes.SkillBox}><img src="./wordpress.png" /></div>
        <div class={classes.SkillBox}><img src="./figma.png" /></div>
      </div>

      
    )
}

export default Skills;
