import Profile from "./ProfileClass";
import { Component } from 'react';

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent-constructor")
    }
    componentDidMount(){
        console.log("Parent-componentdidMount")
    }
    render(){
        console.log("Parent-render")
        return(
            <div>
            <h1>About Us Page</h1>
            <p>This is the Namaste React Live Course Chapter-08 - Let's Get Classy</p>
            <Profile name={'First Child'}/>
        </div>
        )
    }
}

export default About;
