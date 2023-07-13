import { useEffect, useState } from "react"
import { MEnu_LIST } from "./constants"

const useRestaurantMenu=(resId)=>{

    const[resInfo,setResInfo] = useState(null)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        const data=await fetch(MEnu_LIST+resId)
        const json=await data.json()
        setResInfo(json.data)
    }
    return resInfo;
}
export default useRestaurantMenu 