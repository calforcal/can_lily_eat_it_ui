import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FoodCard.css"
import TabButton from "../TabButton/TabButton";

function FoodCard({result, extraClass}) {

  const [savedFood, setSavedFood] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState();
  const navigate = useNavigate();

  const allergen = {
    name: result.attributes.name,
    ingredients: result.attributes.ingredients.join(", "),
    allergens: result.attributes.allergens.join(", "),
    lilyEat: result.attributes.lily_eat,
    foodId: result.id
  }

  const foodData = {
    name: result.attributes.name,
    upc_code: result.attributes.upc_code,
    ingredients: result.attributes.ingredients,
    allergens: result.attributes.allergens,
    lily_eat: result.attributes.lily_eat
  }

  let tabContent = <p>Click To Learn More.</p>

  if (selectedTopic == "ingredients") {
    tabContent = (
      <div className="tab-content">
        <p>{allergen.ingredients}</p>
      </div>
    );
  } 
  else if (selectedTopic == "allergens") {
    tabContent = (
      <div className="tab-content">
        <p>{allergen.allergens}</p>
      </div>
    );
  } 
  else {
    tabContent = (
      <p>{undefined}</p>
    );
  }

  function handleSelect(selectedButton) {
    if (selectedTopic == selectedButton) {
      setSelectedTopic();
    }
    else {
      setSelectedTopic(selectedButton);
    }
  }

  const postSavedFood = () => {
    // fetch(`https://27965142-cb65-4b7c-9f97-05e599e7c347.mock.pstmn.io/api/v1/users/${userId}/foods`, {
    fetch(`https://can-lily-eat-it.onrender.com/api/v1/foods`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: localStorage.token
      },
      body: JSON.stringify(foodData)
    })
    .then((response) => {
      if (!response.ok) {
        alert("Something went wrong, please try again.")
      } else {
        return response.json()
      }
    })
    .then(setSavedFood(true))
  };

  useEffect(() => {
    if (savedFood) {
      navigate("/profile");
    }
  }, [savedFood]);

  const handleSave = () => {
    postSavedFood();
  };

  return (
    <>
      <div className={"food-result-container" + extraClass}>
        <ul>
          <li className={"food-item" + extraClass}>{allergen.name}</li>
          <li className={"can-lily-eat-it-label" + extraClass}>Can Lily Eat It?</li>
          <li className={allergen.lilyEat ? "food-lily-eat-true" + extraClass : "food-lily-eat-false" + extraClass}>{allergen.lilyEat ? "Yes, she can!" : "ABSOLUTELY NOT" }</li>
        </ul>
        
        <div className="tab-buttons">
          <TabButton className="tab-button" buttonName="Ingredients" isSelected={selectedTopic === "ingredients"} onSelect={() => handleSelect("ingredients")} />
          <TabButton className="tab-button" buttonName="Allergens" isSelected={selectedTopic === "allergens"} onSelect={() => handleSelect("allergens")} />
        </div>
        <div className="tab-content">{tabContent}</div>
        {
          localStorage.token && extraClass != "-profile"
          ?
          <button className="save-food-button" onClick={() => {handleSave()}}>Save Food</button>
          :
          null
        }
      </div>
    </>
  );
}

export default FoodCard;