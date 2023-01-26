import { useState, useEffect } from "react";
const Profile = (props)=>{
    const[count,setCount] = useState(0);
    useEffect(()=>{
        //Great place to do API call because it runs after every render
        // console.log("useEffect")
    })
    // console.log("render fn")
    return (
        <div>
            <h2>Profile Component</h2>
            <h3>Name: {props.name}</h3>
            <h3>Count: {count}</h3>
            <button onClick={()=>setCount(1)}> Button</button>
        </div>
    )
}

export default Profile;


//First render and then useEffect