import React from 'react';
class Profile extends React.Component {
constructor(props){
super(props);
this.state = {
    userInfo :{
        name: "DUMMY NAME",
        location: "DUMMY LOCATION"
    }
}
console.log("Child-constructor "+  this.props.name)
}

async componentDidMount(){
    const data = await fetch('https://api.github.com/users/noori09')
    const json = await data.json();
    console.log(json)
    this.setState({
        userInfo:json
    })
    console.log("Child-componentdidMount "+  this.props.name)
}

componentDidUpdate(){
    console.log("component did update")
}
componentWillUnmount(){
    console.log("componentwillunmount")
}
render() {
    console.log("Child-render "+  this.props.name)
return(
    <div>
    <h1>Profile Class Component</h1>
    <img src={this.state.userInfo.avatar_url}/>
    <h2>Name: {this.state.userInfo.name}</h2>
    <h2>Location: {this.state.userInfo.location}</h2>

    </div>
)
}
}

export default Profile;
