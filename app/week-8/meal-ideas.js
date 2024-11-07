"use client";

import { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
}

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      if (ingredient) {
        const mealsData = await fetchMealIdeas(ingredient);
        setMeals(mealsData);
      } else {
        setMeals([]);
      }
    }
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Meal Ideas for "{ingredient}"</h2>
      {meals.length > 0 ? (
        <ul>
          {meals.map(meal => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      ) : (
        <p>No meal ideas found.</p>
      )}
    </div>
  );
}

export default MealIdeas;
