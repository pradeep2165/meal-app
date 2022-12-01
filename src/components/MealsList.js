import React, {useEffect, useState} from 'react'
import MealsCard from './MealsCard';
import {useParams} from 'react-router-dom';
const MealsList = () => {
    const {id} = useParams();
    const [mList, setMList] = useState([]);
    const getMealsList = async()=>{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`);
        const parseData = await response.json();
        setMList(parseData.meals);
    }
    useEffect(()=>{
        getMealsList();
    },[])
    
  return (
    <div className='mt-5 pt-3'>
    <h1 className='text-center text-light d-inlineBlock'> Meals Items </h1>
        <div className="d-flex flex-wrap container justify-content-center">
        {mList && mList.map((item)=>(
            <MealsCard meals={item} key={item.idMeal}/>
        ))}
    </div>
    </div>
  )
}

export default MealsList
