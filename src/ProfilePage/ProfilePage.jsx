import { useEffect, useState } from "react";
import "./ProfilePage.css"
import { useLocation, Link } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";
import MainHeading from "../MainHeading/MainHeading";

function ProfilePage() {

  const location = useLocation();
  const user_id = location.state;
  const [user, setUser] = useState();
  const [foods, setFoods] = useState();
  const [badFoods, setBadFoods] = useState();
  const [goodFoods, setGoodFoods] = useState();

  useEffect(() => {
    // fetch(`https://27965142-cb65-4b7c-9f97-05e599e7c347.mock.pstmn.io/api/v1/users/${user_id}/foods`)
    fetch(`http://127.0.0.1:3000/api/v1/users/${user_id}/foods`)
    .then(response => response.json())
    .then(data => setFoods(data.data))
    .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    // fetch(`https://27965142-cb65-4b7c-9f97-05e599e7c347.mock.pstmn.io/api/v1/users/${user_id}`)
    fetch(`http://127.0.0.1:3000/api/v1/logged_in`)
    .then(response => response.json())
    .then(data => setUser(data.data))
    .catch(err => console.log(err))
  }, []);

  const getBadFoods = () => {
    if (foods) {
      let filtered = foods.filter((food) => food.attributes.lily_eat == false)
      setBadFoods(filtered);
    }
  };

  const getGoodFoods = () => {
    if (foods) {
      let filtered = foods.filter((food) => food.attributes.lily_eat == true)
      setGoodFoods(filtered);
    }
  };

  useEffect(() => {
    getBadFoods();
    getGoodFoods();
  }, [foods]);

  return (
    <>
      <MainHeading userId={user_id}/>
      <div className="search-link-container">
      </div>
      <div className="foods-container">
        <div className="bad-foods-container">
          <h1 className="bad-foods-title">BAD FOODS</h1>
          { badFoods ?
              badFoods.map((food) => (
                <FoodCard result={food} extraClass={"-profile"} userId={user_id} />
              ))
            :
              <h1>Nothing to see</h1>
          }
        </div>
        <div className="good-foods-container">
          <h1 className="good-foods-title">GOOD FOODS</h1>
          { goodFoods ?
              goodFoods.map((food) => (
                <FoodCard result={food} extraClass={"-profile"} userId={user_id}/>
              ))
            :
              <h1>Nothing to see</h1>
          }
        </div>
      </div>
    </>
  );
}

export default ProfilePage;