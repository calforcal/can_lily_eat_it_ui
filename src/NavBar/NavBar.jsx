import "./NavBar.css"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div className="links-container">
      <Link className="profile-link" to="/profile">Profile</Link>
      <Link className="logout-link" to="/home">Log Out</Link>
      <Link className="search-link" to="/search">Search Page</Link>
    </div>
  );
};

export default NavBar;