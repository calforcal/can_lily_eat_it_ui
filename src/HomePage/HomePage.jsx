import MainHeading from "../MainHeading/MainHeading";
import { Link } from "react-router-dom";
import "./HomePage.css"

function HomePage() {
  return (
    <>
      <MainHeading />
      <div className="home-page-container">
        <div className="login-register-container">
          <button>Login</button>
          <button>Create Account</button>
        </div>
        <div className="demo-profile-container">
          <div className="demo-profile-1">
            <img className="mr-pic" src="./src/assets/images/mr-1.jpeg" alt="maggie-rogers" />
            <p>Demo Profile 1</p>
          </div>
          <div className="demo-profile-2">
            <img className="rr-pic" src="./src/assets/images/rr-1.jpeg" alt="maggie-rogers" />
            <p>Demo Profile 2</p>
          </div>
        </div>
        <div className="skip-login-container">
          <Link className="skip-login-button" to="/search">
            <button>Skip These for now (limited access)</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;