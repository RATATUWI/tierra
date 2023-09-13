import React from 'react'
import './about.css'
import aboutImg1 from '../../assets/about1.png'
import { Fade } from 'react-reveal'
import Roll from 'react-reveal/Roll';
import aboutImg2 from '../../assets/about2.png'

const About = () => {
  return (
    <section id='about'>
        <div className="aboutContent">
        <Roll right>
            <img src={aboutImg1} alt="" className='aboutImg1'/>
           </Roll>
           <Fade left>
           <h4 className='aboutTextDesc'><h3 className='aboutTextTitle'>LA TIERRA NATURE ESCAPE</h3> <br/>
            La Tierra Nature Escape is a sprawling 40-hectare property in the heart of Pagbilao, Quezon province that features 
            lush forests and greenery teeming with wildlife, captivating views, and a healing soul guaranteed to help you return 
            to your basics and commune with nature and with self. Expect to breathe in the freshest of air while listening 
            to the harmonic melodies of the wind through the trees and the enthralling songs of dozens of kinds of birds.</h4>
           </Fade>
           <Fade right>
           <h4 className='aboutTextDesc'><h3 className='aboutTextTitle'>A PLACE TO RESET, RELAX, AND RECHARGE</h3> <br/>
           La Tierra Nature Escape began as a home away from home for its proprietors. Upon realizing the beauty and healing
            power of the place, it was decided that the place would be opened to the public in order to create a space wherein
             anyone can experience La Tierra’s magic for themselves. With the humdrum daily lives most people live, 
           La Tierra is the perfect place to get a reset, enjoy some relaxation, and obtain a well-deserved recharge.  </h4>
           </Fade>
           <Roll left>
           <img src={aboutImg2} alt="" className='aboutImg1'/>
           </Roll>
           
        </div>
    </section>
  )
}

export default About