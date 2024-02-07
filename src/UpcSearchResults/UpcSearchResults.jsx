import { useState } from "react";
import "./UpcSearchResults.css"

function UpcSearchResults({result}) {

  const allergen = {
    name: result.data.attributes.name,
    ingredients: result.data.attributes.ingredients,
    allergens: result.data.attributes.allergens,
    lilyEat: result.data.attributes.lily_eat
  }

  console.log(allergen.lilyEat)

  return (
    <>
      <h2>Food Item: {allergen.name}</h2>
      <p>Ingredients{allergen.ingredients}</p>
      <h4>Allergens Found: {allergen.allergens}</h4>
      <h3>Can Lily eat it? {allergen.lilyEat.toString()}</h3>
    </>
  );
}

export default UpcSearchResults;