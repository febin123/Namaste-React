import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard"
import { resList } from "../../utils/constants"
import { useState } from "react";
import Shimmer from "./Shimmer";
const Body=()=>{

    const [listOfRestaurant,setListOfRestaurant]=useState([])

    const [filteredRestaurants,setFilteredRestaurants]=useState([])
    const[searchText,setSearchText]=useState([])
    useEffect(()=>{
        console.log("useEffect called")
        fetchData()
    },[])

    const fetchData= async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json()
        console.log(json)
        setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }
    
    return listOfRestaurant.length === 0 ? <Shimmer/>: (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={()=>{
                        const filtered=listOfRestaurant.filter((res)=>
                            res.data.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredRestaurants(filtered)
                    }}>Search</button>
                </div>
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
              filteredRestaurants.map((restaurant)=>
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