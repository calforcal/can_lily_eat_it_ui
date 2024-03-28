import "./SearchPage.css"
import { useEffect, useState } from "react";
import MainHeading from "../MainHeading/MainHeading";
import FoodCard from "../FoodCard/FoodCard";
import UpcSearchBar from "../UpcSearchBar/UpcSearchBar";
import { useLocation } from "react-router-dom";

function SearchPage() {

  const location = useLocation();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setUserId(location.state)
  }, [])

  const [result, setResult] = useState();

  return (
    <>
      <MainHeading userId={userId}/>
      <div className="search-and-result-container">
        <div className="search-container">
          <UpcSearchBar setResult={setResult} />
        </div>
        <div className="food-card-container">
          { result ?
              <FoodCard result={result.data} extraClass="-search" userId={userId} />
            :
              <p className="pre-search-placeholder">Search for an Item!</p>
          }
        </div>
      </div>
    </>
  );
}

export default SearchPage;