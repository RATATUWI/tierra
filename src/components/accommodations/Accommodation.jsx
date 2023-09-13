import React from 'react'
import './accommodations.css'
import accImg from '../../assets/about2.png'

const Accommodation = () => {
  return (
    <section id='accommodation'>
        <div className="accoContent">
            <div className="accoContentBorder">
                <img src={accImg} alt="" className='accImg'/>
            </div>
        </div>
    </section>
  )
}

export default Accommodation