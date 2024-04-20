import CheckBoxDrawer from "../CheckBoxDrawer/CheckBoxDrawer";
import "./NavBar.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

function NavBar() {

  const [loggedIn, setLoggedIn] = useState();

  const logOutUser = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
	};

  const checkLoggedInStatus = () => {
    if (localStorage.token == null) {
      setLoggedIn(false);
    }
    else {
      setLoggedIn(true);
    }
  }

  useEffect(() => {
    checkLoggedInStatus();
  })

  return (
    <>
      {
        loggedIn ?
        <div className="links-container">
          <Link className="profile-link" to="/profile" >Profile</Link>
          <Link className="about-link" to="/about" >About</Link>
          <Link className="search-link" to="/search" >Search</Link>
          <Link className="logout-link" to="/" onClick={() => {logOutUser()}}>Log Out</Link>
          <CheckBoxDrawer className="gear-icon" />
        </div>
        :
        <div className="links-container">
          <Link className="logout-link" to="/">Home</Link>
          <Link className="about-link" to="/about">About</Link>
          <Link className="search-link" to="/search">Search</Link>
        </div>
      }
    </>
  );
};

export default NavBar;