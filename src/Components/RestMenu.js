import React, { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MEnu_LIST } from "../utilis/constants";

const RestMenu=()=>{
    const [resInfo,setResInfo] =useState(null)
    const {resId}=useParams()

    useEffect(()=>{
        getMenu()
    },[])


     const getMenu=async()=>{
        const data=await fetch(MEnu_LIST+resId)
        const json=await data.json();
        console.log(json)
        setResInfo(json.data)
    }
    if(resInfo===null) return <Shimmer/>;

    const{name,cuisines,cloudinaryImageId,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    const{itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards)
    return(
        <>
            <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{costForTwoMessage}</h2>
            <h2>Menu</h2>
            <ul>
                {/* <li>{itemCards[0]?.card?.info?.name}</li> */}
                {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name} - {"Rs."} {item.card.info.price/100 || item.card.info.defaultPrice/100 }</li>)}
            </ul>
            </div>
        </>
    )
}
export default RestMenu;