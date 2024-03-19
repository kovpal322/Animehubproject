import React, { useEffect, useState } from "react";
import { useAnimeContext } from "../hooks/useAnimeContext";
import axios from "axios";
import Header from "./header";

export default function Home() {
  const [error, setError] = useState();
  const { animes, dispatch } = useAnimeContext();

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await axios.get("http://localhost:4000/get/animes");

        dispatch({ type: "GET_ANIMES", payload: response.data });
      } catch (err) {
        console.log(err);
        setError("failed to fetch data");
      }
    };
    fetchAnimes();
  }, [dispatch]);

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
        <h1>Welcome on Animehub</h1>
        <section className="sec1">
          <div className="row">
            <div className="col-md-2-6 col-sm-6 image"></div>
            <div className="col-md-2-6 col-sm-6">
              <p>
                <strong>Name: Jujutsu Kaisen </strong>
                <br />
                Genre : Action , Comedy , Drama , Fantasy
                <br />
                Description : Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Excepturi consequatur accusamus ducimus? Beatae enim
                aliquam, minima iste doloribus commodi sequi minus reiciendis
                voluptas voluptates, dolore perspiciatis. Eligendi sequi
                corporis dignissimos.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <section className="sec1">
          <h1 className="mb-5">Anime Series</h1>
          <div className="row justify-content-center">
            {[1, 2, 3, 4, 5].map((card) => (
              <div key={card} className="col-md-2 col-sm-4 col-6">
                <div className="card text-center bg-transparent border-0">
                  <div className="card-body animatedcard m-2">
                    <a className="card-item" href="Animescreen">
                      <img
                        src="MiConv.com__Fullmetal Alchemist Brotherhood.png"
                        className="card-item rounded img-fluid"
                        alt="Card Image"
                      />
                    </a>
                    <h5 className="card-item card-title text-white mt-3">
                      Card {card}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
