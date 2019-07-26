import React from "react";
import { Link } from "react-router-dom";
import { AuthConsumer } from "../auth/Guard";
import "bootstrap/dist/css/bootstrap.min.css";

const NavMain = () => {
  let admin = null;
  let name = null;
  return (
    <nav
      className="navbar navbar-expand-lg  navbar-dark bg-primary"
      style={{ border: "1px solid grey" }}
    >
      <div className="navbar-brand">
        <Link className="navbar-brand" to="/">
          Acceuil
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <AuthConsumer>
        {({ loginStatus, user, signout }) => {
          {
            if (user) {
              name = user.firstname;
              if (user.role === "Admin") {
                admin = (
                  <Link className="nav-link admin" to="/admin">
                    Admin
                  </Link>
                );
              }
            }
          }
          return loginStatus ? (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <div className="nav-link">
                    <Link className="navbar-brand" to="/audit">
                      Audit Evaluation
                    </Link>
                  </div>
                </li>

                {/* <li className="nav-item">
                  <div className="nav-link">
                    <Link className="navbar-brand" to="/audit">
                      Conseil
                    </Link>
                  </div>
                </li> */}

                <li className="nav-item active">
                  <div className="nav-link">
                    <Link className="navbar-brand" to="/resultat">
                      Résultats d'Audit
                    </Link>
                    <span className="sr-only">(current)</span>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <div
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <Link className="navbar-brand" to="/">
                      Support de Formation
                    </Link>
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="dropdown-item">
                      <Link to={"/formation-lean"}>Lean Management</Link>
                    </div>
                    {/* <div className="dropdown-item">Another action</div> */}
                    {/* <div className="dropdown-divider" /> */}
                  </div>
                </li>
              </ul>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "20%"
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "helvetica",
                      fontWeight: " bold",
                      marginTop: "10px"
                    }}
                  >
                    Bonjour {name}
                    {admin}
                  </p>
                </div>
                <button
                  style={{ height: "5vh", margin: "auto" }}
                  type="button"
                  onClick={() => signout(res => console.log(res))}
                >
                  X
                </button>
              </div>
            </div>
          ) : null;
        }}
      </AuthConsumer>
    </nav>
  );
};

export default NavMain;
