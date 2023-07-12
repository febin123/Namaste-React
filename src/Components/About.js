import User from "./User";
import UserClass from './UserClass';
const About=()=>{
    return(
        <>
        <h1>This is a About Section</h1>
        {/* <User name={"febin(functional compoenent)"} location={"Ireland functional"}/> */}
        <UserClass name={"First"} location={"Ireland class"}/>
        <UserClass name={"Second"} location={"Ireland class"}/>
        {/* <UserClass name={"Second"} location={"Ireland class"}/> */}
        </>
    )
}
export default About;