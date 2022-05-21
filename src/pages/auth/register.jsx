import { Link } from "react-router-dom";

function Register(){
    return (
     <>
     <div className="profile-row">
    <div className="blog-card auth">
      <div className="auth-header">Register</div>
      <div className="login-sub">Provide your credentials to continue</div>
      <div className="form-block-2 w-form">
        <form>
            <label  className="auth-label">Name</label>
            <input type="text" className="auth-field w-input"  placeholder="Type here" id="name"/>
                <label  className="auth-label">Email Address</label>
                <input type="email" className="auth-field w-input" placeholder="Type here" id="email" required=""/>
                    <label  className="auth-label">Password</label>
                    <input type="email" className="auth-field w-input"  placeholder="Type here" id="email-2" required=""/>
        <label  className="auth-label">Confirm Password</label>
        <input type="email" className="auth-field w-input" placeholder="Type here" id="email-2" required=""/>

        </form>
      
      </div>
      <Link to="#" className="primary-btn auth">REGISTER</Link>
      <br/>
     <Link to="/login"><p style={{color:'rgb(138, 138, 138)',textAlign: 'center'}}>Already have an account? Login</p></Link> 
    </div>
  </div>
     </>
    );
}

export default Register;