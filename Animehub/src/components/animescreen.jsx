import React from "react";
import Header from "./header";

import { useAnimeContext } from "../hooks/useAnimeContext";
import { useParams } from "react-router-dom";
export default function AnimeDetails() {
  const { animes } = useAnimeContext();

  const params = useParams();

  const singleAnime = animes.find((anime) => anime._id == params.id);

  return (
    <div>
      <Header></Header>
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
