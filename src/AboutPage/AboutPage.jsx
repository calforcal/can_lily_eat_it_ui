import MainHeading from '../MainHeading/MainHeading';
import { useState, useEffect } from 'react';
import './AboutPage.css'
import { useLocation } from "react-router-dom";

function AboutPage() {
  return(
    <>
      <MainHeading />
      <div className='about-page'>
        <h1 className='about-title'>About Can Lily Eat It?</h1>
        <p className='about-info'>
          Lily is my niece. 1 of 5 nieces (girl uncle!). She developed an allergy to dairy and soy just after she was born, therefore my sister could no longer eat foods with those allergens and she was having a hard time figuring out what contained these allergens. So I decided to make an app the detects Soy and Dairy in any product we can find a UPC code for, to help my sister safely eat packaged foods!
        </p>
      </div>
    </>
  );
}

export default AboutPage;