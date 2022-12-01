import React from "react";
import {Link} from 'react-router-dom'
const MealsCard = ({ meals }) => {
  return (
    <div className="col-md-3 m-1">
      <div className="card p-2" style={{height: "28rem"}} >
        <img src={meals.strMealThumb} className="card-img-top rounded" alt="meals image" />
        <div className="card-body">
          <h5 className="card-title text-center">{meals.strMeal}</h5>
          <div class="d-grid gap-2">

          <Link to={`/meals/${meals.idMeal}`} className="btn btn-primary float-end" >Select</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealsCard;
