import { useEffect, useState } from "react";
import Header from "../components/header.jsx";
import React from "react";
export default function Reset() {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  return (
    <>
      <Header>
        <a href="register" className="btn btn-primary">
          register
        </a>
      </Header>
      <div id="login">
        <h3 className="text-center text-white pt-5">New password</h3>
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
                  onSubmit=""
                >
                  <div className="form-group">
                    <label htmlFor="password1" className="text-white">
                      Password
                    </label>
                    <br />
                    <input
                      type="password"
                      name="password1"
                      id="password1"
                      className="form-control border-0 search"
                      placeholder="Enter your new password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password2" className="text-white">
                      Password again
                    </label>
                    <br />
                    <input
                      type="password"
                      name="password2"
                      id="password2"
                      className="form-control border-0 search"
                      placeholder="Enter your password again"
                      onChange={(e) => setPassword2(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-primary mb-3 mt-3"
                      value="submit"
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
