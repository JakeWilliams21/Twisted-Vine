import React, {useState} from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import '../style/Footer.css'

const Footer = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

  return (
    <div id = 'footer' >
        <div className = 'footer-content'>
            <div className = 'left'>
                <span style = {{'fontSize': 'large'}}>Sign up for Our Newsletter!</span>
                <form className = 'footer-form'>
                    <input name = 'first_name' placeholder = 'First Name' value = {firstName} onChange = {(e) => setFirstName(e.target.value)}/>
                    <input name = 'last_name' placeholder = 'Last Name' value = {lastName} onChange = {(e) => setLastName(e.target.value)} />
                    <input name = 'email' placeholder = 'example@email.com' value = {email} onChange = {(e) => setEmail(e.target.value)} />
                    <div>
                        <button type = 'submit'>Submit</button>
                    </div>
                </form>
            </div>
                <ul style = {{'fontSize': 'medium'}} className = 'hours'>
                        <li>614 - 488 - 6113</li>
                        <li>1816 West Fifth Ave</li>
                        <li>Columbus, OH, 43212, US</li>
                        <li><hr/></li>
                        <li>Sunday: 1pm to 6pm</li>
                        <li>Monday: 12pm to 7pm</li>
                        <li>Tuesday: 10:30am to 7pm</li>
                        <li>Wednesday: 10:30am to 8pm</li>
                        <li>Thursday: 10:30am to 9pm</li>
                        <li>Friday: 10:30am to 9pm</li>
                        <li>Saturday: 10:30am to 9pm</li>
                </ul>
            <div className = 'right'>
                <span>Connect with Us!</span>
                <div className = 'socials'>
                    <InstagramIcon/>
                    <EmailIcon/>
                </div>
            </div>
        </div>
        <span className = 'attribute'><a href="https://www.freepik.com/free-vector/background-leaf-pattern-design-template_33268434.htm">Image by AndreaCharlesta</a> on Freepik</span>
    </div>
  )
}

export default Footer