
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Navigate  } from 'react-router-dom'
import { getFavourites } from "../../store/favourites";
import FavouritesContent from "../../components/feeds/favourites-content";


function Favourites() {
    const {favourites} = useSelector((state) => state.favourites);
    const {user,token,isAuth } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const arg = {
        user: JSON.parse(user),
        token
    }
    useEffect( () => {
        dispatch(getFavourites(arg))
        },[])
  
        if (!isAuth) {
            return <Navigate  to="/login" />;
          }
    return (
        <div className="blog-content-row">
            <FavouritesContent list={favourites}/>
        </div>
    );
}

export default Favourites;