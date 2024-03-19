import React, { useState } from "react";
import Header from "./header";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", username, password);
  };

  return (
    <>
      <Header>
        <a href="/register" className="btn btn-primary">
          register
        </a>
      </Header>
      <div id="login">
        <h3 className="text-center text-white pt-5">Welcome Back</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form
                  id="login-form"
                  className="form"
                  action=""
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <label htmlFor="username" className="text-white">
                      Username:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control border-0 search"
                      placeholder="Enter your username"
                      onChange={(e) => setUsername(e.target.value)}
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
                      placeholder="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <span>
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                      />
                    </span>
                    <label htmlFor="remember-me" className="text-white">
                      <span style={{ marginLeft: "10px" }}>Remember me</span>{" "}
                    </label>
                    <br />
                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-primary"
                      value="submit"
                      style={{ marginTop: "3%" }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
