import { Link, NavLink } from "react-router-dom";
import MobileMenuModal from "./mobile-menu-modal";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import {logout} from "../../store/auth"

// Header component
function Header() {
  const { user } = useSelector((state) => state.auth);
  let parsed_user = user !== null ? JSON.parse(user) : null
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal)
  }

  return (
    <>

      {/* menu modal */}
      {modal ? <MobileMenuModal modalHandler={modalHandler} /> : null}


      {/* web header */}
      <div className="app-header">
        <div className="nav-col-1">
          <div className="logo-text">LUMINA</div>
        </div>
        <div className="nav-col-2">
          <NavLink to="/" className="nav-col-2-links">MOVIES</NavLink>
          <NavLink to="/favourites" className="nav-col-2-links">FAVOURITES</NavLink>
        </div>
        {user !== null ?
          <div className="nav-col-3">
            <div to="/favourites" className="nav-col-2-links">WELCOME {parsed_user !== null ?parsed_user.first_name : null}</div>
            <div style={{cursor: "pointer"}} onClick={()=>{dispatch(logout())}} className="nav-outlined-btn">LOGOUT</div>
          </div>
          : <div className="nav-col-3">
            <Link to="/login" className="nav-col-3-links">SIGN IN</Link>
            <Link to="/register" className="nav-outlined-btn">REGISTER</Link>
          </div>}
      </div>

      {/* mobile header */}
      <div className="app-header mobile">
        <div className="nav-col-1">
          <div className="logo-text">LUMINA</div>
        </div>
        <div className="nav-col-3">
          <div onClick={modalHandler} className="menu-icon"></div>
        </div>
      </div>
    </>
  )
}

export default Header;