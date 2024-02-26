import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FoodCard.css"

function FoodCard({result, extraClass, userId}) {

  const [savedFood, setSavedFood] = useState(false);
  const navigate = useNavigate();

  const allergen = {
    name: result.attributes.name,
    ingredients: result.attributes.ingredients.join(", "),
    allergens: result.attributes.allergens.join(", "),
    lilyEat: result.attributes.lily_eat
  }

  const foodData = {
    name: result.attributes.name,
    ingredients: result.attributes.ingredients,
    allergens: result.attributes.allergens,
    lilyEat: result.attributes.lily_eat
  }

  const postSavedFood = () => {
    fetch(`https://27965142-cb65-4b7c-9f97-05e599e7c347.mock.pstmn.io/api/v1/users/${userId}/foods`, {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
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
      navigate("/profile", { state: userId });
    }
  }, [savedFood]);

  const handleSave = () => {
    console.log("doing it");
    postSavedFood();
  };

  return (
    <>
      <div className={"food-result-container" + extraClass}>
        <ul>
          <li className={"food-item" + extraClass}>{allergen.name}</li>
          <li className={"ingredients-label" + extraClass}>Ingredients</li>
          <li className={"food-ingredients" + extraClass}>{allergen.ingredients}</li>
          <br></br>
          <li className={"allergens-label" + extraClass}>Allergens Found</li>
          <li className={"food-allergens-found" + extraClass}>{allergen.allergens}</li>
          <br></br>
          <li className={"can-lily-eat-it-label" + extraClass}>Can Lily Eat It?</li>
          <li className={"food-lily-eat" + extraClass}>{allergen.lilyEat ? "Yes, she can!" : "ABSOLUTELY NOT" }</li>
        </ul>
        {
          extraClass == "-profile"
          ?
          <button>Unsave Food</button>
          :
          null
        }
        {
          userId
          ?
          <button onClick={() => {handleSave()}}>Save Food</button>
          :
          null
        }
      </div>
    </>
  );
}

export default FoodCard;