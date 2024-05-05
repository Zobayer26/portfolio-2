import './Hero.css'
import profile_img from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <section id='home' className='hero'>
            <img src={profile_img} alt='' />
            <h1>
                <span>I'm Zobayer Hossain </span>, Frontend developer
            </h1>
            <p>
            I'm a frontend developer from ,Bangladesh with 1 years  of experience of working
            </p>
            <div className="hero-action">
                <div className="hero-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me   </AnchorLink></div>
                <div className="hero-resume">Resume</div>
            </div>
        </section>
    )
}

export default Hero