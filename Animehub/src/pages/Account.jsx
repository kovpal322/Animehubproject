import { useEffect, useState } from "react";
import Header from "../components/header.jsx";
import LogoutButton from "../components/LogoutButton.jsx";
export default function UserProfile() {
  const { user, token } = JSON.parse(localStorage.getItem("user"));

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
          <a
            href="/favotiteanimes"
            className="search rounded mb-2 p-2 w-100 text-center  "
          >
            Favorite Animes
          </a>

          <a
            href="/Animehubproject/Animehub/src/pages/profilepicture"
            className="search rounded mb-2 p-2 w-100 text-center "
          >
            Change Profile Picture text-center
          </a>

          <a
            href="/Animehubproject/Animehub/src/pages/changeusername"
            className="search rounded mb-2 p-2 w-100 text-center "
          >
            Change Username
          </a>

          <a className="search rounded mb-2 p-2 w-100 text-center ">
            Change Password
          </a>

          <a className="search rounded mb-2 p-2 w-100 text-center ">
            Change Email
          </a>

          <a className="search rounded mb-2 p-2 w-100 text-center ">
            Delete Profile
          </a>
        </div>
      </div>
    </div>
  );
}
