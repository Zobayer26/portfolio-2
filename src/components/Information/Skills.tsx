import './Skills.css'
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
const Skills = () => {
  return (
    <div className='about-skills'>
      <div className='skill-title'>
        <h1>Skills</h1>
      </div>
      <div className="about-skill">
        <p> C /C++ </p>
        <hr style={{ width: "60%" }} />
      </div>
      <div className="about-skill">
        <p>HTML & CSS </p>
        <hr style={{ width: "55%" }} />
      </div>
      <div className="about-skill">
        <p>Javascript</p>
        <hr style={{ width: "50%" }} />
      </div>
      <div className="about-skill">
        <p>Next js </p>
        <hr style={{ width: "65%" }} />
      </div>
      <div className="about-skill">
        <p>React Js </p>
        <hr style={{ width: "55%" }} />
      </div>
      <div className="about-skill">
        <p>Typescript</p>
        <hr style={{ width: "45%" }} />
      </div>
      <div className="about-skill">
        <p>Mongodb </p>
        <hr style={{ width: "50%" }} />
      </div>
      <div className="about-skill">
        <p>My SQL </p>
        <hr style={{ width: "60%" }} />
      </div>
      <div className='tools'>
        <h1>Tools</h1>
      </div>
      <div className='tools-icon'>
        <VscVscode size={32} />
        <VscGithubInverted size={32} />
        <SiPostman size={32} />
      </div>
    </div>
  )
}

export default Skills