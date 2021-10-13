import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getFilterByCategory } from "../api";
import { MealList } from "../components/MealList";
import { Preloader } from "../components/Preloader";

export const Category = () => {
  const { name } = useParams();
  const { goBack } = useHistory();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilterByCategory(name).then((data) => {
      setMeals(data.meals);
    });
  }, [name]);

  return (
    <>
      <button className="btn" onClick={goBack}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
};
