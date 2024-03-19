import React, { useState } from "react";
import Header from "./header";
function ChangeEmail() {
  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", email, newEmail, password);
  };

  return (
    <div>
      <Header></Header>
      <div id="login">
        <h3 className="text-center text-white pt-5">Change Email</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form" className="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email" className="text-white">
                      Email:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control border-0 search"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="new-email" className="text-white">
                      New Email:
                    </label>
                    <br />
                    <input
                      type="email"
                      name="new-email"
                      id="new-email"
                      className="form-control border-0 search"
                      placeholder="New Email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
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
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-primary form-control"
                      value="Submit"
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

export default ChangeEmail;
