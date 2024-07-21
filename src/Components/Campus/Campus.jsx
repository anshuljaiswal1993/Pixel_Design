import React from 'react'
import './Campus.css'
import SimpleImageSlider from "react-simple-image-slider";
import user_1 from '../../assets/i1.jpg'
import user_2 from '../../assets/i2.jpg'
import user_3 from '../../assets/i3.jpg'
import user_4 from '../../assets/i4.jpg'
import user_5 from '../../assets/i5.jpg'
import user_6 from '../../assets/i6.jpg'
import user_7 from '../../assets/i7.jpg'
import user_8 from '../../assets/i8.jpg'
import user_9 from '../../assets/i9.jpg'
import user_10 from '../../assets/i10.jpg'
import user_11 from '../../assets/i11.jpg'
import user_12 from '../../assets/i12.jpg'
import user_13 from '../../assets/i13.jpg'


const images = [
  { url: user_1 },
  { url: user_2 },
  { url: user_3 },
  { url: user_4 },
  { url: user_5 },
  { url: user_6 },
  { url: user_7 },
  { url: user_8 },
  { url: user_9 },
  { url: user_10 },
  { url: user_11 },
  { url: user_12 },
  { url: user_13 },
];
const Campus = () => {
  return (
    // <div className='campus'>
    //   <div className="gallery">
    //     <img src={gallery_1} alt="" />
    //     <img src={gallery_2} alt="" />
    //     <img src={gallery_3} alt="" />
    //     <img src={gallery_4} alt="" />
    //   </div>
    //   <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    // </div>
    <div style={{marginLeft:"28%"}}>
    <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  )
}

export default Campus
