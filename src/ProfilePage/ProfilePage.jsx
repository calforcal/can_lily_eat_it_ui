import { useEffect, useState } from "react";
import "./ProfilePage.css"
import { useLocation } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";

function ProfilePage() {

  const location = useLocation();
  const user_id = location.state;
  const [user, setUser] = useState();
  const [foods, setFoods] = useState();

  useEffect(() => {
    fetch(`https://27965142-cb65-4b7c-9f97-05e599e7c347.mock.pstmn.io/api/v1/users/${user_id}/foods`)
    .then(response => response.json())
    .then(data => setFoods(data.data))
    .catch(err => console.logg(err))
  }, []);

  useEffect(() => {
    fetch(`https://27965142-cb65-4b7c-9f97-05e599e7c347.mock.pstmn.io/api/v1/users/${user_id}`)
    .then(response => response.json())
    .then(data => setUser(data.data))
    .catch(err => console.logg(err))
  }, []);

  return (
    <>
      <div className="food-cards">
        {
        foods ?
        foods.map((food) => (
          <FoodCard result={food} />
        ))
        :
        <h1>Nothing to see</h1>
        }
      </div>
    </>
  );
}

export default ProfilePage;