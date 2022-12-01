import "./App.css";
import Navbar from "./components/Navbar";
import Meals from "./components/Meals";
import MealsList from "./components/MealsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MealsDetails from "./components/MealsDetails";
function App() {
  return (
    <BrowserRouter>
      <div className="bg-secondary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Meals/>}/>
          <Route path="/mealsList/:id" element={<MealsList/>}/>
          <Route path="/meals/:id" element={<MealsDetails/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// Recipe Builder: Please review TheMealDB API at https://www.themealdb.com/api.php.
// Write a program that will 1) list the categories of meals, 2) shows the available meals in a category and 3) shows the meal instructions.
