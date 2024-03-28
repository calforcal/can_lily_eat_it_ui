import { React, useEffect, useState } from "react";
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
  const [deletedItem, setDeletedItem] = useState(0);

  const pleaseRender = () => {
    setDeletedItem(deletedItem + 1);
  }

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

  const deleteSavedFood = (user_id, food_id) => {
    // fetch(`https://27965142-cb65-4b7c-9f97-05e599e7c347.mock.pstmn.io/api/v1/users/${userId}/foods/${allergen.foodId}`, {
    fetch(`http://127.0.0.1:3000/api/v1/users/${user_id}/foods/${food_id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (!response.ok) {
        alert("Something went wrong, please try again.")
      } else {
        return response.json()
      }
    })
    .then((data) => setFoods(data.data))
    .catch(err => console.log(err))
  }

  const handleDelete = (user_id, food_id) => {
    deleteSavedFood(user_id, food_id);
    console.log("deleted")
  };

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
                <>
                  <FoodCard result={food} extraClass={"-profile"} userId={user_id} />
                  <button onClick={() => {handleDelete(user_id, food.id)}}>Unsave Food</button>
                </>
              ))
            :
              <h1>Nothing to see</h1>
          }
        </div>
        <div className="good-foods-container">
          <h1 className="good-foods-title">GOOD FOODS</h1>
          { goodFoods ?
              goodFoods.map((food) => (
                <>
                  <FoodCard key={food.id} result={food} extraClass={"-profile"} userId={user_id} />
                  <button onClick={() => {handleDelete(user_id, food.id)}}>Unsave Food</button>
                </>
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