import Header from "./header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAnimeContext } from "../hooks/useAnimeContext";
export default function Animes() {
  const { animes, dispatch } = useAnimeContext();
  const [genres, setgenres] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await axios.get("http://localhost:4000/get/animes");
        dispatch({ type: "GET_ANIMES", payload: response.data });
      } catch (err) {
        setError(err);
        console.log(err);
      }
    };
    fetchAnimes();
  }, [dispatch]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/get/categories"
        );
        setgenres(response.data);
      } catch (err) {
        setError(err);
        console.log(err);
      }
    };
    fetchGenres();
  }, []);
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
      <div className="container">
        <h1>Explore anime movies and TV shows</h1>
        <div className=" d-flex p-2 justify-content-start flex-wrap categorysection">
          {genres.map((genre, index) => (
            <div key={index} className="col-md-2 col-sm-4 col-4">
              <button className="category mr-3 mb-2">{genre.name}</button>
            </div>
          ))}
        </div>
      </div>
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row justify-content-start">
          {animes.map((anime, index) => (
            <div key={index} className="col-md-2 col-sm-4 col-6">
              <div className="card text-center bg-transparent border-0">
                <div className="card-body animatedcard m-2">
                  <a className="card-item" href="Animescreen">
                    <img
                      src={anime.imagepath}
                      className="card-item rounded img-fluid"
                      alt="Card Image"
                    />
                  </a>
                  <h5 className="card-title text-white mt-3 card-item">
                    {anime.title}
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
