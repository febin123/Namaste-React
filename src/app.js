import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";

const root=ReactDOM.createRoot(document.getElementById('root'));


const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

root.render(<AppLayout/>)