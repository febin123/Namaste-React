import { useState } from "react"

const User=({name,location})=>{
    let [add,setAdd]=useState(1);
    return(
        <>
        <div className="user-card">
            <h1>{add}</h1>
            <button onClick={()=>{
                setAdd(add+1);
            }}>+</button>
            <h2>Name:{name}</h2>
            <h2>Location:{location}</h2>
            <h2>Contact:Via GitHub</h2>
        </div>
        </>
    )
}
export default User