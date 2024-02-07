import "./UpcSearchResults.css"

function UpcSearchResults({result}) {

  const allergen = {
    name: result.data.attributes.name,
    ingredients: result.data.attributes.ingredients,
    allergens: result.data.attributes.allergens,
    lilyEat: result.data.attributes.lily_eat
  }

  console.log(allergen)

  return (
    <></>
  );
}

export default UpcSearchResults;