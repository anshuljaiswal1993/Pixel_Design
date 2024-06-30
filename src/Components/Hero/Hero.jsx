import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Elevate your space with style</h1>
        <p>Elevate your space with style by integrating thoughtful design elements that reflect your unique taste and personality. Whether it's through carefully chosen furniture pieces, artful decor accents, or a harmonious color palette, create an ambiance that inspires and rejuvenates. Let your space speak volumes about who you are, combining functionality with aesthetic appeal to transform every corner into a reflection of elegance and comfort.</p>
        {/* <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button> */}
      </div>
    </div>
  )
}

export default Hero
