import "./LoginPage.css"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import MainHeading from "../MainHeading/MainHeading";

function LoginPage() {

  const navigate = useNavigate();
  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [formData, setFormData] = useState()
  const [userData, setUserData] = useState()

  const handleRegisterInfo = (type, value) => {
    if (type == "email") {
      setEmail(value)
    }
    else if (type == "password") {
      setPassword(value)
    }
  };

  const makeApiCall = async (email, password) => {
    fetch('https://can-lily-eat-it.onrender.com/api/v1/sessions', {
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
      localStorage.setItem("user", JSON.stringify(data.data));
      localStorage.setItem("token", data.data.token);
      window.history.pushState(data.data, "", "/profile")
      setUserData(data.data)
    })
    .catch((err) => console.log(err))   
  };

  useEffect(() => {
    if (userData) {
      navigate("/profile", { state: userData.token });
    }
  }, [userData, navigate]);

  const postUserRegistration = async () => {
    await makeApiCall(email, password);
  };

  return (
    <>
      <MainHeading />
      <div className="login-page">
        <div className="login-page-form-container">
          <h1 className="login-title">Log In</h1>

          <input type="text" placeholder="Email" value={email} onChange={(e) => handleRegisterInfo("email", e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => handleRegisterInfo("password", e.target.value)} required />

          <button className="login-button" onClick={postUserRegistration}>Log in</button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;