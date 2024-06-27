import doyoonLogo from "./images/doyoon-logo.png";
import Projects from "./home-sections/Projects";
import Experience from "./home-sections/Experience";
import Skills from "./home-sections/Skills";
import doyoon from "./images/doyoon.jpg"
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";


gsap.registerPlugin(Draggable);

function App() {
  Draggable.create(".about-card", {
    bounds: ".about-container"
  });

  return (
    <div className="App">
      <nav className="navbar">
        <img src={doyoonLogo} alt="Doyoon Face Logo" height="32" />
        <div className="nav-group">
          <a href="https://doyoonkim24.github.io/">Projects</a>
          <a href="https://doyoonkim24.github.io/">Work</a>
          <a href="https://doyoonkim24.github.io/">Skills</a>
          <a href="https://doyoonkim24.github.io/">About</a>
        </div>
      </nav>
      <div className="hero-section">
        <h4>Doyoon Kim</h4>
        <h1 className="hero-header">
          Software Developer <br />
          and Designer
        </h1>
      </div>

      <Projects />
      <Experience />
      <Skills />
      <div className="divider"/>

      <div className="about-section">
        <h2> About Me </h2>
        <div className="about-container">
          <div className="about-card" style={{width: "380px", backgroundColor: "#FFD7D7"}}>
            <div className="pin1"></div>
            <div className="pin2"></div>
            <h5 className="about-card-title" >Education</h5>
            <div className="about-line"></div>
            <ul>
              <li><p>University of Waterloo</p></li>
              <li><p>Bachelors of Computer Science</p></li>
              <li><p>Minor in Music and Digital Arts Communication</p></li>
            </ul>
          </div>
          <div className="about-card" style={{backgroundColor: "#EEF8DA"}}>
            <div className="pin1"></div>
            <div className="pin2"></div>
            <h5 className="about-card-title">Hobbies</h5>
            <div className="about-line"></div>
            <ol>
              <li><p>Playing Trumpet</p></li>
              <li><p>Baking</p></li>
              <li><p>Crochet</p></li>
              <li><p>Raptors Basketball</p></li>
            </ol>
          </div>
          <div className="about-card" style={{width: "500px", backgroundColor: "#FFF1D7" }}>
            <div className="pin1"></div>
            <div className="pin2"></div>
            <h5 className="about-card-title">About</h5>
            <div className="about-line"></div>
            <p>Hello and welcome to my website! I’m Doyoon, a software developer and designer.
              <br/>
              <br/>
              I have a passion for both programming and design, and I love bringing creative ideas to life through code.
              <br/>
              <br/>
              I am constantly on the hunt to learn new things and tackle new challenges. Whether it's developing a new app or 
              designing a user-friendly interface, I'm all about making things that work well and look great.
              <br/>
              <br/>
              I’m always open to connect so please feel free to reach out! Let's create something awesome together!</p>
          </div>
          <div className="about-card" style={{backgroundColor: "#DAEFF8"}}> 
            <div className="pin1"></div>
            <div className="pin2"></div>
            <h5 className="about-card-title">Me!</h5>
            <div className="about-line"></div>
            <img src={ doyoon } alt="Doyoon smiling in the mountains" height='250px' style={{ borderRadius: "15px"}}/>
          </div>
          <div className="about-card" style={{backgroundColor: "#F4DAF8"}}>
            <div className="pin1"></div>
            <div className="pin2"></div>
            <h5 className="about-card-title">Socials</h5>
            <div className="about-line"></div>
            <ol>
              <li><a href="https://www.linkedin.com/in/doyoonkim24/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/DoyoonKim24/" target="_blank" rel="noreferrer">Github</a></li>
              <li><a href="mailto:kimdoyo424@gmail.com">Email</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
