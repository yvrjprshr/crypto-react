import Content from '../Content/Content'
import Sidebar from '../Sidebar/Sidebar'
import './Main.css';
function Main() {
  return (
    <>
        <div className="box">
            <Sidebar/>
            <Content/>
        </div>
    </>
  )
}

export default Main