import "./SearchPage.css"
import { useState } from "react";
import MainHeading from "../MainHeading/MainHeading";
import UpcSearchResults from "../UpcSearchResults/UpcSearchResults";
import UpcSearchBar from "../UpcSearchBar/UpcSearchBar";

function SearchPage() {

  const [result, setResult] = useState();

  return (
    <>
      <MainHeading />
      <div className="app-search-container">
        <UpcSearchBar setResult={setResult} />
        { result ?
            <UpcSearchResults result={result}/>
          :
          <></>
        }
      </div>
    </>
  );
}

export default SearchPage;