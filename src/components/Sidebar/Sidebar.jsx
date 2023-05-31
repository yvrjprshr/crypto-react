import "./Sidebar.css";
import './../../styles/styles.css';
function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="top-section">

        <div className="name-header">
          <div className="name">Name</div>
          <div className="icon">Icon</div>
        </div>

        <div className="sec">
          <div className="section">Home</div>
          <div className="section">section 1</div>
          <div className="section">section 2</div>
          <div className="section">section 3</div>
          <div className="section">section 4</div>
        </div>
        </div>
        <div className="bottom-section">
          <div className="prices">
            <div className="lbtn">$0.90</div>
            <div className="fbtn">Buy $XYZ</div>
          </div>
          <div className="btn">
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;