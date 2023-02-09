import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurantInfo";
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
    const params = useParams();
    const { id } = params
    
    const restaurant = useRestaurant(id)

    return !restaurant ? (
        <Shimmer />
      ) :(
        <div className='flex'>
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