import axios from 'axios'
import {useState} from 'react'

function Newsletter() {

  // form states 
  const [email, setEmail] = useState('');
  // submit event
  const handleSubmit=(e) => {
    e.preventDefault()
    const data={
      Email: email,
    }
    axios.post('https://sheet.best/api/sheets/d407c384-6dd4-4ad5-9dcf-def03175a5e9', data).then((response) => {
      console.log(response)
      setEmail('')
    })
  }

  return (
    <div className="newsletter">
      <div className="box">
        <h2>Newsletter</h2>
        <p>Sign up below to recieve monthly updates from me straight in your inbox.</p>
        <div className="marketing">
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" required className='' onChange={(e) => setEmail(e.target.value)} value={email}/>
        <button type='submit'>Sign Up</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter