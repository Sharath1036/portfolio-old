import logo from './logo.svg';
import classes from './App.module.css';
import Navbar from './Navbar'
import About from './About'
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer'
import Resume from './Resume'
//import projectData from './ProjectArr';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <h2 id="About">ABOUT ME</h2>
      <About />

      <h2 id="Skills">SKILLS & TOOLS</h2>
      <Skills />
      
      <h2 id="Projects">PROJECTS</h2>
      <Projects />

      <h2 id="Resume">RESUME</h2>
      <p>This is my UI/UX Design resume.</p>
      <Resume />
    
      <Footer />
    </div>
  );
}

export default App;
