import RestaurantCard from "./RestaurantCard"
import { resList } from "../utilis/constants"
import { useState } from "react"



const Body=()=>{
    const [listOfRestaurants,setListOfRestaurants] =useState(resList)
    return(
        <div className="body">
            <div className="filter">
               <button className="filter-btn" onClick={(e)=>{
                e.preventDefault();
                const filterResList=listOfRestaurants.filter((res)=>res.data.avgRating > 4.2)
                setListOfRestaurants(filterResList)
                console.log(filterResList)
               }} >Top Rated Resrtaurant</button></div>
            <div className="res-container">

            {
                listOfRestaurants.map((restaurant)=>
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                )
                
            }
             {/* <RestaurantCard resData={resList[0]}/>
             <RestaurantCard resData={resList[1]}/>
             <RestaurantCard resData={resList[2]}/>
             <RestaurantCard resData={resList[3]}/>
             <RestaurantCard resData={resList[4]}/>
             <RestaurantCard resData={resList[5]}/> */}
            </div>
        </div>
    )
}
export default Body