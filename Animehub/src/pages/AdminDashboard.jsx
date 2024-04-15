import "../admin.css";
function Admindashboard() {
  const expand = () => {
    document.querySelector("#sidebar").classList.toggle("expand");
  };
  return (
    <div className="wrapper">
      <aside id="sidebar">
        <div className="d-flex">
          <button className="toggle-btn" type="button">
            <i onClick={expand} className="lni lni-grid-alt"></i>
          </button>
          <div className="sidebar-logo">
            <a href="#">Animehub Admin</a>
          </div>
        </div>
        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <a href="Profiledashboard" className="sidebar-link">
              <i className="lni lni-user"></i>
              <span>Profiles</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="Animesdashboard" className="sidebar-link">
              <i className="lni lni-agenda"></i>
              <span>Animes</span>
            </a>
          </li>
        </ul>
        <div className="sidebar-footer">
          <a href="/" className="sidebar-link">
            <i className="lni lni-exit"></i>
            <span>Back to Animehub</span>
          </a>
        </div>
      </aside>
      <div className="main">
        <nav className="navbar navbar-expand px-4 py-3">
          <form action="#" className="d-none d-sm-inline-block"></form>
          <div className="navbar-collapse collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a
                  href="#"
                  data-bs-toggle="dropdown"
                  className="nav-icon pe-md-0"
                >
                  <img
                    src="../public/3497776.jpg"
                    className="avatar img-fluid"
                    alt=""
                  />
                </a>
                <div className="dropdown-menu dropdown-menu-end rounded"></div>
              </li>
            </ul>
          </div>
        </nav>
        <main className="content px-3 py-4">
          <div className="container-fluid">
            <div className="mb-3">
              <h3 className="fw-bold fs-2 my-3 text-center text-black">
                Welcome user
              </h3>
              <h3 className="fw-bold fs-4 mb-3 text-black">
                Choose what you want
              </h3>
              <div className="row justify-content-center ">
                <div className="card m-3" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Profile management</h5>
                    <p className="card-text">
                      You can manage the accounts in the website
                    </p>
                    <a href="Profiledashboard" className="btn btn-primary">
                      Go to Profiles
                    </a>
                  </div>
                </div>
                <div className="card m-3" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Anime management</h5>
                    <p className="card-text">
                      You can manage the animes on the website
                    </p>
                    <a href="Animesdashboard" className="btn btn-primary">
                      Go to Animes
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Admindashboard;
