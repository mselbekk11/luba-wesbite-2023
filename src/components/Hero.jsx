import LubaHero from '../assets/luba-slider.png'

function Hero() {
  return (
    <div className="heroo">
      <div className="left">
      <h1>Luba Ismakov</h1>
        <h3>Sales Director, Europe</h3>
      </div>
      <div className="right">
      <img src={LubaHero} alt="" />  
      </div>
    </div>
  )
}

export default Hero