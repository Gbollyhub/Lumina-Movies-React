import { Link } from "react-router-dom";
import MobileMenuModal from "./mobile-menu-modal";

// Header component
function Header() {
 return (
     <>

     {/* menu modal */}
       {/* <MobileMenuModal/> */}


       {/* web header */}
       <div className="app-header">
    <div className="nav-col-1">
      <div className="logo-text">LOGO</div>
    </div>
    <div className="nav-col-2">
      <Link to="/" className="nav-col-2-links">TOPICS</Link>
      <Link to="/" className="nav-col-2-links">SERIES</Link>
      <Link to="index.html" className="nav-col-2-links nav-links-active">DISCUSSIONS</Link>
      <Link to="/" className="nav-col-2-links">PODCAST</Link>
    </div>
    <div className="nav-col-3">
      <Link to="/login" className="nav-col-3-links">SIGN IN</Link>
      <Link to="/register" className="nav-outlined-btn">REGISTER</Link>
    </div>
  </div>

  {/* mobile header */}
  <div className="app-header mobile">
    <div className="nav-col-1">
      <div className="logo-text">LOGO</div>
    </div>
    <div className="nav-col-3">
      <Link to="/" className="menu-icon"></Link>
    </div>
  </div>
     </>
 )
}

export default Header;