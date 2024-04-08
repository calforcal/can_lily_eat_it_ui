import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainHeading from "../MainHeading/MainHeading";
import "./RegisterForm.css"

function RegisterForm({ setFormFilled, setUserData }) {

  const navigate = useNavigate();
  
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();

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
        setFormFilled(false);
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

  // useEffect(() => {
  //   // Check if userData is not null before navigating
  //   if (userData) {
  //     navigate("/profile", { state: userData.id });
  //   }
  // }, [userData, navigate]);

  // Needs FIX: Button must be pressed twice for page redirect.
  const postUserRegistration = async () => {
    await makeApiCall(email, name, password, passwordConfirmation);
    setFormFilled(true)
  };

  return (
    <>
      <div className="register-form">
        <div className="register-form-container">
          <h1 className="register-title">Register</h1>
          <p className="register-info">Please fill in this form to create an account.</p>

          <input type="text" placeholder="Email" value={email} onChange={(e) => handleRegisterInfo("email", e.target.value)} required />
          <input type="text" placeholder="Name" value={name} onChange={(e) => handleRegisterInfo("name", e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => handleRegisterInfo("password", e.target.value)} required />
          <input type="password" placeholder="Password Confirmation" value={passwordConfirmation} onChange={(e) => handleRegisterInfo("passwordConfirmation", e.target.value)} required />

          <button className="register-button" onClick={postUserRegistration}>Register</button>
        </div>
        <div className="container-login-link">
        <a href="/login"><p>Already have an account?Sign in</p></a>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;