import Morgan from '../assets/MS.png'
import morganMobile from '../assets/morgan-mobile.png'

function Hero() {
  return (
    // <div className="heroo">
    //   <div className="left">
    //   <h1>Luba Ismakov</h1>
    //     <h3>Sales Director, Europe</h3>
    //   </div>
    //   <div className="right">
    //   <img src="https://res.cloudinary.com/mselbekk-com/image/upload/v1690366194/luba-slider_wzzyfi.png" alt="Luba Speaking on stage" />  
    //   </div>
    // </div>
    <div className="hero">
    <img className="show" src={Morgan} alt='Morgan' />
    <img className="hidden" src={morganMobile} alt='Morgan' />
    </div>
    

  )
}

export default Hero