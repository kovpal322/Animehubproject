import { useEffect, useState } from "react";
import Header from "../components/header.jsx";
import LogoutButton from "../components/LogoutButton.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext.jsx";
export default function UserProfile() {
  const { user, token } = JSON.parse(localStorage.getItem("user"));
  const { dispatch } = useUserContext();
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const getUserInfo = async (id) => {
    try {
      const resp = await fetch("http://localhost:4000/getuser/" + id, {
        headers: { Authorization: "Bearer " + token },
      });
      const data = await resp.json();

      if (!resp.ok) {
        setError("failed to fetch user");
      }

      if (resp.ok) {
        console.log();
        setUserInfo(data);
      }
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getUserInfo(user);
  }, []);

  const deleteAccount = async () => {
    const sure = window.confirm("are you sure?");

    if (!sure) {
      return;
    }
    try {
      await axios.delete("http://localhost:4000/user/delete/" + user, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      dispatch({ type: "LOGOUT_USER" });
      localStorage.removeItem("user");
      window.location.assign("/");
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div>
      <Header>{user && <LogoutButton></LogoutButton>}</Header>
      <div className="container mb-5" style={{ width: "50%" }}>
        <div className="row">
          <div className="col-md-2-6 col-sm-6 d-flex justify-content-center">
            <img
              src="shop3.png"
              className="img-fluid rounded-circle mb-2"
              alt="profilkep"
              style={{ maxHeight: "300px" }}
            />
          </div>
          <div className="col-md-2-6 col-sm-6 justify-content-center  align-self-center text-center">
            <p>
              <strong>Username: {userInfo.username}</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="container" style={{ width: "50%" }}>
        <div className="row">
          <Link
            to="/favoriteanimes"
            className="search rounded mb-2 p-2 w-100 text-center  "
          >
            Favorite Animes
          </Link>

          <a
            href="/changeProfile"
            className="search rounded mb-2 p-2 w-100 text-center "
          >
            Change Profile details
          </a>

          <a
            className="search rounded mb-2 p-2 w-100 text-center "
            onClick={deleteAccount}
          >
            Delete Profile
          </a>
          <Link
            className="search rounded mb-2 p-2 w-100 text-center "
            to="/admindashboard"
          >
            Admin Dashboard
          </Link>
        </div>
      </div>
      {error && <div className="alert alert-danger">{error.message}</div>}
    </div>
  );
}
