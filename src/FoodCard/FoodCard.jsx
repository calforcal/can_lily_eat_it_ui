import { useState } from "react";
import "./FoodCard.css"

function FoodCard({result, extraClass}) {

  const allergen = {
    name: result.attributes.name,
    ingredients: result.attributes.ingredients.join(", "),
    allergens: result.attributes.allergens.join(", "),
    lilyEat: result.attributes.lily_eat
  }

  return (
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
    </div>
  );
}

export default FoodCard;