import React from "react";
import classes from './App.module.css';

const Projects = (props) => {   //properties can also be named props
    console.log(props);
    return(
        <div class={classes.Container}>
        <div class={classes.PrjBox}>
        <div><img src="./portfolio.png" /></div>
          <h5>MY PORTFOLIO WEBSITE</h5>
          <p>I developed this portfolio website using ReactJS to showcase my work as well as blogs.</p>
          <a href="https://sharath1036.github.io/sharathpai/"><button>DEMO</button></a>
          <a href="https://github.com/Sharath1036/sharathpai/"><button>GITHUB</button></a>
        </div>

        <div class={classes.PrjBox}>
        <div><img src="./SU.png" /></div>
          <h5>SWIFT UNDERGRADS</h5>
          <p>I developed this website using React JS for our startup to be used by students for getting desired study materials.</p>
          <a href="https://swiftundergrads.in" target="_blank"><button>DEMO</button></a>
          <a href="https://github.com/Sharath1036/swift-undergrads/"><button>GITHUB</button></a>
        </div>

        <div class={classes.PrjBox}>
          <div><img src="./rangeela.png" /></div>
          <h5>RANGEELA RESORT</h5>
          <p>I developed this webpage to test my HTML and CSS skills.</p>
          <a href="https://github.com/Sharath1036/resort-webpage"><button>GITHUB</button></a>
        </div>

        <div class={classes.PrjBox}>
        <div><img src="./houseprice.png" /></div>
          <h5>HOUSE PRICE ANALYSIS</h5>
          <p>This project gives the Linear Regression analysis of the relation between house price and other independent variables using R Programming.</p>
          <a href="https://github.com/Sharath1036/linear-regression-analysis-of-house-price"><button>GITHUB</button></a>
        </div>

        <div class={classes.PrjBox}>
        <div><img src="./movie.jpeg" /></div>
          <h5>MOVIE TICKET SYSTEM</h5>
          <p>Created a movie ticket booking system using C where the ticket is printed on the basis of the user's preferences.</p>
          <a href="https://github.com/Sharath1036/movie-ticket-booking-system"><button>GITHUB</button></a>
        </div>

        <div class={classes.PrjBox}>
          <div><img src="./calci.png" /></div>
          <h5>CALCULATOR USING GUI</h5>
          <p>I developed this webpage to test my HTML and CSS skills.</p>
          <a href="https://github.com/Sharath1036/calculator-using-gui"><button>GITHUB</button></a>
        </div>

        <div class={classes.PrjBox}>
          <div><img src="./library.png" /></div>
          <h5>LIBRARY MANAGEMENT SYSTEM</h5>
          <p>Created a library management system using MySQL server which gives us the analysis of the available books.</p>
          <a href="https://github.com/Sharath1036/library-management-system"><button>GITHUB</button></a>
        </div>

        <div class={classes.PrjBox}>
        <div><img src="./uiux.png" /></div>
          <h5>UI/UX DESIGN</h5>
          <p>I have created certain UI/UX Design projects. You can head to my Behance profile to check out my works.</p>
          <a href="https://behance.net/sharathp2"><button>BEHANCE</button></a>
        </div>
 

        <div class={classes.PrjBox}>
        <div><img src="https://hackster.imgix.net/uploads/attachments/764721/smartgarden_KZ6NYCyqow.jpg?auto=compress&w=1600&h=1200&fit=min&fm=jpg" /></div>
          <h5>IoT SMART GARDEN</h5>
          <p>Created an IoT based smart garden as a part of DJS Strike Project. You can check the Arduino code on my GitHub.</p>
          <a href="https://github.com/Sharath1036/iot-smart-garden"><button>GITHUB</button></a>
        </div>    
      </div>
    )  
}

export default Projects;