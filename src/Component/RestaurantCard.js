import { CDN_URL } from "../utilis/constants";
const RestaurantCard=(props)=>{
    //destructing the component
    const {resData}=props;
    const {name,costForTwoString,avgRating,cuisines,cloudinaryImageId}=resData?.data
    return(
        <div className="res-card">
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt="" srcSet="" />
            <h3>{name}</h3>
            <h4>{costForTwoString}</h4>
            <h4>{avgRating}</h4>
            <h4>{cuisines.join(",")}</h4>
        </div>
    )
}

export default RestaurantCard