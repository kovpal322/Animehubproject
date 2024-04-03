import { useState } from "react";
import { useUserContext } from "../hooks/useUserContext";
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const [currentPassword, setCurrentPassword] = useState("");
const { user } = useUserContext();

const ChangeProfileDetails = () => {
  return (
    <div>
      <div>
        <Header>{user && <LogoutButton></LogoutButton>}</Header>
        <div id="login">
          <h3 className="text-center text-white pt-5">Change Password</h3>
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
                    onSubmit={handleSubmit}
                  >
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
                      <label htmlFor="new-password" className="text-white">
                        New Password:
                      </label>
                      <br />
                      <input
                        type="password"
                        name="new-password"
                        id="new-password"
                        className="form-control border-0 search"
                        placeholder="New Password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="text-white">
                        Current Password:
                      </label>
                      <br />
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control border-0 search"
                        placeholder="Current Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="text-white">
                        username:
                      </label>
                      <br />
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control border-0 search"
                        placeholder="Current Password"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                    <button onClick={handleSubmit()}>change</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChangeProfileDetails;
