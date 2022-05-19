function Login() {
    return (
     <>
         <div className="profile-row">
    <div className="blog-card auth">
      <div className="auth-header">Login into your account</div>
      <div className="login-sub">Provide your credentials to continue</div>
      <div className="form-block-2 w-form">
        <form>
            <label className="auth-label">Email Address</label>
            <input type="text" className="auth-field w-input"placeholder="Type here" id="name"/>
                <label  className="auth-label">Password</label>
                <input type="email" className="auth-field w-input" placeholder="Type here" id="email" required=""/>               
                </form>
      </div>
      <a href="#" className="primary-btn auth">LOGIN</a>
      <br/>
      <a href="/register"><p style={{color:'rgb(138, 138, 138)',textAlign: 'center'}}>Don't have an account? Register</p></a> 
    </div>
  </div>
     </>
    );
}

export default Login;