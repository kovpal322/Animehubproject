import { useState } from "react";
import Header from "../components/header.jsx";
import React from "react";

import { useUserContext } from "../hooks/useUserContext.jsx";
export default function Login() {
  const [toggle, setToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { dispatch } = useUserContext();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
    }

    if (response.ok) {
      dispatch({ type: "LOGIN_USER", payload: data });
      localStorage.setItem("user", JSON.stringify(data));
      window.location.assign("/");
    }
  };

  return (
    <>
      <Header>
        <a href="register" className="btn btn-primary">
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
                    <label htmlFor="email" className="text-white">
                      email
                    </label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control border-0 search"
                      placeholder="Enter your email"
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

                  {error && <div> {error}</div>}
                </form>
                <button onClick={() => setToggle((prevVal) => !prevVal)}>
                  forgot password
                </button>

                <div style={toggle ? { display: "flex" } : { display: "none" }}>
                  <div className="overlay">
                    <form className="reset-email-form">
                      <h2>reset password</h2>
                      <input type="email" placeholder="email" />
                      <button>send email</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
