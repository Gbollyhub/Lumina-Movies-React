import FeedContent from "../../components/feeds/feed-content";
import FeedSideBar from "../../components/feeds/feed-sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSearchedMovies } from "../../store/movies";
import { getFavourites } from "../../store/favourites";
import { Navigate  } from 'react-router-dom'
function Feeds() {
    const {movieList} = useSelector((state) => state.movies);
    const {user,token,isAuth } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
   
    const arg = {
        user: JSON.parse(user),
        token
    }
    useEffect( () => {
        dispatch(getSearchedMovies('Marvel'))
        dispatch(getFavourites(arg))
        },[])
  
        if (!isAuth) {
            return <Navigate  to="/login" />;
          }
    return (
        <div className="blog-content-row">
            <FeedSideBar />
            <FeedContent list={movieList}/>
        </div>
    );
}

export default Feeds;