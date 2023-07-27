import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Thoughts() {

  // function handleMouseEnter(e) {
  //   console.log(e)
  // }

  // const myElement = document.getElementById("boom");
  // const highlight = document.getElementById("beem");
  // myElement.style.backgroundColor = "red";

  return (

    <div className="thoughts">
      <h2>Thoughts</h2>
      <div className="line-item" >
      <div className="title" id='boom'>
        <p>Supporting and empowering women in tech sales</p>
      </div>

      <a href="https://wearetechwomen.com/supporting-and-empowering-women-in-tech-sales/" target="_blank" rel="noreferrer" >

      <div className="read">
        <p className='beem'>Read</p>
        <FontAwesomeIcon className="iconn" icon={faArrowRight} style={{color: "#7FCAC4",}} />
      </div>

        </a>

      </div>
      <div className="line-item">
      <div className="title">
        <p>The Power of Women in Tech Sales</p>
      </div>
        <a href="https://www.samsara.com/uk/blog/3-takeaways-from-samsaras-women-in-sales/" target="_blank" rel="noreferrer" >

      <div className="read">
          <p className='beem'>Read</p>
        <FontAwesomeIcon className="iconn" icon={faArrowRight} style={{color: "#7FCAC4",}} />
      </div>
        
        </a>
      </div>
      <div className="line-item last">
      <div className="title">
        <p>Breaking the male bias in tech</p>
      </div>
      
      <a href="https://rss.com/podcasts/jobsforwomen/847482/" target="_blank" rel="noreferrer" >
      <div className="read">
        <p className='beem'>Read</p>
        <FontAwesomeIcon className="iconn" icon={faArrowRight} style={{color: "#7FCAC4",}} />
        
      </div></a>
      </div>
    </div>
  )
}

export default Thoughts