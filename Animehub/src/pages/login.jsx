import { useEffect, useState } from "react";
import Header from "../components/header.jsx";
import React from "react";
import { jwtDecode } from "jwt-decode";

import axios from "axios";
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
  const handleGoogleLogin = (response) => {
    const responseObj = jwtDecode(response.credential);

    const loginUser = async () => {
      try {
        const resp = await axios.post("http://localhost:4000/google/login", {
          name: responseObj.name,
          email: responseObj.email,
          picture: responseObj.picture,
        });

        dispatch({ type: "LOGIN_USER", payload: resp.data });
        localStorage.setItem("user", JSON.stringify(resp.data));
        window.location.assign("/");
      } catch (err) {
        console.log(err);
      }
    };
    loginUser();
    console.log(responseObj);
  };
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "302793200660-9boro66o4bp1ielc82jcvot1h5s85kmc.apps.googleusercontent.com",
      callback: handleGoogleLogin,
    });

    google.accounts.id.renderButton(document.getElementById("googleLoginDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

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

                  <div className="line">
                    <p>or</p>
                    <div id="googleLoginDiv"></div>
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
                      className="btn btn-primary mb-3 mt-3"
                      value="submit"
                    />
                  </div>
                </form>
                <button
                  className="btn btn-primary"
                  onClick={() => setToggle((prevVal) => !prevVal)}
                >
                  Forgot Password
                </button>

                {error && <div> {error}</div>}
<<<<<<< HEAD
      {toggle && (
        <div className="modal-overlay">
          <div className="modal-content">
            <form className="reset-email-form">
              <h2>Reset Password</h2>
              <input type="email" placeholder="Email" />
              <button>Send Email</button>
            </form>
          </div>
        </div>
      )}
                </div>
=======

                {toggle && (
                  <div className="modal-overlay">
                    <div className="modal-content">
                      <form className="reset-email-form">
                        <h2>Reset Password</h2>
                        <input type="email" placeholder="Email" />
                        <button className="send-btn">Send Email</button>
                      </form>
                    </div>
                  </div>
                )}
>>>>>>> 7f22955ed84463a7e3f6cb9511f218fe4a5ff5c9
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
