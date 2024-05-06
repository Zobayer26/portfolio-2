import './Hero.css'
import profile_img from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Zobayer_resume from "../../utils/Zobayer .pdf"

const Hero = () => {
    const handleDownload = () => {
        const pdfUrl = Zobayer_resume;
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    

    return (
        <section id='home' className='hero'>
            <img src={profile_img} alt='' />
            <h1>
                <span>I'm Zobayer Hossain </span>, Frontend developer
            </h1>
            <p>
            I'm a frontend developer from Bangladesh with 1 years  of experience of working
            </p>
            <div className="hero-action">
                <div className="hero-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me   </AnchorLink></div>
                <div onClick={handleDownload}
                className="hero-resume">Resume</div>
            </div>
        </section>
    )
}

export default Hero