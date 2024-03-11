import "./NavBar.css"
import { Link } from "react-router-dom"

function NavBar({userId}) {
  return (
    <>
      {
        userId ?
        <div className="links-container">
          <Link className="profile-link" to="/profile" state={userId}>Profile</Link>
          <Link className="search-link" to="/search" state={userId}>Search</Link>
          <Link className="logout-link" to="/">Log Out</Link>
        </div>
        :
        <div className="links-container">
          <Link className="logout-link" to="/">Home</Link>
          <Link className="search-link" to="/search">Search</Link>
        </div>
      }
    </>
  );
};

export default NavBar;