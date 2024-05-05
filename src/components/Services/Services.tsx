import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../utils/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
    return (
        <section id="services">
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className='services-container'>
                {Services_Data.map((item) => (
                    <div key={item.s_no}
                        className='services-format'>
                        <h3>{item.s_no}</h3>
                        <h2>{item.s_name}</h2>
                        <p>{item.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon} alt='' />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services