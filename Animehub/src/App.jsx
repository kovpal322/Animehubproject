import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Home from "./components/home";
import Animes from "./components/animes";
import Login from "./components/login";
import Register from "./components/register";
import Animescreen from "./components/animescreen";
import Profilepicture from "./components/profilepicture";
import UserProfile from "./components/Account";
import Favoriteanimes from "./components/favoriteanime";
import ChangeEmail from "./components/changeemail";
import ChangePassword from "./components/changepassword";
import ChangeUsername from "./components/changeusername";
import NotFound from "./components/notFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/animes" element={<Animes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/animescreen/:id" element={<Animescreen />} />
        <Route path="/profilepicture" element={<Profilepicture />} />
        <Route path="/account" element={<UserProfile />} />
        <Route path="/changeemail" element={<ChangeEmail />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/changeusername" element={<ChangeUsername />} />
        <Route path="/favoriteanimes" element={<Favoriteanimes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
