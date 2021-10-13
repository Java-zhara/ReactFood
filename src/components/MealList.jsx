import React from "react";
import { MealItem } from "./MealItem";

export const MealList = ({ meals }) => {
  return (
    <div>
      <div className="list">
        {meals.map((meal) => (
          <MealItem key={meal.idMeal} {...meal} />
        ))}
      </div>
    </div>
  );
};
