import { React, useEffect, useState } from "react";
import "./ProfilePage.css"
import { useLocation, Link } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";
import MainHeading from "../MainHeading/MainHeading";
import TabButton from "../TabButton/TabButton";
import CheckBoxForm from "../CheckBoxForm/CheckBoxForm";
import { render } from "react-dom";

function ProfilePage() {

  const location = useLocation();
  const user_id = location.state;
  const [foods, setFoods] = useState();
  const [badFoods, setBadFoods] = useState();
  const [goodFoods, setGoodFoods] = useState();
  const [existingAllergens, setExistingAllergens] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState();

  useEffect(() => {
    // fetch(`https://27965142-cb65-4b7c-9f97-05e599e7c347.mock.pstmn.io/api/v1/users/${user_id}/foods`)
    fetch(`https://can-lily-eat-it.onrender.com/api/v1/users/${user_id}/foods`)
    .then(response => response.json())
    .then(data => setFoods(data.data))
    .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    fetch(`https://can-lily-eat-it.onrender.com/api/v1/users/${user_id}/allergens`)
    .then(response => response.json())
    .then(data => setExistingAllergens(data.data))
    .catch(err => console.log(err))
  }, []);

  const getBadFoods = () => {
    if (foods) {
      let filtered = foods.filter((food) => food.attributes.lily_eat == false)
      setBadFoods(filtered);
    }
  };

  const getGoodFoods = () => {
    if (foods) {
      let filtered = foods.filter((food) => food.attributes.lily_eat == true)
      setGoodFoods(filtered);
    }
  };

  useEffect(() => {
    getBadFoods();
    getGoodFoods();
  }, [foods]);

  const deleteSavedFood = (user_id, food_id) => {
    // fetch(`https://27965142-cb65-4b7c-9f97-05e599e7c347.mock.pstmn.io/api/v1/users/${userId}/foods/${allergen.foodId}`, {
    fetch(`https://can-lily-eat-it.onrender.com/api/v1/users/${user_id}/foods/${food_id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (!response.ok) {
        alert("Something went wrong, please try again.")
      } else {
        return response.json()
      }
    })
    .then((data) => setFoods(data.data))
    .catch(err => console.log(err))
  }

  const handleDelete = (user_id, food_id) => {
    deleteSavedFood(user_id, food_id);
    console.log("deleted")
  };

  let renderedFoods = <></>

  if (selectedFoods == "bad") {
    renderedFoods = (
      <div className="bad-foods-container">
        <h1 className="bad-foods-title">BAD FOODS</h1>
        { (badFoods && badFoods.length != 0) ?
            badFoods.map((food) => (
              <>
                <FoodCard result={food} extraClass={"-profile"} userId={user_id} />
                <button className="unsave-food-button" onClick={() => {handleDelete(user_id, food.id)}}>Unsave Food</button>
              </>
            ))
          :
            <h1>Save a Food!</h1>
        }
      </div>
    )
  }
  else if (selectedFoods == "good") {
    renderedFoods = (
      <div className="good-foods-container">
        <h1 className="good-foods-title">GOOD FOODS</h1>
        { (goodFoods && goodFoods.length != 0) ?
            goodFoods.map((food) => (
              <>
                <FoodCard key={food.id} result={food} extraClass={"-profile"} userId={user_id} />
                <button className="unsave-food-button" onClick={() => {handleDelete(user_id, food.id)}}>Unsave Food</button>
              </>
            ))
          :
            <h1>Save a Food!</h1>
        }
      </div>
    )
  }
  else {
    renderedFoods = (
      <>{undefined}</>
    )
  }

  function handleSelect(selectedButton) {
    if (selectedFoods == selectedButton) {
      setSelectedFoods();
    }
    else {
      setSelectedFoods(selectedButton);
    }
  }

  return (
    <>
      <MainHeading userId={user_id}/>
      <div className="profile-page">
        <div className="tab-buttons">
          <TabButton className="tab-button" buttonName="Bad Foods" isSelected={selectedFoods === "bad"} onSelect={() => handleSelect("bad")} />
          <TabButton className="tab-button" buttonName="Good Foods" isSelected={selectedFoods === "good"} onSelect={() => handleSelect("good")} />
        </div>
        <div className="foods-container">
          {renderedFoods}
        </div>
      </div>
    </>
  );
}

export default ProfilePage;