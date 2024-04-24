import { useState, useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import YupPassword from "yup-password"
import { useForm } from "react-hook-form"
import "./RegisterForm.css"
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';

function RegisterForm({ setFormFilled, setUserData }) {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  YupPassword(yup);

  const schema = yup.object().shape({
    name: yup.string().min(1).required(),
    email: yup.string().email().required(),
    password: yup.string().password().required(),
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

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

  const makeApiCall = async () => {
    fetch('https://can-lily-eat-it.onrender.com/api/v1/users', {
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
        alert("Email address is already taken. Please try again.")
      }
      else {
        return response.json()
      }
    })
    .then((data) => {
      localStorage.setItem("user", JSON.stringify(data.data));
      localStorage.setItem("token", data.data.token);
      setUserData(data.data)
      setFormFilled(true);
    })
    .catch((err) => console.log(err))
  };

  const postUserRegistration = async () => {
    await makeApiCall();
  };

  return (
    <>
      <div className="register-form">
        <div className="form-container">
          <h1 className="register-title">Register</h1>
          <p className="register-info">Please fill in this form to create an account.</p>
          <div className="register-form-container">
            <input {...register("email")} type="text" placeholder="Email" value={email} onChange={(e) => handleRegisterInfo("email", e.target.value)} required />
            <p>{errors.email?.message}</p>
            <input {...register("name")} type="text" placeholder="Name" value={name} onChange={(e) => handleRegisterInfo("name", e.target.value)} required />
            <p>{errors.name?.message}</p>
            <div className="password-requirements-container">
              <input {...register("password")} type="password" placeholder="Password" value={password} onChange={(e) => handleRegisterInfo("password", e.target.value)} required />
              <Tooltip placement="right" title="Password Requirements: 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character">
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </div>
            <p>{errors.password?.message}</p>
            <input {...register("passwordConfirmation")} type="password" placeholder="Password Confirmation" value={passwordConfirmation} onChange={(e) => handleRegisterInfo("passwordConfirmation", e.target.value)} required />
            <p>{errors.passwordConfirmation?.message}</p>

          </div>
          <button className="register-button" onClick={handleSubmit(postUserRegistration)}>Register</button>
        </div>
        <div className="container-login-link">
          <a className="already-registered-link" href="/login"><p>Already have an account? Sign in</p></a>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;