import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
  const isActive = ({ isActive }) => {
    return isActive ? "nav-link active" : "nav-link";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Forum
        </NavLink>

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
          {user && (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-auto">
                <NavLink className={isActive} to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-auto">
                <NavLink className={isActive} to="about">
                  About
                </NavLink>
              </li>
              <li className="nav-item mx-auto">
                <NavLink className={isActive} to="profile">
                  Profile
                </NavLink>
              </li>
            </ul>
          )}

          {!user && (
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item mx-auto">
                <NavLink className={isActive} to="login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item mx-auto">
                <NavLink className={isActive} to="register">
                  Register
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
