import svg from '../assets/Logo.svg'

function Navigation() {
  return (
<div className="navigation">
      <img src={svg} alt='Logo' />
      <a href='mailto:luba.ismakov@samsara.com' target='blank'><button>Contact me</button></a>
    </div>
  )
}

export default Navigation