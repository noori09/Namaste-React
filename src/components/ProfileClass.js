import React from 'react';

//render method is compulsory for creating class-based components

class Profile extends React.Component {
constructor(props){
super(props);
// this.state = {
// count:0
// }
this.state = {
    userInfo :{
        name: "DUMMY NAME",
        location: "DUMMY LOCATION"
    }
}
console.log("Child-constructor "+  this.props.name)
}
// componentDidMount(){
//     //we can make api calls in componentdidMount
//     console.log("Child-componentdidMount "+  this.props.name)
// }
// async componentDidMount(){
//     const data = await fetch('https://api.github.com/users/noori09')
//     const json = await data.json();
//     console.log(json)
//     this.setState({
//         userInfo:json
//     })
//     console.log("Child-componentdidMount "+  this.props.name)
// }
 componentDidMount(){
   this.timer=setInterval(()=>{
        console.log("Namaste React OP")
    },1000)
    console.log("Child-componentdidMount ")
}

componentDidUpdate(){
    console.log("component did update")
}
componentWillUnmount(){
    clearInterval(this.timer)
    console.log("componentwillunmount")
}
render() {
    // const {count} = this.state;
    console.log("Child-render "+  this.props.name)
return(
    <div>
    <h1>Profile Class Component</h1>
    {/* <h2>Name: {this.props.name}</h2> */}
    {/* <h3>Count: {count}</h3> */}
    {/* We don't Mutate state directly means never do this.state= something */}
    {/* <button onClick={()=>this.setState({
        count:1
    })}>Button</button> */}
    <img src={this.state.userInfo.avatar_url}/>
    <h2>Name: {this.state.userInfo.name}</h2>
    <h2>Location: {this.state.userInfo.location}</h2>

    </div>
)
}
}

export default Profile;



//First of all constructor will be called then render
//componentdidMount will run after the render


//Now the order will be-
// Parent constructor
// Parent render
// Child Constructor
//Child render
//Parent componentdidMount - (because react completes the render phase first and after
// completing child render it sees there is async componentdidMount,so it will take some time to load the data
//thatswhy it will run parent's componentdidMount)
//Api call 
//json is logged
//  child componentdidMount
// child render 