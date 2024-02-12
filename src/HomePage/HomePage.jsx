import MainHeading from "../MainHeading/MainHeading";
import { Link } from "react-router-dom";
import "./HomePage.css"

function HomePage() {
  return (
    <>
      <MainHeading />
      <div className="home-page-container">
        <div className="login-register-container">
          <Link className="login-button" to="/login">
            <button>Login</button>
          </Link>
          <Link className="create-account-button" to="/register">
            <button>Create Account</button>
          </Link>
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
        <Link className="skip-login-button" to="/search">
          Skip These for now
        </Link>
      </div>
    </>
  );
}

export default HomePage;