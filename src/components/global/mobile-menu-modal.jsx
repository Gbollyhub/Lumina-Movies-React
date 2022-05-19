
// mobile menu modal
function MobileMenuModal() {
    return (
        <>
          <div id="mobile-menu" className="mobile-modal">
       <a onclick="closeModalMenu()" href="#" className="mobile-menu-close"></a>
       <a href="index.html" className="mobile-link">HOME</a>
       <a href="#" className="mobile-link">TOPICS</a>
       <a href="#" className="mobile-link">SERIES</a>
       <a href="index.html" className="mobile-link">DISCUSSIONS</a>
       <a href="#" className="mobile-link">PODCASTS</a>
       <a href="profile-page.html" className="mobile-link">PROFILE</a>
       <a href="settings.html" className="mobile-link">SETTINGS</a>
       <a href="register.html" className="primary-btn">SIGN IN / REGISTER</a>
     </div>

        </>
    )
   }
   
   export default MobileMenuModal;