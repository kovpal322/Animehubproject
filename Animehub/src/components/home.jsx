export default function Home() {
    return (
        <>
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
                <a className="nav-link active" href="login" aria-disabled="true">Account</a>
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
        <h1>Welcome on Animehub</h1>
        <section className="sec1">
          <div className="row">
            <div className="col-md-2-6 col-sm-6 image">
            </div>
            <div className="col-md-2-6 col-sm-6">
              <p>
                <strong>Name: Jujutsu Kaisen </strong>
                <br />Genre : Action , Comedy , Drama , Fantasy
                <hr />
                <br />Description : .....................
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <section className="sec1">
          <h1 className="mb-5">Anime Series</h1>
          <div className="row justify-content-center">
            {[1, 2, 3, 4, 5].map(card => (
              <div key={card} className="col-md-2 col-sm-4 col-6">
                <div className="card text-center bg-transparent border-0">
                  <div className="card-body animatedcard m-2">
                    <a className="card-item" href="Animescreen"><img src="MiConv.com__Fullmetal Alchemist Brotherhood.png" className="card-item rounded img-fluid" alt="Card Image" /></a>
                    <h5 className="card-item card-title text-white mt-3">Card {card}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
    )
  }
  