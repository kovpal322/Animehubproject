import { useState } from "react";
import Header from "../components/header.jsx";
import { useUserContext } from "../hooks/useUserContext.jsx";
import Google from "../img/google-removebg-preview.png";
import Github from "../img/github.png";
import Facebook from "../img/facebook.png";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [checked, setChecked] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState("");
  const { dispatch } = useUserContext();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (checked) {
      if (password === confirmPassword) {
        const response = await fetch("http://localhost:4000/signup", {
          method: "POST",
          body: JSON.stringify({ email, password, username }),
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
          setError("");
          setPassword("");
          setUsername("");
          setChecked(false);
          setconfirmPassword("");
        }
      } else {
        setError("passwords do not match");
      }
    } else {
      setError("you must accept the terms of service and privacy policy");
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

                  <div className="line">
                    <p>or</p>
                    <div className="google">
                      <img src={Google} alt="google logo" />
                      <p className="login-google">continue with google</p>
                    </div>
                    <div className="github">
                      <img src={Github} alt="github logo" />
                      <p className="login-github">Github</p>
                    </div>
                    <div className="facebook">
                      <img src={Facebook} alt=" logo" />
                      <p className="login-facebook">facebook</p>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="terms">
                      I agree to the terms of service and privacy policy
                      <input
                        type="checkbox"
                        style={{ marginLeft: "10px" }}
                        onChange={() => setChecked((prevVal) => !prevVal)}
                      />
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

                {error && <div> {error}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
