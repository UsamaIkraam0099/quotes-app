import "../../styles/style.scss";

const index = ({ handlePress }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Quotes
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" key="add-quote">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={() => handlePress(1)}
              >
                Add quote
              </a>
            </li>

            <li className="nav-item" key="logout">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={() => handlePress(2)}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default index;
