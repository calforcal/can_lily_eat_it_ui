import CheckBoxDrawer from "../CheckBoxDrawer/CheckBoxDrawer";
import "./NavBar.css"
import { Link } from "react-router-dom"

function NavBar() {

  const logOutUser = () => {
		this.props.logOutUser();
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		window.history.back();
	};

  return (
    <>
      {
        localStorage.token ?
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