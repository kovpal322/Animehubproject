import { useAnimeContext } from "../hooks/useAnimeContext.jsx";
import {useUserContext} from "../hooks/useUserContext.jsx";
import Header from "../components/header.jsx";

import LogoutButton from "../components/LogoutButton.jsx";

export default function Home() {
  const { animes } = useAnimeContext();
const {user}=useUserContext()

  const randomIndex = Math.floor(Math.random() * animes.length);

  return (
    <>
      <Header>
          {user? <LogoutButton></LogoutButton>:<div>
            <a href="/login" className="btn btn-primary">
                login
            </a>
            <a href="/register" className="btn btn-primary">
            register
            </a>
            </div>}
      </Header>
      <div className="container">
        <h1>Welcome on Animehub</h1>
        <section className="sec1">
          <div className="row">
            <div
              className="col-md-2-6 col-sm-6 image "
              style={{
                backgroundImage: `url(${
                  animes.length && animes[randomIndex].homeimage
                })`,
              }}
            ></div>
            <div className="col-md-2-6 col-sm-6">
              <p>
                <strong>{animes.length && animes[randomIndex].title} </strong>
                <br />
                Genre :
                {animes.length &&
                  animes[randomIndex].categories.map((item) => {
                    return <span key={item._id}> {item.name} </span>;
                  })}
                <br />
                Description : {animes.length && animes[randomIndex].desc}
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <section className="sec1">
          <h1 className="mb-5">Anime Series</h1>
          <div className="row justify-content-center">
            {animes
              .reverse()
              .slice(0, 5)
              .map((card) => (
                <div key={card._id} className="col-md-2 col-sm-4 col-6">
                  <div className="card text-center bg-transparent border-0">
                    <div className="card-body animatedcard m-2">
                      <a className="card-item" href={`Animescreen/${card._id}`}>
                        <img
                          src={card.imagepath}
                          className="card-item rounded img-fluid"
                          alt={card.title}
                        />
                      </a>
                      <h5 className="card-item card-title text-white mt-3">
                        {card.title}
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
