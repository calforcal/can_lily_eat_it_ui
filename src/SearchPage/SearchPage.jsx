import "./SearchPage.css"
import { useState } from "react";
import MainHeading from "../MainHeading/MainHeading";
import FoodCard from "../FoodCard/FoodCard";
import UpcSearchBar from "../UpcSearchBar/UpcSearchBar";
import { useLocation } from "react-router-dom";

function SearchPage() {

  const location = useLocation();

  const setUserId = () => {
    if (location.state) {
      return location.state.userId;
    } else {
      return null;
    }
  }

  const userId = setUserId();

  const [result, setResult] = useState();

  return (
    <>
      <MainHeading />
      <div className="app-search-container">
        <UpcSearchBar setResult={setResult} />
        { result ?
            <FoodCard result={result.data} extraClass="-search" userId={userId} />
          :
            <></>
        }
      </div>
    </>
  );
}

export default SearchPage;