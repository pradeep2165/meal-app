import React, { useEffect, useState } from "react";
import Categories from "./Categories";
const Meals = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const parseData = await response.json();
    setCategories(parseData.categories);
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="mt-5 pt-3">
      <h1 className="text-light text-center">Select the food category</h1>
      <div className="d-flex flex-wrap container justify-content-center">
        {categories.map((item, i) => (
          <Categories key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Meals;
