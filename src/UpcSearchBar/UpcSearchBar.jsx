import "./UpcSearchBar.css"
import { useState } from "react";

function UpcSearchBar({ setResult }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(`https://27965142-cb65-4b7c-9f97-05e599e7c347.mock.pstmn.io/api/v1/allergens?upc=${value}`)
    .then((response) => response.json())
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
      <div>
        <input placeholder="Enter a UPC Code..." value={input} onChange={(e) => handleChange(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default UpcSearchBar;