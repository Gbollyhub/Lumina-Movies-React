import FeedCard from "./feed-card";
import { useDispatch, useSelector } from "react-redux";
import { useLayoutEffect } from "react";
import { getPopularMovies } from "../../store/movies";
import Notification from "../global/notification";
import Loader from "../global/loader";

function FeedContent(){
    const {loader,movieList,message,isError } = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    useLayoutEffect( () => {
        dispatch(getPopularMovies())
        },[])
  
    return ( 
     <>
     { loader ? <Loader /> : null }
         <div className="content-col-2">
         { isError != null ? <Notification message={message} type={isError} /> : null }
        <div className="card-row">
            {
                movieList.slice(0, 12).map((item, index) => {
                    return <FeedCard key={index} item={item}/>
                })
            }

        </div>
           
    </div>
     </>
    );
}

export default FeedContent;