import React from 'react';
import ReactDOM from 'react-dom/client';
import reactLogo from './Assets/Images/reactLogo.svg';
import searchIcon from './Assets/Images/searchIcon.svg';
import userIcon from './Assets/Images/userIcon.svg';

//Q1.- Create a nested header element using React.createElement(h1,h2,h3 inside a div with class "title")
// const heading = React.createElement("h1",
// {
//     id: "h1",
//     key:"1"
// },
// "Hello World1");

// const heading2 = React.createElement("h2",
// {
// id:"h2",
// key:"2"
// },
// "Hello World2");

// const heading3 = React.createElement("h3",
// {
//     id:"h3",
//     key:"3"
// },
// "Hello World3");

// const container = React.createElement("div",
// {
// class:"title",
// },
// [heading,heading2,heading3])

// const root = ReactDOM.createRoot(document.getElementById("root"));
//passing the react element inside the root.
// root.render(container);



//Q2. Create the same element using JSX
// const container = (
// <div className='container'>
//     <h1 id="h1" key="1">hello world1 using JSX</h1>
//     <h2 id="h2" key="2">hello world2 using JSX</h2>
//     <h3 id="h3" key="3">hello world3 using JSX</h3>
// </div>
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);





// Q3. Create a functional component for the same

// const Container = ()=>{
//     return(
//         <div className='container'>
//             <h1 id="h1" key="1">hello world1 from functioanl component</h1>
//             <h2 id="h2" key="2">hello world2 from functional component</h2>
//             <h3 id="h3" key="3">hello world3 from functional component</h3>
//         </div>
//     )
// }

//  const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Container/>);




// Q4. Pass attributes into the tag in JSX
// const title = (
//     <h1>Namaste React</h1>
// )
// const Container = ()=>{
//     return(
//         <div className='container'>
//            {title}
//             <h1 id="h1" key="1">hello world1 from functioanl component</h1>
//             <h2 id="h2" key="2">hello world2 from functional component</h2>
//             <h3 id="h3" key="3">hello world3 from functional component</h3>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Container/>);




// Q5. Composition of a component inside another
// const Title = () => (
//     <h1>Namaste React</h1>
// )
// const Container = ()=>{
//     return(
//         <div className='container'>
//            {/* {Title()} */}
//             {/* <Title/> */}
//             <Title></Title>
//             <h1 id="h1" key="1">hello world1 from functioanl component</h1>
//             <h2 id="h2" key="2">hello world2 from functional component</h2>
//             <h3 id="h3" key="3">hello world3 from functional component</h3>
//         </div>
//     )
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Container/>);





// Q6.Create a header component from scratch using functional components with JSX
const HeaderComponent = () => {
    return (
        <div className='header'>
            <img src={reactLogo}
                alt="logo"
                className='reactLogoStyle'
                style={{ height: '50px', width: '50px' }} />
            <form>
                <input type="text" placeholder="Search.." name="search" className='searchIconStyle' />
                <button type="submit"
                    style={{
                        height: '37px',
                        width: '35px',
                        borderRadius: '4px',
                        border: 'none'
                    }}>
                    <img src={searchIcon}
                        alt="search"
                        className='search'
                        style={{ height: '12px', width: '12px' }} />
                </button>
            </form>
            <img src={userIcon}
                alt="user"
                className='userIconStyle'
                style={{ height: '50px', width: '50px' }} />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />)