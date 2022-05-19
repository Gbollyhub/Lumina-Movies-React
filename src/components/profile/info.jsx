function Info(){
    return (
     <>
         <div className="photo-banner">
      <div className="profile-picture"></div>
      <a href="#" className="nav-outlined-btn question-status">Change Banner</a>
    </div>
    <div className="profile-name pack">
      <div className="profile-name">@monstajamz</div><img src="images/Vector-1.svg" loading="lazy" width="16" alt="" className="verified-image"/>
      <div className="profile-name"> <span className="profile-name-simp">- member since 1 year ago</span></div>
    </div>
     </>
    );
}

export default Info;