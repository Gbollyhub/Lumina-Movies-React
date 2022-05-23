import { Link,Navigate   } from "react-router-dom";
import Loader from "../../components/global/loader";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../../components/global/notification"
import { useState } from "react";
import { LoginUser } from "../../store/auth";

function Login() {

  const {user,isAuth,token, message, loader,isError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const userForm = {
    "email_address": "",
    "password": "",
  }


  const [userData, setUserData] = useState(userForm);

  const clearForm = () => {
   setUserData(userForm)
  }

  const LoginHandler = async (e) => {
    e.preventDefault();
   dispatch(LoginUser(userData));
   clearForm()
  }

  if (isAuth) {
    return <Navigate  to='/' />
   }

  return (
      <div className="profile-row">
        { loader ? <Loader /> : null }
        <div className="app-card auth">
        { isError != null ? <Notification message={message} type={isError} /> : null }
          <div className="auth-header">Login into your account</div>
          <div className="login-sub">Provide your credentials to continue</div>
  
          <div className="form-block-2 w-form">
            <form onSubmit={LoginHandler}>
              <label className="auth-label">Email Address</label>
              <input value={userData.email_address} onChange={(e) => { setUserData({ ...userData, email_address: e.target.value }) }} type="email" className="auth-field w-input" placeholder="Type here"  required/>
              <label className="auth-label">Password</label>
              <input value={userData.password} onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }} type="password" className="auth-field w-input" placeholder="Type here" id="email" required />
            <br />
            <button type="submit" className="primary-btn auth">{ loader ? "LOADING..." : 'LOGIN'}</button>
            </form>
          </div>
          
          <br />
          <Link to="/register"><p style={{ color: 'rgb(138, 138, 138)', textAlign: 'center' }}>Don't have an account? Register</p></Link>
        </div>
      </div>
  );
}

export default Login;