import React from "react";
import {Link} from 'react-router-dom';

const Categories = ({ item }) => {
  return (
    <div className="col-md-3 m-1">
      <div className="card">
        <img src={item.strCategoryThumb} className="card-img-top" alt="categoryimg"/>
        <div className="card-body">
          <h5 className="card-title">{item.strCategory}</h5>
          <p className="card-text" style={{ height: "100px" }}>
            {item.strCategoryDescription.slice(0, 115)}...
          </p>
          <Link to={`/mealsList/${item.strCategory}`} className="btn btn-dark float-end">
            Select
          </Link>
          {/* <div class="accordion" id={`${item.strCategory}`}>
            <div class="accordion-item">
              <h2 class="accordion-header" id={`${item.strCategory}e`}>
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${item.idCategory}`} aria-expanded="false" aria-controls={`${item.idCategory}`}>
                  Accordion Item #2
                </button>

              </h2>
              <div id={`${item.idCategory}`} class="accordion-collapse collapse" aria-labelledby={`${item.strCategory}e`} data-bs-parent={`#${item.strCategory}`}>
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                  our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
          </div>
  );
};

export default Categories;
