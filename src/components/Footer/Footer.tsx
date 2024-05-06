import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import underline from '../../assets/nav_underline.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <div className='logo'>
            <h1>Z H</h1>
            <img src={underline} alt='' />
          </div>
          <p>I'm a frontend developer from ,Bangladesh with 1 years  of experience of working </p>

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
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer