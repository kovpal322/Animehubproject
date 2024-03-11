import React, { useState } from 'react';

export default function Register() {
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
   
    const handleSubmit = (e) => {
      e.preventDefault();
      if (password === confirmPassword) {
          console.log('Submitted:', username, password, email);
      } else {
          alert('Passwords do not match!');
      }
  };

    return(
        <>
        <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#121221' }}>
          <div className="container-fluid">
            <a className="navbar-brand nav-link" href="#"><img className="logo" src="shop3.png" alt="" />Animehub</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="index">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Animes">Animes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="login" aria-disabled="true">Account</a>
                </li>
              </ul>
              <form className="d-flex" action="login">
                <button type="submit" className="btn btn-primary">Sign in</button>
              </form>
            </div>
          </div>
        </nav>
        <div id="login">
          <h3 className="text-center text-white pt-5">Create an account</h3>
          <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
              <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                  <form id="login-form" className="form" action=""onSubmit={handleSubmit} >
                    <div className="form-group">
                      <label htmlFor="username" className="text-white">Username:</label><br />
                      <input type="text" name="username" id="username" className="form-control border-0 search" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="text-white">Email:</label><br />
                      <input type="email" name="email" id="email" className="form-control border-0 search" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="text-white">Password:</label><br />
                      <input type="password" name="password" id="password" className="form-control border-0 search" placeholder="password"  onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirm-password" className="text-white">Confirm Password:</label><br />
                      <input type="password" name="confirm-password" id="confirm-password" className="form-control border-0 search" placeholder="Confirm password" onChange={(e) => setconfirmPassword(e.target.value)}/>
                    </div>
                    <div className="form-group">
                      <span><input id="remember-me" name="remember-me" type="checkbox" /></span><label htmlFor="remember-me" className="text-white"><span style={{ marginLeft: '10px' }}>I agree to the terms of service and privacy policy</span></label><br />
                      <input type="submit" name="submit" className="btn btn-primary form-control" value="submit" style={{ marginTop: '5%' }} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}