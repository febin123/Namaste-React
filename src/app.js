import React from "react";
import ReactDOM  from "react-dom/client";
import React, { useEffect } from "react";

import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
// import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Error from "./Components/Error";
import RestMenu from "./Components/RestMenu";
// import Grocery from "./Components/Grocery";
import { lazy } from "react";
import { Suspense } from "react";
import Shimmer from "./Components/Shimmer";



const Grocery=lazy(()=>import("./Components/Grocery"));

const About=lazy(()=>import("./Components/About"));
const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}
const appRouter=createBrowserRouter([
    {
        path: "/",
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element: <Suspense fallback={<h1>About section is loading....</h1>}>  <About/></Suspense>
            },
            {
                path: "/contact",
                element:<Contact/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading....</h1>}> <Grocery/> </Suspense>
            },
            {
                path: "/rest/:resId",
                element:<RestMenu/>
            }
        ],
        errorElement:<Error/>
    },
    
    
])
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>)