
import { useDispatch, useSelector } from "react-redux";
import Notification from "../global/notification";
import Loader from "../global/loader";
import Empty from "../global/empty";
import FavouritesCard from "./favourites-card";
import { clearError } from "../../store/favourites";
function FavouritesContent({ list }) {
    const { loader, message, isError } = useSelector((state) => state.favourites);
    const dispatch = useDispatch();
    
    const exitError = () => {
        dispatch(clearError());
      }

    return (
        <>
            {loader ? <Loader /> : null}
            <div className="content-col-2">
                {isError != null ? <Notification message={message} type={isError} actionHandler={exitError}/> : null}
                {
                    list.length > 0 ?
                        <div className="card-row">
                            {
                                list.map((item, index) => {
                                    return <FavouritesCard key={index} item={item} index={index} />
                                })
                            }

                        </div> :
                        <Empty message="No movies found"/>
                }

            </div>
        </>
    );
}

export default FavouritesContent;