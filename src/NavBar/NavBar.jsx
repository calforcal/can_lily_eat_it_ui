import "./NavBar.css"
import { Link } from "react-router-dom"

function NavBar({userId}) {

  const handleLogout = () => {
    fetch(`http://127.0.0.1:3000/api/v1/logout`, { method: 'DELETE' })
  }

  return (
    <>
      {
        userId ?
        <div className="links-container">
          <Link className="profile-link" to="/profile" state={userId}>Profile</Link>
          <Link className="about-link">About</Link>
          <Link className="search-link" to="/search" state={userId}>Search</Link>
          <Link className="logout-link" to="/" onClick={() => {handleLogout()}}>Log Out</Link>
        </div>
        :
        <div className="links-container">
          <Link className="logout-link" to="/">Home</Link>
          <Link className="about-link">About</Link>
          <Link className="search-link" to="/search">Search</Link>
        </div>
      }
    </>
  );
};

export default NavBar;