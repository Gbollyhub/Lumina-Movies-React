import { Link } from "react-router-dom";

function FeedSideBar(){
    return (
     <>
     <div className="content-col-1">
      <Link to="#" className="side-menu-links side-menu-active">Most Popular Movies</Link>
      <Link to="#" className="side-menu-links">In Theaters</Link>
      <Link to="#" className="side-menu-links">Coming Soon</Link>
    </div>
     </>
    );
}

export default FeedSideBar;