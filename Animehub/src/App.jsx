import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js"
import "./App.css";
import Animedash from "./pages/AnimeDashboard.jsx"
import Profiledash from "./pages/ProfileDashboard.jsx"
import Home from "./pages/home.jsx";
import Animes from "./pages/animes.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Animescreen from "./pages/animescreen.jsx";
import Profilepicture from "./pages/profilepicture.jsx";
import UserProfile from "./pages/Account.jsx";
import Admin from "./pages/AdminDashboard.jsx";
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
        <Route path="/admin" element={<Admin/>} />
        <Route path="/Animesdashboard" element={<Animedash/>} />
        <Route path="/Profiledashboard" element={<Profiledash/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
