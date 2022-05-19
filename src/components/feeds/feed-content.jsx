import FeedActions from "./feed-actions";
import FeedCard from "./feed-card";

function FeedContent(){
    return (
     <>
         <div className="content-col-2">
           <FeedActions/>
        <div className="card-row">
       <FeedCard/>
       <FeedCard/>
       <FeedCard/>
        </div>
           
    </div>
     </>
    );
}

export default FeedContent;