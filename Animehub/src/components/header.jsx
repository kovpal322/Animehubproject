const Header = ({ children }) => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{ backgroundColor: "#121221" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand nav-link" href="/">
            <img className="logo" src="shop3.png" alt="" />
            Animehub
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/animes">
                  Animes
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="/account"
                  aria-disabled="true"
                >
                  Account
                </a>
              </li>
            </ul>
            {children}
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
