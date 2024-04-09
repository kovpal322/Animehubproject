import "../admin.css";
function AnimeDashboard() {
    const expand = () => {
        document.querySelector("#sidebar").classList.toggle("expand");
    }

    return (
        <>
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
                                <a href="#" data-bs-toggle="dropdown" className="nav-icon pe-md-0">
                                    <img src="/account.png" className="avatar img-fluid" alt="" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end rounded"></div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main className="content px-3 py-4">
                    <div className="container-fluid">
                        <div className="mb-3">
                            <h3 className="fw-bold fs-4 mb-3 text-black">Animes</h3>
                            <h3 className="fw-bold fs-4 my-3 text-black">Control Center</h3>
                            <div className="row">
                                <div className="col-12">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr className="highlight">
                                                <th scope="col">#</th>
                                                <th scope="col">Anime</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">image_path</th>
                                                <th scope="col">categories</th>
                                                <th scope="col">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>valami</td>
                                                <td>valami</td>
                                                <td>valami</td>
                                                <td>valami</td>
                                                <td><button className="btn btn-primary">delete</button></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>valami</td>
                                                <td>valami</td>
                                                <td>valami</td>
                                                <td>valami</td>
                                                <td><button className="btn btn-primary">delete</button></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>valami</td>
                                                <td>valami</td>
                                                <td>valami</td>
                                                <td>valami</td>
                                                <td><button className="btn btn-primary">delete</button></td>
                                            </tr>
                                        </tbody>
                                    </table>Name
                                    <div className="footer">
                                        <div className="container-fluid">
                                            <div className="row text-body-secondary">
                                                <div className="col-6 text-start">
                                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                                        Add Anime
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="modal fade text-black" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 clasNames="modal-title" id="exampleModalLabel">Upload Anime Information</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label for="anime">Anime Name</label>
                      <input type="text" className="form-control" id="anime" placeholder="Enter anime name"/>
                    </div>
                    <div className="form-group">
                      <label for="description">Description</label>
                      <textarea className="form-control" id="description" rows="3" placeholder="Enter description"></textarea>
                    </div>
                    <div class="form-group">
                      <label for="image_path">Image Path</label>
                      <input type="text" className="form-control" id="image_path"/>
                    </div>
                    <div class="form-group">
                      <label for="categories">Categories</label>
                      <input type="text" className="form-control" id="categories" placeholder="Enter categories"/>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Upload</button>
                </div>
              </div>
            </div>
          </div>
          </>
    );
}

export default AnimeDashboard;
