import React from 'react'
import './intro.css'
import bg from '../../assets/bg.png'
import { useTypewriter } from 'react-simple-typewriter'

const Intro = () => {
  const [text] = useTypewriter({
    words: ['LA TIERRA NATURE ESCAPE'],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 50
  })
  return (
    <section id='intro'>
        <div className="introContent">
          <h1 className='introTitle'>{text}</h1>
          <button className='introContentBtn'>View More</button>
        </div>
        
    </section>
  )
}

export default Intro