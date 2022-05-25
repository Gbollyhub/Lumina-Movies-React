import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateFavourites, removeFromFavourites } from "../../store/favourites";

function FavouritesCard({ item }) {
  const { user, token } = useSelector((state) => state.auth);
  const { loader, favourites, isError } = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    
    let parsed_user = JSON.parse(user)


    if (favourites.length > 0) {
 
      let newFav = favourites.filter(x => {
        return x.imdbID !== id
      })
      console.log(newFav)
      const transformFav = newFav.map(x => { return x.imdbID })

      let stringfy_favourites = transformFav.join(",");

      dispatch(updateFavourites({ "id": parsed_user.id, "favourite_movies": stringfy_favourites, "token": token }))
    }
    else {

      dispatch(updateFavourites({ "id": parsed_user.id, "favourite_movies": null,"token": token }))
    }
    if (!isError) {
      dispatch(removeFromFavourites(id))
    }
  }
  return (
    <>
      <div className="app-card">
        <div className="card-image-box">
          <img className="card-image" src={item.Poster} alt="" />
        </div>
        <br />
        <div className="app-details">
          <div>
            <Link to="post-page.html" className="card-header">{item.Title}</Link>
          </div>

          <p className="card-paragraph">{item.Year}</p>

        </div>
        <div onClick={()=>{removeHandler(item.imdbID)}} className="primary-btn" style={{ margin: 0, background: 'red' }}>{loader ? "Addding..." : "Remove"}</div>
      </div>
    </>
  );
}

export default FavouritesCard;