import React from 'react'
import './ContentNav.css';
import './../../styles/styles.css';
function ContentNav() {
  return (
    <div className='content-nav'>
      <div className="nav-section">
        Section
      </div>
      <div className="price lbtn">
        0.2$ XYZ
        <div className="fbtn">
          Tier 1
        </div>
      </div>
    </div>
  )
}

export default ContentNav