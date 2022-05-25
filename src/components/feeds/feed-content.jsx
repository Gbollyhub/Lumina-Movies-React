import FeedCard from "./feed-card";
import { useDispatch,useSelector } from "react-redux";
import Notification from "../global/notification";
import Loader from "../global/loader";
import Empty from "../global/empty";
import { clearError } from "../../store/movies";
function FeedContent({list}){
    const {loader,message,isError } = useSelector((state) => state.movies);
    const dispatch = useDispatch();
    
    const exitError = () => {
        dispatch(clearError());
      }

    return ( 
     <>
     { loader ? <Loader /> : null }
         <div className="content-col-2">
         { isError != null ? <Notification message={message} type={isError} actionHandler={exitError}/> : null }
         {
             list.length > 0 ?         
             <div className="card-row">
             {
                 list.slice(0,10).map((item, index) => {
                     return <FeedCard key={index} item={item}/>
                 })
             }
 
         </div> :
        <Empty message="No movies at this time"/>
         }

    </div>
     </>
    );
}

export default FeedContent;