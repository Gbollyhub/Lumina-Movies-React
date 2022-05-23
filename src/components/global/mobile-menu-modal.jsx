import { Link } from "react-router-dom";

// mobile menu modal
function MobileMenuModal() {
    return (
        <>
          <div id="mobile-menu" className="mobile-modal">
       <Link to="#" className="mobile-menu-close"></Link>
       <Link to="index.html" className="mobile-link">HOME</Link>
       <Link to="#" className="mobile-link">TOPICS</Link>
       <Link to="#" className="mobile-link">SERIES</Link>
       <Link to="index.html" className="mobile-link">DISCUSSIONS</Link>
       <Link to="#" className="mobile-link">PODCASTS</Link>
       <Link to="profile-page.html" className="mobile-link">PROFILE</Link>
       <Link to="settings.html" className="mobile-link">SETTINGS</Link>
       <Link to="/login" className="primary-btn">SIGN IN / REGISTER</Link>
     </div>

        </>
    )
   }
   
   export default MobileMenuModal;