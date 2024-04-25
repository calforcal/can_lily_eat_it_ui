import MainHeading from '../MainHeading/MainHeading';
import './AboutPage.css'

function AboutPage() {
  return(
    <>
      <MainHeading />
      <div className='about-page'>
        <h1 className='about-title'>About Can Lily Eat It?</h1>
        <p className='about-info'>
          Lily is my niece. 1 of 5 nieces (girl uncle!). She developed an allergy to dairy and soy just after she was born, therefore my sister could no longer eat foods with those allergens and she was having a hard time figuring out what contained these allergens. 
          <br></br>
          <br></br>
          The FDA does not require refined soy products to be listed as an allergen on food products. Other products like gelatin also do not show up in listed allergens, even though they can sometimes contain dairy/soy. 
          <br></br>
          <br></br>
          I've created this app to search a UPC code, and compare its ingredients to a highly sensitive list of common and uncommon ingredients allergens are found in.
        </p>
      </div>
    </>
  );
}

export default AboutPage;