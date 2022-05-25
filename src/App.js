import { Routes, Route, BrowserRouter } from "react-router-dom"
import './sass/app.scss'
import './App.css';

import Header from "./components/global/header";
import Footer from "./components/global/footer";

import Feeds from "./pages/feeds/feeds";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Favourites from "./pages/feeds/favourites";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
       <Route  path = "/" element = {<Feeds/>}/>
       <Route  path = "/login" element = {<Login/>}/>
       <Route  path = "/register" element = {<Register/>}/>
       <Route  path = "/favourites" element = {<Favourites/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
