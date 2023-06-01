import React from "react";
import  ReactDOM  from "react-dom/client";

const heading=React.createElement("h1",{},"HEllooo")
const root=ReactDOM.createRoot(document.getElementById("root"));


//JSX
const heading1=(<h1>HEllooo</h1>)


//React functional components
const HeadingComponent=()=>{
    return(
        <>
        <>
        <h1>This is a Functional compoenent</h1>
        <h1>sldkjfdsklfjsdlkfjs</h1>
        </>
        </>
    )
}

console.log(heading)
console.log(heading1)
root.render(<HeadingComponent/>);