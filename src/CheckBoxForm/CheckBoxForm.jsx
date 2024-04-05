import "./CheckBoxForm.css"
import { useState } from "react";

function CheckBoxForm({ setUserAllergens }) {

  const [allergenHash, setAllergenHash] = useState({
    "dairy": false,
    "soy": false,
    "egg": false,
    "fish": false,
    "shellfish": false,
    "treenut": false,
    "peanut": false,
    "wheat": false
  })

  const allergenArray = () => {
    let arr = []
    for (const key in allergenHash) {
      if (allergenHash[key] == true) {
        arr.push(key)
      }
    }

    return arr;
  }

  const handleOnChange = (value) => {
    let tempHash = allergenHash
    tempHash[value] = !tempHash[value]
    setAllergenHash(tempHash);
    setUserAllergens(allergenArray());
  }

  return (
    <form className="checkbox-form">
      <div>
        <label>Dairy</label>
        <input type="checkbox" className="allergen-checkbox" value="dairy" onChange={(e) => handleOnChange(e.target.value)} />
      </div>
      <div>
        <label>Soy</label>
        <input type="checkbox" className="allergen-checkbox" value="soy" onChange={(e) => handleOnChange(e.target.value)} />
      </div>
      <div>
        <label>Egg</label>
        <input type="checkbox" className="allergen-checkbox" value="egg" onChange={(e) => handleOnChange(e.target.value)} />
      </div>
      <div>
        <label>Fish</label>
        <input type="checkbox" className="allergen-checkbox" value="fish" onChange={(e) => handleOnChange(e.target.value)} />
      </div>
      <div>
        <label>Shellfish</label>
        <input type="checkbox" className="allergen-checkbox" value="shellfish" onChange={(e) => handleOnChange(e.target.value)} />
      </div>
      <div>
        <label>Treenut</label>
        <input type="checkbox" className="allergen-checkbox" value="treenut" onChange={(e) => handleOnChange(e.target.value)} />
      </div>
      <div>
        <label>Peanut</label>
        <input type="checkbox" className="allergen-checkbox" value="peanut" onChange={(e) => handleOnChange(e.target.value)} />
      </div>
      <div>
        <label>Wheat</label>
        <input type="checkbox" className="allergen-checkbox" value="wheat" onChange={(e) => handleOnChange(e.target.value)} />
      </div>
    </form>
  );
}

export default CheckBoxForm;