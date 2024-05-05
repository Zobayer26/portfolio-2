import './Project.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import project_data from '../../utils/Project_data'
import arrow_icon from "../../assets/arrow_icon.svg"


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
                        <div key={item.w_no}>
                            <img src={item.w_img} alt='' />
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