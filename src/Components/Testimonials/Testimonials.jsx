import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/cos.png'
import user_2 from '../../assets/enamor-logo.jpg'
import user_3 from '../../assets/ethos-1-2.jpg'
import user_4 from '../../assets/Godfrey.png'
import user_5 from '../../assets/file.jpg'
import user_6 from '../../assets/marlboro.jpg'
import user_7 from '../../assets/microgravity.png'
import user_8 from '../../assets/nandologo.jpg'
import SimpleImageSlider from "react-simple-image-slider";
// import user_10 from '../../assets/timex-logo.png'


const images = [
  { url: user_1 },
  { url: user_2 },
  { url: user_3 },
  { url: user_4 },
  { url: user_5 },
  { url: user_6 },
  { url: user_7 },
  { url: user_8 },
];

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    // <div className='testimonials'>
    //   <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
    //   <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
    //   <div className="slider">
    //     <ul ref={slider}>
    //         <li>
    //             <div className="slide">
    //                 <div className="user-info">
    //                     <img src={user_1} alt="" />
    //                     <div>
    //                         <h3>Centre of Sight</h3>
    //                         <span>India</span>
    //                     </div>
    //                 </div>
    //                 {/* <p>Cshoosin/g to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p> */}
    //             </div>
    //         </li>
    //         <li>
    //             <div className="slide">
    //                 <div className="user-info">
    //                     <img src={user_2} alt="" />
    //                     <div>
    //                         <h3>Enamor</h3>
    //                         <span>Edusity, USA</span>
    //                     </div>
    //                 </div>
    //                 {/* <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p> */}
    //             </div>
    //         </li>
    //         <li>
    //             <div className="slide">
    //                 <div className="user-info">
    //                     <img src={user_3} alt="" />
    //                     <div>
    //                         <h3>Ethos</h3>
    //                         <span>Edusity, USA</span>
    //                     </div>
    //                 </div>
    //                 {/* <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p> */}
    //             </div>
    //         </li>
    //         <li>
    //             <div className="slide">
    //                 <div className="user-info">
    //                     <img src={user_4} alt="" />
    //                     <div>
    //                         <h3>Godfrey Phillip</h3>
    //                         <span>Edusity, USA</span>
    //                     </div>
    //                 </div>
    //                 {/* <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p> */}
    //             </div>
    //         </li>
    //          <li>
    //             <div className="slide">
    //                 <div className="user-info">
    //                     <img src={user_5} alt="" />
    //                     <div>
    //                         <h3>Hewlett Packard</h3>
    //                         <span>Edusity, USA</span>
    //                     </div>
    //                 </div>
    //                 {/* <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p> */}
    //             </div>
    //         </li>
    //          <li>
    //             <div className="slide">
    //                 <div className="user-info">
    //                     <img src={user_6} alt="" />
    //                     <div>
    //                         <h3>Marlboro</h3>
    //                         <span>Edusity, USA</span>
    //                     </div>
    //                 </div>
    //                 {/* <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p> */}
    //             </div>
    //         </li>
    //          <li>
    //             <div className="slide">
    //                 <div className="user-info">
    //                     <img src={user_7} alt="" />
    //                     <div>
    //                         <h3>Microgravity</h3>
    //                         <span>Edusity, USA</span>
    //                     </div>
    //                 </div>
    //                 {/* <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p> */}
    //             </div>
    //         </li>
    //          <li>
    //             <div className="slide">
    //                 <div className="user-info">
    //                     <img src={user_8} alt="" />
    //                     <div>
    //                         <h3>Nando's</h3>
    //                         <span>Edusity, USA</span>
    //                     </div>
    //                 </div>
    //                 {/* <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p> */}
    //             </div>
    //         </li>
    //          {/* <li>
    //             <div className="slide">
    //                 <div className="user-info">
    //                     <img src={user_9} alt="" />
    //                     <div>
    //                         <h3>William Jackson</h3>
    //                         <span>Edusity, USA</span>
    //                     </div>
    //                 </div>
    //                 <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
    //             </div>
    //         </li> */}
    //          {/* <li>
    //             <div className="slide">
    //                 <div className="user-info">
    //                     <img src={user_10} alt="" />
    //                     <div>
    //                         <h3>William Jackson</h3>
    //                         <span>Edusity, USA</span>
    //                     </div>
    //                 </div>
    //                 <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
    //             </div>
    //         </li> */}
    //     </ul>
    //   </div>
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

export default Testimonials
