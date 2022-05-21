import { Link } from "react-router-dom";

function FeedCard(){
    return (
     <>
           <div className="app-card">
        <div className="card-image-box">
          <img className="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSiZZ3zIO-HMwknpvWffC_rJovFvBTms0TvYyK308EapdWvzxE6IOFSCe2K31Wr8o9ed4&usqp=CAU" loading="lazy" alt=""/>
          </div>
          <br />
        <div className="app-details">
        <div>
              <Link to="post-page.html" className="card-header">Best Options for Site-wide Search in Laravel?</Link>
            </div>
          
          <p className="card-paragraph">I need to offer search across numerous models (i.e. site-wide). I&#x27;d love to use Laravel Scout, </p>
          
        </div>
      </div>
     </>
    );
}

export default FeedCard;