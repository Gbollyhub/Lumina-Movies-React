import { Link } from "react-router-dom";
import {logout} from "../../store/auth"
import { useSelector,useDispatch } from "react-redux";
// mobile menu modal
function MobileMenuModal({modalHandler}) {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    return (
        <>
          <div id="mobile-menu" className="mobile-modal">
       <div onClick={modalHandler} className="mobile-menu-close"></div>
       <Link to="/" className="mobile-link">HOME</Link>
       <Link to="/feeds" className="mobile-link">MOVIES</Link>
       <Link to="/favourites" className="mobile-link">FAVOURITES</Link>
       {user === null ? <Link to="/login" className="primary-btn">SIGN IN / REGISTER</Link> :null}
      {user !== null ? <div onClick={()=>{dispatch(logout())}} className="primary-btn">LOGOUT</div> :null}
     </div>

        </>
    )
   }
   
   export default MobileMenuModal;