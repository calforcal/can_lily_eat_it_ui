import CheckBoxDrawer from "../CheckBoxDrawer/CheckBoxDrawer";
import "./NavBar.css"
import { Link } from "react-router-dom"

function NavBar({userId}) {

  const handleLogout = () => {
    fetch(`https://can-lily-eat-it.onrender.com/api/v1/logout`, { method: 'DELETE' })
  }

  return (
    <>
      {
        userId ?
        <div className="links-container">
          <Link className="profile-link" to="/profile" state={userId}>Profile</Link>
          <Link className="about-link" to="/about" state={userId}>About</Link>
          <Link className="search-link" to="/search" state={userId}>Search</Link>
          <Link className="logout-link" to="/" onClick={() => {handleLogout()}}>Log Out</Link>
          <CheckBoxDrawer className="gear-icon" userId={userId} />
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