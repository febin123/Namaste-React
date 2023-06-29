import RestaurantCard from "./RestaurantCard"
import { resList } from "../utilis/constants"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"



const Body=()=>{
    const [listOfRestaurants,setListOfRestaurants] =useState([])

    const[filteredRestaurants,setFilteredRestaurants] =useState([])
    const [searchText,setSearchText]=useState("") 

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json();
        console.log(json);

        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)

    }
    //conditional rendering 
    // if(listOfRestaurants.length === 0) {
    //     return <Shimmer/>
    // }
    return listOfRestaurants.length ===0 ? <Shimmer/>:(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" value={searchText} className="search-box" onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={()=>{
                        console.log(searchText)

                        const filteredRest=listOfRestaurants.filter((res)=>
                        res.data.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        // setListOfRestaurants(filteredRest)
                        setFilteredRestaurants(filteredRest)

                    }}>Search</button>
                </div>
               <button className="filter-btn" onClick={(e)=>{
                e.preventDefault();
                const filterResList=listOfRestaurants.filter((res)=>res.data.avgRating > 4.2)
                setListOfRestaurants(filterResList)
                console.log(filterResList)
               }} >Top Rated Resrtaurant</button></div>
            <div className="res-container">

            {
                filteredRestaurants.map((restaurant)=>
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