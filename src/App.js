import React , {lazy, Suspense} from 'react';
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

//Chunking
//Code Splitting
//Dynamic Imports
//lazy loading
//On demand load
//Dynamic Bundling

const Instamart = lazy(()=>import("./components/Instamart"));
const About = lazy(()=>import("./components/About"));
//Upon on demand loading ->upon render->react will suspend the loading

const AppLayout = () => {
    return (
        <>
            <Header />
            {/* This is needed if we are doing nested routing. Whatever children we have in
            config, all will go into outlet acc to route */}
            <Outlet/>   
            <Footer />
        </>
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
                        path:"profile",    //when we put slash react-router-dom will consider it as localhost:1234/profile, so we will not provide slash here it will take parent's path and add profile to it.
                        element:<Profile/>  //we need to create a outlet in its parent comp i.e. inside about
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