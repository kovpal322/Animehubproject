import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Home from "./pages/home.jsx";
import Animes from "./pages/animes.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Animescreen from "./pages/animescreen.jsx";
import Profilepicture from "./pages/profilepicture.jsx";
import UserProfile from "./pages/Account.jsx";
import Favoriteanimes from "./pages/favoriteanime.jsx";
import ChangeEmail from "./pages/changeemail.jsx";
import ChangePassword from "./pages/changepassword.jsx";
import ChangeUsername from "./pages/changeusername.jsx";
import NotFound from "./pages/notFound.jsx";


 function App() {
  const user=JSON.parse(localStorage.getItem('user'))
console.log(user)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/animes" element={<Animes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/animescreen/:id" element={<Animescreen />} />
        <Route path="/profilepicture" element={user?<Profilepicture />:<Navigate to="/login"/>} />
        <Route path="/account" element={ user?<UserProfile />:<Navigate to="/login"/>} />
        <Route path="/changeemail" element={user?< ChangeEmail/>:<Navigate to="/login"/>} />
        <Route path="/changepassword" element={user?< ChangePassword/>:<Navigate to="/login"/>} />
        <Route path="/changeusername" element={user?< ChangeUsername/>:<Navigate to="/login"/>} />
        <Route path="/favoriteanimes" element={user?< Favoriteanimes/>:<Navigate to="/login"/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
