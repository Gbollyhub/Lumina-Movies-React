import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateFavourites, addToFavourites } from "../../store/movies";

function FeedCard({item}){
  const {loader,movieList,message,isError } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const addToFavHandler = () => {
    dispatch(updateFavourites(item.id))
    if(!isError){
      dispatch(addToFavourites(item))
    }
  }
    return (
     <>
           <div className="app-card">
        <div className="card-image-box">
          <img className="card-image" src={item.image} loading="lazy" alt=""/>
          </div>
          <br />
        <div className="app-details">
        <div>
              <Link to="post-page.html" className="card-header">{item.title}</Link>
            </div>
          
          <p className="card-paragraph">I need to offer search across numerous models (i.e. site-wide). I&#x27;d love to use Laravel Scout, </p>
          
        </div>
        <div onClick={addToFavHandler} className="primary-btn" style={{margin:0}}>{loader ? "Addding..." : "Add to Fav"}</div>
      </div>
     </>
    );
}

export default FeedCard;