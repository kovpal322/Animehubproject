import Header from "./header";

export default function Favoriteanimes() {
  return (
    <>
      <Header>
        <form className="d-flex" role="search">
          <input
            className=" rounded me-2 search"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button type="submit" className="btn btn-primary">
            Browse
          </button>
        </form>
      </Header>
      <div className="container" style={{ marginTop: "5%" }}>
        <h1>Your Favorite Animes</h1>
        <div className="row justify-content-start">
          {[...Array(10).keys()].map((index) => (
            <div key={index} className="col-md-2 col-sm-4 col-6">
              <div className="card text-center bg-transparent border-0">
                <div className="card-body animatedcard m-2">
                  <a className="card-item" href="Animescreen">
                    <img
                      src="MiConv.com__Fullmetal Alchemist Brotherhood.png"
                      className="card-item rounded img-fluid"
                      alt="Card Image"
                    />
                  </a>
                  <h5 className="card-title text-white mt-3 card-item">
                    Card {index + 1}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
