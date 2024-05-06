import './Project.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import project_data from '../../utils/Project_data'
import arrow_icon from "../../assets/arrow_icon.svg"
import { IoLink } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Project = () => {
    return (
        <section id='project'>
            <div className='project-title'>
                <h1> My  Work</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className='project-container'>
                {
                    project_data.map((item) => (
                        <div key={item.w_no} className='project-container-box'>
                            <img src={item.w_img} alt='' />
                            <div className='project-container-box-icon'>
                                <a href={item.live}><IoLink  /></a>
                                <a href={item.github}><FaGithub/></a>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='project-showmore'>
                <p>Show more</p>
                <img src={arrow_icon} alt='' />
            </div>
        </section>
    )
}

export default Project