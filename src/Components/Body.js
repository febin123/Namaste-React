import React from "react";
import RestaurantCard from "./RestaurantCard"
import { resList } from "../../utils/constants"
import { useState } from "react";
const Body=()=>{

    const [listOfRestaurant,setListOfRestaurant]=useState(resList)

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredRest=listOfRestaurant.filter((res)=>(
                        res.data.avgRating > 4
                    )
                    
                    )
                    setListOfRestaurant(filteredRest)
                    // console.log(resList)
                }}>Top rated Restaurant</button>
            </div>

            <div className="res-container">

            {/* {
                resList.map((restaurant)=>
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                )
            } */}

            {
              listOfRestaurant.map((restaurant)=>
              <RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
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