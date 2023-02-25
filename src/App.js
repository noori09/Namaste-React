import React , {lazy, Suspense, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'; //default import
import { Body } from './components/Body';  //named import
import Footer from './components/Footer';
import Error from './components/Error';
import Contact from './components/Contact';
import Profile from './components/Profile';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';

const Instamart = lazy(()=>import("./components/Instamart"));
const About = lazy(()=>import("./components/About"));

const AppLayout = () => {
    const [user,setUser] = useState({
        name:"Noori Mehta",
        email:"noori@gmail.com"
    })
    return (
        //in provider we can override the default value
        <UserContext.Provider value={{user:user,setUser:setUser}}>
            <Header />
            <Outlet/>   
            <Footer />
        </UserContext.Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer/>}><About /></Suspense>,
                children:[
                    {
                        path:"profile",   
                        element:<Profile/>
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            },
            {
                path:"instamart",
                element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
            }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)