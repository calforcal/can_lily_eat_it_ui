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
      // return response.json()
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

  const postUserRegistration = async () => {
    await makeApiCall(email, password);
  };

  return (
    <>
      <MainHeading />
      <div className="register-page-container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>

        <label><b>Email</b></label>
        <input type="text" placeholder="Enter Email" value={email} onChange={(e) => handleRegisterInfo("email", e.target.value)} required />

        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" value={password} onChange={(e) => handleRegisterInfo("password", e.target.value)} required />

        <button onClick={postUserRegistration}>Register</button>
      </div>
      <div className="container signin">
        <p>Already have an account? <a href="/login">Sign in</a>.</p>
      </div>
    </>
  );
}

export default LoginPage;