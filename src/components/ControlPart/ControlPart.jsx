import React, { useState } from 'react'
import './ControlPart.scss'


export default function ControlPart() {
  const [data, setData] = useState([
    {
      icon: '../public/Profile.svg',
      alt: 'yellow two persons icon',
      partName: 'Smart search',
      content: 'The algorithm will independently select contacts according to your request'
    },
    {
      icon: '../public/Tick.svg',
      alt: '',
      partName: 'Instant use',
      content: 'Find out who is next to you right now and start communicating now'
    },
    {
      icon: '../public/Shield.svg',
      alt: '',
      partName: 'No spam',
      content: 'The necessary contacts are just a click away across the country'
    }
  ]);
  return (
    <div className='ControlPart'>
      <h2>If you need to have more control</h2>
      <div className='ControlPart__icons'>
        {
          data.map(elm => {
            return (
              <div className='icon'>
                <img src={elm.icon} alt={elm.alt} />
                <h3>{elm.partName}</h3>
                <p>{elm.content}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
