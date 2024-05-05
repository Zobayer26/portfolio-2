import './Education.css'
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
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
            <FaCircle size={10} className='qualification-description-icon' />
            <p>International University of Business, Agriculture and Technology
              BSc in Computer Science and Engineering</p>
          </div>
        </div>
        <div className="qualification-right">
          <div className='qualification-right-title'>
            <FaGraduationCap size={26} />
          </div>
          <div className="qualification-description">
            <FaCircle size={10} className='qualification-description-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit odit consectetur in magni repudiandae quis nisi, ipsam quae natus sint eaque commodi
              totam inventore at sit provident hic reprehenderit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education