import './Education.css'
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
// import { FaCircle } from "react-icons/fa";
const Education = () => {
  return (
    <div className="qualification">
      <h1>My journey</h1>
      <div className="qualifiction-container">
        <div className="qualification-left">
          <div className='qualification-left-title'>
            <MdOutlineWorkOutline size={26} />
            <h1>Experience</h1>
          </div>
          <div className="qualification-description">
            {/* <FaCircle size={10} className='qualification-description-icon' /> */}
            <h3>Klwebco Limited</h3>
            <p>Software developer -internship</p>
            <p>september 2023 -december 2023</p>
          </div>
        </div>
        <div className="qualification-right">
          <div className='qualification-right-title'>
            <FaGraduationCap size={26} />
            <h1>Education</h1>
          </div>
          <div className="qualification-description">
            {/* <FaCircle size={10} className='qualification-description-icon' /> */}
            <h3>International University of Bussiness Agriculture and Technology</h3>
            <p>Bachelor in CSE</p>
            <p>2020 -2023</p>

            <h3>Lalmonirhat Govt College</h3>
            <p>Higher Secondary Certificate</p>
            <p>2019</p>

            <h3>Lalmonirhat Govt  High school</h3>
            <p>Secondary School Certificate</p>
            <p>2016</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education