import { useState } from "react";
import "./UpcSearchResults.css"

function UpcSearchResults({result}) {

  const allergen = {
    name: result.data.attributes.name,
    ingredients: result.data.attributes.ingredients.join(", "),
    allergens: result.data.attributes.allergens.join(", "),
    lilyEat: result.data.attributes.lily_eat
  }

  return (
    <div className="food-result-container">
      <ul>
        <li className="food-item">{allergen.name}</li>
        <li className="ingredients-label">Ingredients</li>
        <li className="food-ingredients">{allergen.ingredients}</li>
        <br></br>
        <li className="allergens-label">Allergens Found</li>
        <li className="food-allergens-found">{allergen.allergens}</li>
        <br></br>
        <li className="can-lily-eat-it-label">Can Lily Eat It?</li>
        <li className="food-lily-eat">{allergen.lilyEat ? "Yes, she can!" : "ABSOLUTELY NOT" }</li>
      </ul>
    </div>
  );
}

export default UpcSearchResults;