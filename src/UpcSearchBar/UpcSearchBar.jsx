import "./UpcSearchBar.css"
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';

function UpcSearchBar({ userAllergens, setResult}) {
  const [input, setInput] = useState("");

  const getUpcInfo = (value) => {
    let stringAllergens = userAllergens.join(",")
    fetch(`https://can-lily-eat-it.onrender.com/api/v1/upc_items?upc=${value}&allergens=${stringAllergens}`, {
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: localStorage.token
      },
    })
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
    getUpcInfo(input);
  };

  return (
    <>
      <div className="upc-search-container">
        <h3 className="upc-search-heading">Enter a UPC Code Below</h3>
        <input className="upc-search-bar" placeholder="Enter a UPC Code..." value={input} onChange={(e) => handleChange(e.target.value)} />
        <Tooltip placement="bottom" title="UPC Codes are typically 12 digits long." sx={{pl: -0}}>
                <IconButton>
                  <InfoIcon />
                </IconButton>
        </Tooltip>
        <button className="upc-search-button" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default UpcSearchBar;