import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainHeading from "../MainHeading/MainHeading";
import "./RegisterPage.css"

function RegisterPage() {

  const navigate = useNavigate();
  
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [passwordConfirmation, setPasswordConfirmation] = useState()
  const [userData, setUserData] = useState()

  const handleRegisterInfo = (type, value) => {
    if (type == "email") {
      setEmail(value)
    }
    else if (type == "name") {
      setName(value)
    }
    else if (type == "password") {
      setPassword(value)
    }
    else if (type == "passwordConfirmation") {
      setPasswordConfirmation(value)
    }
  };

  const makeApiCall = async (email, name, password, passwordConfirmation) => {
    fetch('http://127.0.0.1:3000/api/v1/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: email, name: name, password: password, password_confirmation: passwordConfirmation})
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
    // Check if userData is not null before navigating
    if (userData) {
      navigate("/profile", { state: userData.id });
    }
  }, [userData, navigate]);

  // Needs FIX: Button must be pressed twice for page redirect.
  const postUserRegistration = async () => {
    await makeApiCall(email, name, password, passwordConfirmation);
  };

  return (
    <>
      <MainHeading />
      <div className="register-page-container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>

        <label><b>Email</b></label>
        <input type="text" placeholder="Enter Email" value={email} onChange={(e) => handleRegisterInfo("email", e.target.value)} required />

        <label><b>Email</b></label>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e) => handleRegisterInfo("name", e.target.value)} required />

        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" value={password} onChange={(e) => handleRegisterInfo("password", e.target.value)} required />

        <label><b>Password Confirmation</b></label>
        <input type="password" placeholder="Password Confirmation" value={passwordConfirmation} onChange={(e) => handleRegisterInfo("passwordConfirmation", e.target.value)} required />

        <button onClick={postUserRegistration}>Register</button>
      </div>
      <div className="container signin">
        <p>Already have an account? <a href="#">Sign in</a>.</p>
      </div>
    </>
  );
}

export default RegisterPage;