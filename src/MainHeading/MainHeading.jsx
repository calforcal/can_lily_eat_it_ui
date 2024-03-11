import "./MainHeading.css"
import { useState } from "react"
import NavBar from "../NavBar/NavBar"
import { useSearchParams } from "react-router-dom";

function MainHeading({userId}) {

  return (
    <>
      <div className="header-container">
        <h1 className="main-header">Can Lily Eat IT?</h1>
        <NavBar userId={userId} />
      </div>
    </>
  );
}

export default MainHeading;