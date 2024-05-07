import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import underline from '../../assets/nav_underline.svg'
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <div className='logo'>
            <h1>Z H</h1>
            <img src={underline} alt='' />
          </div>
          <p>I'm a frontend developer from, Bangladesh with 1 years  of experience of working </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt='' />
            <input type='email' placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-botom-left'>
          © 2023 Zobayer Hossain . All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Follow me</p>
          <a href='https://www.facebook.com/zobayerhossain.arif.35'><FaFacebook /></a>
          <a href='https://www.linkedin.com/in/md-zobayer-hossain-899921220/'><FaLinkedin /></a>
          <a href='https://github.com/Zobayer26'><FaGithub /></a>
          <a href='https://www.facebook.com/zobayerhossain.arif.35'><FaInstagram /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer