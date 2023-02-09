import {useState,useEffect} from 'react';
import { GET_RESTAURANTS_LIST } from '../constants';

const useAllRestaurantsList = ()=>{
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [allRestaurants, setAllRestaurants] = useState([])

    useEffect(() => {
        getRestaurants()
    }, [])


    async function getRestaurants() {
        const data = await fetch(GET_RESTAURANTS_LIST)
        const json = await data.json()
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    return{
        filteredRestaurants,allRestaurants,setFilteredRestaurants
    }
}

export default useAllRestaurantsList