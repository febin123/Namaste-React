import React from "react"

class UserClass extends React.Component {

    constructor (props){
        super(props);
        this.state={
            userInfo:{
                name:"Febin",
                location:"Ireland",
                avatar_url:"dummy.png",
            }
        }
        console.log(this.props.name+"Constructer called")
    }
    async componentDidMount(){
        console.log(this.props.name+"Compoenend Did Mount called")
        const data=await fetch("https://api.github.com/users/febin123")
        const json=await data.json()

        this.setState({userInfo:json})
        console.log(json)
    }
    render(){
        console.log(this.props.name+"Render called")
        const {name,location,avatar_url} = this.state.userInfo;
        const{count}=this.state;

        return(
        <>
        <div className="user-card">
            <img src={avatar_url} alt="" srcset="" />
            <h1>{count}</h1>
            <button onClick={()=>{
                this.setState({count:count+1})
            }}>+</button>
            <h2>Name:{name}</h2>
            <h2>Location:{location}</h2>
            <h2>Contact:Via GitHub</h2>
        </div>
        </>
        )
    }
}
export default UserClass