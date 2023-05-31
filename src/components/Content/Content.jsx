import ContentBody from "../ContentBody/ContentBody";
import ContentNav from "../ContentNav/ContentNav";
import './Content.css';
function Content() {
  return (
    <>
      <div className="content">
        <ContentNav />
        <ContentBody />
      </div>
    </>
  );
}

export default Content;
