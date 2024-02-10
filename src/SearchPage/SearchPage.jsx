import "./SearchPage.css"

function SearchPage() {
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