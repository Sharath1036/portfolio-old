/* import React from "react";
import classes from './App.module.css';
import portfolio from './portfolio.png'

const ProjectArr = [
    {
      id: 1,
      image: portfolio,
      title: 'MY PORTFOLIO WEBSITE',
      description: 'I developed this portfolio website using ReactJS to showcase my work as well as blogs.I developed this portfolio website using ReactJS to showcase my work as well as blogs.',
    },

    {
      id: 2,
      title: 'SWIFT UNDERGRADS',
      description: 'I developed this website for our startup to be used by students for getting desired study materials',
    },

    {
      id: 3,
      title: 'CALCULATOR USING GUI',
      description: 'I developed this scientific calculator using PySimpleGUI which performs mathematical operations.',
    },

    {
        id: 4,
        title: 'MOVIE TICKET BOOKING SYSTEM',
        description: 'I developed this scientific calculator using PySimpleGUI which performs mathematical operations.',
    },

    {
        id: 5,
        title: 'RANGEELA RESORT',
        description: 'I developed this scientific calculator using PySimpleGUI which performs mathematical operations.',
    },

    {
        id: 6,
        title: 'UI/UX Design',
        description: 'I developed this scientific calculator using PySimpleGUI which performs mathematical operations.',
    },
] 

const projectData = ProjectArr.map((item,pos) =>{
  console.log(item);
  return(
        <div className={classes.Box1} key={item.id}>
          <div className={classes.Box5}>
          <div className={classes.Prj}><img src= {item.image} /></div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          </div>
        </div>
      )
  }
  )


export default projectData;

*/