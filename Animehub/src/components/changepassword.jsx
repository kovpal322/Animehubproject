import React, { useState } from 'react';

function ChangePassword() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:', email, newPassword, password);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#121221' }}>
                <div className="container-fluid">
                    <a className="navbar-brand nav-link" href="#"><img className="logo" src="shop3.png" alt="" />Animehub</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="Animes.html">Animes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="login.html" aria-disabled="true">Account</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="login">
                <h3 className="text-center text-white pt-5">Change Password</h3>
                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div id="login-box" className="col-md-12">
                                <form id="login-form" className="form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email" className="text-white">Email:</label><br />
                                        <input type="text" name="email" id="email" className="form-control border-0 search" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="new-password" className="text-white">New Password:</label><br />
                                        <input type="password" name="new-password" id="new-password" className="form-control border-0 search" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="text-white">Current Password:</label><br />
                                        <input type="password" name="password" id="password" className="form-control border-0 search" placeholder="Current Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" name="submit" className="btn btn-primary form-control" value="Submit" style={{ marginTop: '5%' }} />
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

export default ChangePassword;
