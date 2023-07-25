import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Thoughts from './components/Thoughts'
import Videos from './components/Videos'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Fade from 'react-reveal/Fade'

function App() {
  return (
    <div className='App'>
      <Fade top distance='0%' duration={1500}>
        <Navigation />
        <Hero />
        <About />
        <Thoughts />
        <Videos />
        <Newsletter />
        <Footer />
      </Fade>
    </div>
  )
}

export default App
