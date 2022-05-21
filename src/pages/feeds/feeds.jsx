import FeedContent from "../../components/feeds/feed-content";
import FeedSideBar from "../../components/feeds/feed-sidebar";


function Feeds() {
    return (
        <div className="blog-content-row">
            <FeedSideBar />
            <FeedContent />
        </div>
    );
}

export default Feeds;