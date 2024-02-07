import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainHeading from '/src/MainHeading/MainHeading'
import UpcSearchBar from '/src/UpcSearchBar/UpcSearchBar'
import UpcSearchResults from './UpcSearchResults/UpcSearchResults'

function App() {

  const [result, setResult] = useState();

  return (
    <>
      <MainHeading />
      <UpcSearchBar setResult={setResult} />
      { result ?
          <UpcSearchResults result={result}/>
        :
        <></>
      }
    </>
  )
}

export default App;
