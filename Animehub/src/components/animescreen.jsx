  import React from "react";
export default function AnimeDetails() {
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
                <a className="nav-link active" aria-current="page" href="index">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Animes">Animes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="login" aria-disabled="true">Account</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="rounded me-2 search" type="search" placeholder="Search" aria-label="Search" disabled />
              <button type="submit" className="btn btn-primary" disabled>Browse</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container" style={{ maxWidth: '50%' }}>
        <section className="sec1">
          <div className="row">
            <div className="col-md-2-6 col-sm-6">
              <img src="https://drive.google.com/file/d/1jkDsfCoRYANWUSvq0NQTWR05SgRlOMHA/view?raw=true" className="rounded img-fluid" alt="Animeimage" />
            </div>
            <div className="col-md-2-6 col-sm-6">
              <p>
                <strong>Name: Naruto</strong>
                <br />Genre: Action, Comedy, Drama, Fantasy
                <hr />
                <br />Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus totam ab odit laboriosam sequi. Rem fugit nesciunt eveniet aut iusto, temporibus corporis. Animi beatae doloribus laboriosam, architecto accusantium facere consequuntur!
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <h2>Comments</h2>
        <div className="mt-4">
          <div className="media">
            <div className="media-body search rounded p-2 m-2">
              <h5 className="mt-0">Commenter Name</h5>
              <p>Comment content goes here...</p>
              <button className="btn btn-sm btn-primary">Reply</button>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="commentContent">Your Comment</label>
          <textarea className="form-control auto-size" id="commentContent" rows="1" placeholder="Enter your comment"></textarea>
        </div>
        <button className="btn btn-primary">Post Comment</button>
      </div>
    </div>
  );
}

