import CheckBoxDrawer from "../CheckBoxDrawer/CheckBoxDrawer";
import "./NavBar.css"
import { Link } from "react-router-dom"

function NavBar({userToken}) {

  const logOutUser = () => {
		this.props.logOutUser();
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		window.history.back();
	};

  return (
    <>
      {
        userToken ?
        <div className="links-container">
          <Link className="profile-link" to="/profile" state={userToken}>Profile</Link>
          <Link className="about-link" to="/about" state={userToken}>About</Link>
          <Link className="search-link" to="/search" state={userToken}>Search</Link>
          <Link className="logout-link" to="/" onClick={() => {logOutUser()}}>Log Out</Link>
          <CheckBoxDrawer className="gear-icon" userToken={userToken} />
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