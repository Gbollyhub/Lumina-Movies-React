function FeedSideBar(){
    return (
     <>
     <div className="content-col-1">
      <a href="create-post.html" className="primary-btn">New Discussion</a>
      <a href="#" className="side-menu-links side-menu-active">All Threads</a>
      <a href="#" className="side-menu-links">Popular This Week</a>
      <a href="#" className="side-menu-links">Solved</a>
      <a href="#" className="side-menu-links">Unsolved</a>
      <a href="#" className="side-menu-links">Leaderboard</a>
    </div>
     </>
    );
}

export default FeedSideBar;