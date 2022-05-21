import { Link } from "react-router-dom";

function FeedSideBar(){
    return (
     <>
     <div className="content-col-1">
      <Link to="create-post.html" className="primary-btn">New Discussion</Link>
      <Link to="#" className="side-menu-links side-menu-active">All Threads</Link>
      <Link to="#" className="side-menu-links">Popular This Week</Link>
      <Link to="#" className="side-menu-links">Solved</Link>
      <Link to="#" className="side-menu-links">Unsolved</Link>
      <Link to="#" className="side-menu-links">Leaderboard</Link>
    </div>
     </>
    );
}

export default FeedSideBar;