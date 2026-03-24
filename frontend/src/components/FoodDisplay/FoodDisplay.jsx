import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'

const FoodDisplay = ({category, search}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
       <h3>Top Dishes near you</h3>
       <div className="food-display-list">
        {food_list.filter((item)=>{
  return (
    (category === "All" || category === item.category) &&
    item.name.toLowerCase().includes(search.toLowerCase())
  )
})
.map((item,index)=>{
  return (
    <FoodItem
      key={index}
      id={item._id}
      name={item.name}
      description={item.description}
      price={item.price}
      image={item.image}
    />
  )
})}
       </div>
    </div>
  )
}

export default FoodDisplay
