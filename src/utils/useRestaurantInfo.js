import { useState, useEffect } from "react";
import { GET_RESTAURANT } from "../constants";
const useRestaurant = (id)=>{
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch(GET_RESTAURANT+id)
        const json = await data.json();
        setRestaurant(json.data)
    }
    return restaurant;

}

export default useRestaurant;