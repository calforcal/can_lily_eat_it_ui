import "./SearchPage.css"
import { useState } from "react";
import MainHeading from "../MainHeading/MainHeading";
import FoodCard from "../FoodCard/FoodCard";
import UpcSearchBar from "../UpcSearchBar/UpcSearchBar";

function SearchPage() {

  const [result, setResult] = useState();

  return (
    <>
      <MainHeading />
      <div className="app-search-container">
        <UpcSearchBar setResult={setResult} />
        { result ?
            <FoodCard result={result.data}/>
          :
          <></>
        }
      </div>
    </>
  );
}

export default SearchPage;