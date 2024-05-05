import { Personal_info } from '../../utils/Personal_info'
import './Personal.css'

const Personal = () => {

  return (
    <div className="personal">
      <h1>Unmatched Service Quality for over 1 year</h1>
      <p>I specialize in crafting intuitive websites with cutting-edge technology,
        delivering dynamic and engaging user experiences</p>
      <div className='personal-info'>
        {Personal_info.map((info,index) =>(
            <div key={index} className='personal-info-box'>
              <info.icon className='personal-info-box-icon' />
            <p>{info.info}</p>
          </div>
          )
        )}
      </div>
      <div className='language'>
        <h1>Language</h1>
        <ul>
          <li>Bangla -(Native)</li>
          <li>English -(Professional)</li>
        </ul>
      </div>
    </div>
  )
}

export default Personal