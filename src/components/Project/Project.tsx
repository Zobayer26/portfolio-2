import './Project.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import project_data from '../../utils/Project_data'
import arrow_icon from "../../assets/arrow_icon.svg"
import { IoLink } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
const Project = () => {

    const [count, setCount] = useState(6)
    const handleShowmore = () => {
        setCount(prev => prev + 3)
    }
    const handleShowless= () => {
        setCount(prev => prev - 3)
    }
    return (
        <section id='project'>
            <div className='project-title'>
                <h1> My  Work</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className='project-container'>
                {
                    project_data.slice(0, count).map((item) => (
                        <div key={item.w_no} className='project-container-box'>
                            <img src={item.w_img} alt='' />
                            <div className='project-container-box-icon'>
                                <a href={item.live}><IoLink /></a>
                                <a href={item.github}><FaGithub /></a>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
               count <project_data.length && (<div onClick={handleShowmore}
                className='project-showmore'>
                <p>Show more</p>
                <img src={arrow_icon} alt='' />
            </div>)
            }
              {
               count >=project_data.length && (<div onClick={handleShowless}
                className='project-showmore'>
                <FaArrowLeft />
                <p>Show less</p>
            </div>)
            }
        </section>
    )
}

export default Project