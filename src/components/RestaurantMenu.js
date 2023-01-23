import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
    //reading dynamic url params
    const params = useParams();
    const { id } = params
    //we can also write the above line  it like const {id} = useParams()

    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch('https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId='+id)
        const json = await data.json();
        setRestaurant(json.data)
    }

    return !restaurant ? (
        <Shimmer />
      ) :(
        <div className="menu">
            <div>
            <h1>Restaurant Id : {id}</h1>
            <h2>{restaurant?.name}</h2>
            <img src ={IMG_CDN_URL + restaurant?.cloudinaryImageId}/>
            <h2>{restaurant?.city}</h2>
            <h2>{restaurant?.areaName}</h2>
            <h2>{restaurant?.avgRating}</h2>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>{Object.values(restaurant?.menu?.items)?.map((item)=>
                <li key={item?.card?.id}>{item?.name}</li>)}</ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;