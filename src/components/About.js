// import { Outlet } from "react-router-dom"; //if we don't want to use Outlet,we can directly import Profile comp in this one
// import ProfileFunctionalComponent from './Profile';
import Profile from "./ProfileClass";
import { Component } from 'react';

// const About2 = ()=>{
//     return(
//         <div>
//             <h1>About Us Page</h1>
//             <p>This is the Namaste React Live Course Chapter-07 - Finding The Path</p>
//             {/* <Outlet/> */}
//             <ProfileFunctionalComponent name={'Noori'}/>
//             <Profile name={'NooriClass'}/>
//         </div>
//     )
// }

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
            {/* <ProfileFunctionalComponent name={'Noori'}/> */}
            <Profile name={'First Child'}/>
            {/* <Profile name={'Second Child'}/> */}
        </div>
        )
    }
}

export default About;

//constructor -> render ->componentdidMount

//If we have parent and 1 child so the order will be-
// Parent Constructor
// Parent-render
//Child-constructor
//child-render
//child-componentdidMount
//Parent componentdidMount

//If we have two child so the order will be-
//Render Phase starts
//Parent Constructor
//Parent Render
//First Child Constructor
//First Child Render
//Second Child Constructor
//Second Child Render
//Now DOM is updated for children
//Commit phase start
//First Child ComponentdidMount
//Second Child ComponentdidMount
//Paren- ComponentdidMount 