import "./MainHeading.css"
import { useState } from "react"
import NavBar from "../NavBar/NavBar"
import { useSearchParams } from "react-router-dom";

function MainHeading() {

  return (
    <>
      <div className="header-container">
        <h1 className="main-header">Can Lily Eat IT?</h1>
        <NavBar />
      </div>
    </>
  );
}

export default MainHeading;