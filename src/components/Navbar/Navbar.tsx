
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => {

  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
      <div className='logo'>
        <h1>Zobayer Hossain</h1>
        <img src={underline} alt='' />
      </div>
      <ul className='nav-menu'>
        <li ><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt='' /> : <></>}</li>
        <li ><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About</p></AnchorLink>{menu === "about" ? <img src={underline} alt='' /> : <></>}</li>
        <li ><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} alt='' /> : <></>}</li>
        <li ><AnchorLink className='anchor-link' offset={50} href='#project'><p onClick={() => setMenu("project")}>Project</p></AnchorLink>{menu === "project" ? <img src={underline} alt='' /> : <></>}</li>
        <li ><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt='' /> : <></>}</li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect with me
        </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar