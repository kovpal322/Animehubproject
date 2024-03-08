import React from 'react';

export default function Profilepicture() {
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
                <a className="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Animes.html">Animes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="login.html" aria-disabled="true">Account</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className=" rounded me-2 search" type="search" placeholder="Search" aria-label="Search" disabled />
              <button type="submit" className="btn btn-primary" disabled>Browse</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="j.png" className=" mx-auto d-block rounded-circle img-fluid img-thumbnail" alt="..." style={{height: '600px', width: '600px'}}/>
            </div>
            <div className="carousel-item">
              <img src="shop3.png" className=" mx-auto d-block rounded-circle img-fluid img-thumbnail" alt="..." style={{height: '600px', width: '600px'}}/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <form action="account.html" className="d-flex justify-content-center">
          <button className="search p-2 rounded mt-5">Kiválaszt</button>
        </form>
      </div>
    </div>
  );
}

