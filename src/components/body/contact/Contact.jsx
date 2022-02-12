import './contact.css';
import SocialContact from '../../socialcontacts/SocialContact'

const Contact = () => {
  return (
    <div className="contact">
      <label className="section-title"></label>
        <div className="contact-container">
          <div className="contact-left">
            <p>Get in touch at penny.cy.lam@gmail.com</p>
            <SocialContact />
          </div> 
        </div>
      
    </div>
  )
}

export default Contact;