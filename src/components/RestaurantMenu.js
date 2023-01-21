import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";

const RestaurantMenu = () => {
    //reading dynamic url params
    const params = useParams();
    const { id } = params
    //we can also write the above line  it like const {id} = useParams()

    const [restaurant, setRestaurant] = useState({});
    const[menu,setMenu] = useState([])

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=193210&submitAction=ENTER")
        const json = await data.json();
        setRestaurant(json.data.cards[0].card.card)
        setMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)  
    }

    return (
        <div className="menu">
            <div>
            <h1>Restaurant Id : {id}</h1>
            <h2>{restaurant?.info?.name}</h2>
            <img src ={IMG_CDN_URL + restaurant?.info?.cloudinaryImageId}/>
            <h2>{restaurant?.info?.city}</h2>
            <h2>{restaurant?.info?.areaName}</h2>
            <h2>{restaurant?.info?.avgRating}</h2>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>{menu?.map((item)=><li key={item?.card?.info?.id}>{item.card?.info?.name}</li>)}</ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;