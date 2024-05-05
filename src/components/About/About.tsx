import './About.css'
import pattern_img from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'
import { useState } from 'react'
import Personal from '../Information/Personal'
import Education from '../Information/Education'
import Skills from '../Information/Skills'


const About = () => {
  const [selectOption, setselectOption] = useState('personal')

  return (
    <section id="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={pattern_img} alt='' />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt='' />
        </div>
        <div className="about-right">
          <div className="about-right-top">
            <button className={`${selectOption === 'personal' ? "about-right-top-button" : "about-right-top-button-no"}`}
              onClick={() => setselectOption('personal')}>
              Personal info
            </button>
            <button className={`${selectOption === 'Education' ? "about-right-top-button" : "about-right-top-button-no"}`}
              onClick={() => setselectOption('Education')}>
              Qualification
            </button>
            <button className={`${selectOption === 'skills' ? "about-right-top-button" : "about-right-top-button-no"}`}
              onClick={() => setselectOption('skills')}>
              Skills
            </button>
          </div>
          <div className="about-right-bottom">
            {
              selectOption === 'personal' && <Personal />
            }
            {
              selectOption === 'Education' && <Education />
            }
            {
              selectOption === 'skills' && <Skills />
            }
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achivement">
          <h1>1+</h1>
          <p>year's of experienece</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>20+</h1>
          <p>Project Complete</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>10+</h1>
          <p>Happy Client</p>
        </div>
      </div>
    </section>
  )
}

export default About