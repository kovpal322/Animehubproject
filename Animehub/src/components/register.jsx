import React, { useState } from "react";
import Header from "./header";
export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log("Submitted:", username, password, email);
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <>
      <Header>
        <a href="/login" className="btn btn-primary">
          login
        </a>
      </Header>
      <div id="login">
        <h3 className="text-center text-white pt-5">Create an account</h3>
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
                      placeholder="username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="text-white">
                      Email:
                    </label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control border-0 search"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
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
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirm-password" className="text-white">
                      Confirm Password:
                    </label>
                    <br />
                    <input
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      className="form-control border-0 search"
                      placeholder="Confirm password"
                      onChange={(e) => setconfirmPassword(e.target.value)}
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
                      <span style={{ marginLeft: "10px" }}>
                        I agree to the terms of service and privacy policy
                      </span>
                    </label>
                    <br />
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
    </>
  );
}
