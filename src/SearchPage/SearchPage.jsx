import "./SearchPage.css"
import { useState } from "react";
import MainHeading from "../MainHeading/MainHeading";
import FoodCard from "../FoodCard/FoodCard";
import UpcSearchBar from "../UpcSearchBar/UpcSearchBar";
import { useLocation } from "react-router-dom";

function SearchPage() {

  const location = useLocation();
  const userId = location.state.userId;
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