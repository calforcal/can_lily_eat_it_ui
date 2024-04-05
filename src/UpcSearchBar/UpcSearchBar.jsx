import "./UpcSearchBar.css"
import { useState } from "react";

function UpcSearchBar({ userAllergens, setResult }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    let stringAllergens = userAllergens.join(",")
    // fetch(`https://27965142-cb65-4b7c-9f97-05e599e7c347.mock.pstmn.io/api/v1/allergens?upc=${value}`)
    fetch(`http://127.0.0.1:3000/api/v1/upc_items?upc=${value}&allergens=${stringAllergens}`)
    .then((response) => {
      if (response.status == 204) {
        return "No Data."
      }
      else {
        return response.json()
      }
    })
    .then((data) => setResult(data))
    .catch((err) => console.log(err))
  };

  const handleChange = (value) => {
    setInput(value)
  }

  const handleSubmit = () => {
    fetchData(input);
  };

  return (
    <>
      <div className="upc-search-container">
        <h3 className="upc-search-heading">Enter a UPC Code Below</h3>
        <input className="upc-search-bar" placeholder="Enter a UPC Code..." value={input} onChange={(e) => handleChange(e.target.value)} />
        <button className="upc-search-button" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default UpcSearchBar;