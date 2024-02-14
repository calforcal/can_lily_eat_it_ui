import MainHeading from "../MainHeading/MainHeading";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./HomePage.css"

function HomePage() {

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userData, setUserData] = useState();
  const [formData, setFormData] = useState();

  const makeApiCall = () => {
    fetch('https://27965142-cb65-4b7c-9f97-05e599e7c347.mock.pstmn.io/api/v1/users', {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((response) => {
      if (!response.ok) {
        alert("Please check the information you entered and try again.")
      }
      else {
        return response.json()
      }
    })
    .then((data) => {
      setUserData(data.data)
    })
    .catch((err) => console.log(err))
  };

  useEffect(() => {
    if (userData) {
      navigate("/profile", { state: userData.id });
    }
  }, [userData, navigate]);

  const getDemoLogin = (demo_email, demo_password) => {
    setEmail(demo_email);
    setPassword(demo_password);
    setFormData({email: password, password: email});

    makeApiCall();
  };

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
            <img className="mr-pic" src="./src/assets/images/mr-1.jpeg" alt="maggie-rogers" onClick={() => getDemoLogin({demo_email:"mickey@gmail.com", demo_password:"mickey"})}/>
            <p>Demo Profile 1</p>
          </div>
          <div className="demo-profile-2">
            <img className="rr-pic" src="./src/assets/images/rr-1.jpeg" alt="renee-rogers" onClick={() => getDemoLogin({demo_email:"donald@gmail.com", demo_password:"donald"})} />
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