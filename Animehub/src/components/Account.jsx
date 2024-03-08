import React from 'react';

export default function UserProfile() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#121221' }}>
        <div className="container-fluid">
          <a className="navbar-brand nav-link" href="#"><img className="logo" src="shop3.png" alt="" />Animehub</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Animes">Animes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="login" aria-disabled="true">Account</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="rounded me-2 search" type="search" placeholder="Search" aria-label="Search" disabled />
              <button type="submit" className="btn btn-primary" disabled>Browse</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container mb-5" style={{ width: '50%' }}>
        <div className="row">
          <div className="col-md-2-6 col-sm-6 d-flex justify-content-center">
            <img src="shop3.png" className="img-fluid rounded-circle mb-2" alt="profilkep" style={{ maxHeight: '300px' }} />
          </div>
          <div className="col-md-2-6 col-sm-6 justify-content-center  align-self-center text-center">
            <p>
              <strong>Username: exampleusername</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="container" style={{ width: '50%' }}>
        <div className="row">
          <form action="favoriteanimes">
            <button className="search rounded mb-2 p-2 w-100">Favorite Animes</button>
          </form>
          <form action="profilepicture">
            <button className="search rounded mb-2 p-2 w-100">Change Profile Picture</button>
          </form>
          <form action="changeusername">
            <button className="search rounded mb-2 p-2 w-100">Change Username</button>
          </form>
          <form action="changepassword">
            <button className="search rounded mb-2 p-2 w-100">Change Password</button>
          </form>
          <form action="changeemail">
            <button className="search rounded mb-2 p-2 w-100">Change Email</button>
          </form>
          <form action="">
            <button className="search rounded mb-2 p-2 w-100">Delete Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
}

