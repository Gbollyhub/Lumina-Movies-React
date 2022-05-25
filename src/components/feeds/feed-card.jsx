
import { useDispatch, useSelector } from "react-redux";
import { updateFavourites, addToFavourites } from "../../store/favourites";
import { throwError,throwSuccess } from "../../store/movies";

function FeedCard({item}){

  const {user, token} = useSelector((state) => state.auth);
  const { favourites } = useSelector((state) => state.favourites);
  const { isError} = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const addToFavHandler = async (value) => {

 
    let parsed_user = JSON.parse(user)
   let isExists = favourites.some(x => {
      return x.imdbID === value.imdbID
    })
    


  if(favourites.length > 0 ){
    console.log(favourites.length)
    if(!isExists){
      console.log(!isExists)
    const transformFav = favourites.map(x => { return x.imdbID })
   
    transformFav.push(value.imdbID)
  
    let stringfy_favourites = transformFav.join(",");
 
      dispatch(updateFavourites({"id" : parsed_user.id, "favourite_movies": stringfy_favourites, "token": token }))
      dispatch(addToFavourites(value))
    }
    else{
     dispatch(throwError("This movie is already a favourite")); 
    
   }
  }
  else{
  
    dispatch(updateFavourites({"id" : parsed_user.id, "favourite_movies": value.imdbID, "token": token }))
    dispatch(addToFavourites(value))
  }

  if(isError === false){
    dispatch(throwSuccess("Movie added to Favourites"))
  }


  }
    return (
     <>
           <div className="app-card">
        <div className="card-image-box">
          <img className="card-image" src={item.Poster} alt=""/>
          </div>
          <br />
        <div className="app-details">
        <div>
              <p className="card-header">{item.Title}</p>
            </div>
          
          <p className="card-paragraph">{item.Year}</p>
          
        </div>
        <div onClick={() => {addToFavHandler(item)}} className="primary-btn" style={{margin:0}}>Add to Fav</div>
      </div>
     </>
    );
}

export default FeedCard;