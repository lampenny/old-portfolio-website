import './header.css';
import me from '../../../assets/image/me.png';
import SocialContact from '../../socialcontacts/SocialContact';

const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-info">
          Hello there, I'm a<br />
          <span className="info-name">full-stack web developer</span><br />
          with a particular love for front-end.
        </div>
        <div className="header-photo">
            <img 
              src={me}
              className="picture"
              alt="profileimg"
            />
        </div>
      </div>
      <SocialContact />
    </div>
  )
}

export default Header;