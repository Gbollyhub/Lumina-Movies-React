import FeedCard from "./feed-card";

function FeedContent(){
    return (
     <>
         <div className="content-col-2">
        <div className="card-row">
       <FeedCard/>
       <FeedCard/>
       <FeedCard/>
       <FeedCard/>
        </div>
           
    </div>
     </>
    );
}

export default FeedContent;