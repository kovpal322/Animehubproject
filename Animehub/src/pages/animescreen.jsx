import Header from "../components/header.jsx";
import axios from "axios";
import { useAnimeContext } from "../hooks/useAnimeContext.jsx";
import { useParams } from "react-router-dom";
import LogoutButton from "../components/LogoutButton.jsx";
import { useState, useEffect } from "react";
export default function AnimeDetails() {
  const { animes } = useAnimeContext();
  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const { user, token } = JSON.parse(localStorage.getItem("user"));

  const params = useParams();

  const singleAnime = animes.find((anime) => anime._id == params.id);

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
        setUserInfo(data);
      }
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getUserInfo(user);
  }, []);

  const addTofavorites = async (id) => {
    try {
      const resp = await axios.patch(
        `http://localhost:4000/update/favanimes/${id}`,
        { animeId: singleAnime._id },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      setMessage(resp.data);
    } catch (err) {
      console.log(error);
      setError(err);
    }
    setTimeout(() => {
      setError(null);
      setMessage(null);
    }, 2000);
  };
  return (
    <div>
      <Header>{user && <LogoutButton></LogoutButton>}</Header>
      <div className="container" style={{ maxWidth: "50%" }}>
        <section className="sec1">
          <div className="row">
            <div className="col-md-2-6 col-sm-6">
              <img
                src={singleAnime && singleAnime.imagepath}
                className="rounded img-fluid"
                alt="Animeimage"
              />
            </div>
            <div className="col-md-2-6 col-sm-6">
              <p>
                <strong>Name: {singleAnime && singleAnime.title}</strong>
                <br />
                {singleAnime &&
                  singleAnime.categories.map((item, index) => {
                    return <span key={index}> {item.name} </span>;
                  })}
                <br />
                Description:{singleAnime && singleAnime.desc}
              </p>
              {error && <div className="alert alert-danger">{error}</div>}
              {message && <div className="alert alert-success">{message}</div>}
              <button
                onClick={() => addTofavorites(userInfo._id)}
                className="btn btn-success"
              >
                add to favorite
              </button>
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
          <textarea
            className="form-control auto-size"
            id="commentContent"
            rows="1"
            placeholder="Enter your comment"
          ></textarea>
        </div>
        <button className="btn btn-primary">Post Comment</button>
      </div>
    </div>
  );
}
