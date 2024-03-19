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
import Account from "./components/Account";
import Favoriteanimes from "./components/favoriteanime";
import ChangeEmail from "./components/changeemail";
import ChangePassword from "./components/changepassword";
import ChangeUsername from "./components/changeusername";
import NotFound from "./components/notFound";
function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/index":
      component = <Home />;
      break;
    case "/Animes":
      component = <Animes />;
      break;
    case "/login":
      component = <Login />;
      break;
    case "/register":
      component = <Register />;
      break;
    case "/Animescreen":
      component = <Animescreen />;
      break;
    case "/profilepicture":
      component = <Profilepicture />;
      break;
    case "/account":
      component = <Account />;
      break;
    case "/changeemail":
      component = <ChangeEmail />;
      break;
    case "/changepassword":
      component = <ChangePassword />;
      break;
    case "/changeusername":
      component = <ChangeUsername />;
      break;
    case "/favoriteanimes":
      component = <Favoriteanimes />;
      break;
    default:
      component = <NotFound></NotFound>;
  }
  return <>{component}</>;
}

export default App;
