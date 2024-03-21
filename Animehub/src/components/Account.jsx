import React from "react";
import Header from "./header";
export default function UserProfile() {
  return (
    <div>
      <Header></Header>
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
              <strong>Username: exampleusername</strong>
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
            href="/profilepicture"
            className="search rounded mb-2 p-2 w-100 text-center "
          >
            Change Profile Picture text-center
          </a>

          <a
            href="/changeusername"
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
