import MainHeading from "../MainHeading/MainHeading";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./HomePage.css"

function HomePage() {

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userData, setUserData] = useState();

  const makeApiCall = (email, password) => {
    // fetch('https://27965142-cb65-4b7c-9f97-05e599e7c347.mock.pstmn.io/api/v1/users', {
    fetch('http://127.0.0.1:3000/api/v1/sessions', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: email, password: password})
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

  const getDemoLogin = (demoVersion) => {
    if (demoVersion == 1) {
      setEmail("demo1@gmail.com");
    }
    else {
      setEmail("demo2@gmail.com");
    }
    setPassword("mickey123");
  };

  useEffect(() => {
    if (email && password) {
      makeApiCall(email, password);
    }
  }, [email, password])



  return (
    <>
      <MainHeading classname="main-heading" />
      <div className="about-container">
          <h3 className="about-snippet">Use the UPC Code Search to find out what potential allergens are in your foods! </h3>
          <Link className="skip-login-button" to="/search">
            Continue without Logging-In
          </Link>
      </div>
      <div className="home-page-container">
        <div className="buttons-container">
          <div className="login-register-container">
            <div className="existing-user-container">
              <p className="account-text">Already have an Account?</p>
              <Link className="login-button" to="/login">
                <button>Login Here</button>
              </Link>
            </div>
            <div className="new-user-container">
              <p className="account-text">New User?</p>
              <Link className="create-account-button" to="/register">
                <button>Create Account</button>
              </Link>
            </div>
          </div>
          <div className="demo-profile-container">
            <div className="demo-profile-1" onClick={() => getDemoLogin(1)}>
              <img className="mr-pic" src="./src/assets/images/mr-1.jpeg" alt="maggie-rogers"/>
              <p>Demo Profile 1</p>
            </div>
            <div className="demo-profile-2" onClick={() => getDemoLogin(2)}>
              <img className="nk-pic" src="./src/assets/images/noah-kahan.jpeg" alt="noah-kahan"/>
              <p>Demo Profile 2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;