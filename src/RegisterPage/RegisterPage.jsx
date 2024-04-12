import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css"
import MainHeading from "../MainHeading/MainHeading";
import RegisterForm from "../RegisterForm/RegisterForm"
import CheckBoxForm from "../CheckBoxForm/CheckBoxForm";

function RegisterPage() {

  const navigate = useNavigate();

  const [formFilled, setFormFilled] = useState(false);
  const [userAllergens, setUserAllergens] = useState([]);
  const [userData, setUserData] = useState();

  const saveUserSelections = () => {
    fetch(`http://127.0.0.1:3000/api/v1/users/${userData.id}/allergens`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({allergens: userAllergens.join()})
    })
    .then((response) => {
      if (response.status == 201) {
        navigate("/profile", { state: userData.id })
      }
    })
    .catch((err) => console.log(err))
  }

  return (
    <>
      <MainHeading />
      <div className="register-page">
        {
          formFilled
          ?
          <div className="register-allergens">
            <p className="heading">Select you Allergens</p>
            <CheckBoxForm setUserAllergens={setUserAllergens} extraClass="-register"/>
            <button className="checkbox-save-button" onClick={saveUserSelections}>Save Selections and Register</button>
          </div>
          :
          <RegisterForm setFormFilled={setFormFilled} setUserData={setUserData}/>
        }
      </div>
    </>
  );
}

export default RegisterPage;