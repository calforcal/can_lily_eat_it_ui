import "./SearchPage.css"
import { useEffect, useState } from "react";
import MainHeading from "../MainHeading/MainHeading";
import FoodCard from "../FoodCard/FoodCard";
import CheckBoxForm from "../CheckBoxForm/CheckBoxForm"
import UpcSearchBar from "../UpcSearchBar/UpcSearchBar";
import { useLocation } from "react-router-dom";

function SearchPage() {

  const location = useLocation();
  const [userId, setUserId] = useState(null);
  const [userAllergens, setUserAllergens] = useState([]);

  useEffect(() => {
    setUserId(location.state)
  }, [])

  const [result, setResult] = useState();

  let renderMe;

  if (result && result.data) {
    renderMe = <FoodCard result={result.data} extraClass="-search" userId={userId} />
  } 
  else if (result) {
    renderMe = <p className="not-found-search">No Item was found with that Code. Please try again.</p>
  }
  else {
    renderMe = <p className="pre-search-placeholder">Search for an Item!</p>
  };

  return (
    <>
      <MainHeading userId={userId}/>
      <div className="search-page">
        <div className="search-and-result-container">
          <div className="search-container">
            <UpcSearchBar userAllergens={userAllergens} setResult={setResult} userId={userId} />
            {
              userId ?
              <></>
              :
              <CheckBoxForm setUserAllergens={setUserAllergens}/>
            }
          </div>
          <div className="food-card-container">
            {renderMe}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchPage;