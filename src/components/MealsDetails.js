import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MealsDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [mDeails, setMDetails] = useState([]);
  const getMealsDetails = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const parseData = await response.json();
    setMDetails(parseData.meals[0]);
  };
  useEffect(() => {
    getMealsDetails();
  }, []);

  return (
    mDeails && (
      <div className="row justify-content-md-center mt-5">
        <div className="card col-md-4 p-3 mt-1">
          <img src={mDeails.strMealThumb} className="card-img-top" alt="meals image" />
          <div className="card-body">
            <h5 className="card-title">{mDeails.strMeal}</h5>
            <p className="card-text fw-bold">Instructions</p>
            <p className="card-text">{mDeails.strInstructions}</p>
            <button className="btn btn-success" onClick={() => navigate(-1)}>
              back
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default MealsDetails;
