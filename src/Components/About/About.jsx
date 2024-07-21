import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about' style={{marginLeft:"22.5%"}}>
      {/* <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div> */}
      <div className="about-right">
        {/* <h3>Who We Are</h3> */}
        <h2>Our Profile</h2>
        <p>• Started in 2019 , Pixel Design & Print specializes in Pan India
          branding, retail communications, production and installation.</p>
        <p>• Our goal is to be a reliable retail designer partner helping reinforce   
            branding and marketing strategies for your business.</p>
        <p>• We approach problems head-on by exploring ideas using solid
          design principles, to create strong and meaningful concepts, while
          measuring their effectiveness and refining your business story.</p>
        <p>• We protect what your brand stands for, whilst identifying and
            amplifying the parts that will make for unforgettable experiences</p>

            <h3>Who We Are</h3>
        <p>• Pixel Design & Print is a one-stop solution to all your retail
              display & branding needs. We have in-house facilities which
              make us quality forward, extremely cost effective and
              ensuring timely deliveries. Strengthened by our own
              workshop & design house in Delhi, along with a vast network
              of associates, we work hard for the brand.
              Since we come from corporate background so having a good
              understanding of Cost, Quality & Timeline 
        </p>
        <h3>Network</h3>
        <p>• We cater to the East (Bihar, Jharkhand, West Bengal & Odisha),
            South (Bangaluru, Chennai, Hyderabad & Kochi), West
            (Maharashtra, MP, Chattisgarh, Pune) & North (Delhi NCR,
            Punjab, J&K, Rajasthan & UP) for all types of Brandings,
          Display Fabrication & BTL activities.</p>
          <h3>Our Machinery</h3>
          <p>• Large Format Printing – Indoor and Outdoor Vinyl’s, Translite,
            Flex, Fabric, Banner Media, GSB, ACP Signage’s with raise
          Acrylic Letters.</p>
           <h3>Our Strength</h3>
           <p>• POP – Props, Banner Stand, Canopies, Roll Up Standees, Cut
            Out Standee, Backdrop Stands , Lit Flange, ACP Cladding, Clip
            On Frame. Aluminum Box fitted with LED’s & Fascia Print on
            Fabric..</p>
      </div>
    </div>
  )
}

export default About
