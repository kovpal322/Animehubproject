import React, { useState } from "react";
import Header from "./header";

function ChangeUsername() {
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", username, newUsername, password);
  };

  return (
    <div>
      <Header></Header>
      <div id="login">
        <h3 className="text-center text-white pt-5">Change Username</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form" className="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username" className="text-white">
                      Email:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control border-0 search"
                      placeholder="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="new-username" className="text-white">
                      New Username:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="new-username"
                      id="new-username"
                      className="form-control border-0 search"
                      placeholder="New Username"
                      value={newUsername}
                      onChange={(e) => setNewUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-white">
                      Password:
                    </label>
                    <br />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control border-0 search"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-primary form-control"
                      value="submit"
                      style={{ marginTop: "5%" }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeUsername;
