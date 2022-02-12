import './web.css';

const Web = () => {
  return (
    <div className="web">
      <div className="web-option">
        {/* <a href='#about'>
          <i className="fi fi-rr-portrait option-icon"></i>&nbsp;About
        </a> */}
        <a href='#projects'>
          <i className="fi fi-rr-duplicate option-icon"></i>&nbsp;Projects
        </a>
        <a href='#skills'>
          <i className="fi fi-rr-cube option-icon"></i>&nbsp;Skills
        </a>
        <a href='#contact'>
          <i className="fi fi-rr-at option-icon"></i>&nbsp;Contact
        </a>
      </div>
    </div>
  )
}

export default Web;