import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/global/loader";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, passwordVal } from "../../store/auth";
import Notification from "../../components/global/notification"


function Register() {
  const { message, loader,isError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const userForm = {
    "first_name": "",
    "last_name": "",
    "email_address": "",
    "phone_number": "",
    "password": "",
  }


  const [userData, setUserData] = useState(userForm);
  const [confirmPassword, setConfirmPassword] = useState('');

  const clearForm = () => {
   setUserData(userForm)
  }

  const Register = async (e) => {
    e.preventDefault();
    if(userData.password !== confirmPassword){
      console.log("Not equals")
     return dispatch(passwordVal());
    }
    console.log("equals")
   dispatch(registerUser(userData));
   clearForm()
   setConfirmPassword('')
  }


  return (
    <div className="profile-row">
    { loader ? <Loader /> : null }
      <div className="app-card auth">
      { isError !== null ? <Notification message={message} type={isError} /> : null }
        <div className="auth-header">Register</div>
        <div className="login-sub">Provide your credentials to continue</div>
        <div className="form-block-2 w-form">
          <form onSubmit={Register}>
            <div className="form-row">
             <div className="form-col">
             <label className="auth-label">First Name</label>
            <input value={userData.first_name} onChange={(e) => { setUserData({ ...userData, first_name: e.target.value }) }} type="text" className="auth-field w-input" placeholder="Type here" required/>
             </div>
             <div className="form-col">
             <label className="auth-label">Last Name</label>
            <input value={userData.last_name} onChange={(e) => { setUserData({ ...userData, last_name: e.target.value }) }} type="text" className="auth-field w-input" placeholder="Type here" required/>
             </div>
             <div className="form-col">
             <label  className="auth-label">Email Address</label>
            <input value={userData.email_address} onChange={(e) => { setUserData({ ...userData, email_address: e.target.value }) }} type="email" className="auth-field w-input" placeholder="Type here" required/>            
             </div>
             <div className="form-col">
             <label className="auth-label">Phone Number</label>
            <input value={userData.phone_number} onChange={(e) => { setUserData({ ...userData, phone_number: e.target.value }) }} type="phone" className="auth-field w-input" placeholder="Type here" required/>            
             </div>
             <div className="form-col">
             <label className="auth-label">Password</label>
            <input value={userData.password} onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }} type="password" className="auth-field w-input" placeholder="Type here" required />
             </div>
             <div className="form-col">
             <label className="auth-label">Password</label>
            <input value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} type="password" className="auth-field w-input" placeholder="Type here" required />
             </div>
            </div>
            <br />
            <button type="submit" className="primary-btn auth">{ loader ? "LOADING..." : 'REGISTER'}</button>
          </form>

        </div>
       
        <br />
        <Link to="/login"><p style={{ color: 'rgb(138, 138, 138)', textAlign: 'center' }}>Already have an account? Login</p></Link>
      </div>
    </div>

  );
}

export default Register;