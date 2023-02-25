import { useContext, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
import {Link} from 'react-router-dom'
import { filterData } from "../utils/helper"
import useAllRestaurantsList from "../utils/useAllRestaurantsList"
import UserContext from "../utils/UserContext"

export const Body = () => {
    const [searchText, setSearchText] = useState("")
    const {filteredRestaurants,allRestaurants,setFilteredRestaurants} = useAllRestaurantsList();
    const {user, setUser} = useContext(UserContext);
   
    //early return
    if (!allRestaurants) return null;
    return (allRestaurants.length === 0) ? <Shimmer /> : (
        <>
            <div className="p-5 bg-purple-100 my-5">
                <input
                    type="text"
                    className="placeholder:text-black p-2 m-2 focus:outline-none focus:border-solid-2 focus:outline-purple-700"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}>
                </input>
                <button
                    className="p-2 m-2 text-white font-bold bg-purple-700 rounded-lg"
                    onClick={() => {
                        const data = filterData(searchText, allRestaurants)
                        setFilteredRestaurants(data);
                    }}
                >
                    Search</button>
                <input value ={user.name} onChange={(e)=>{setUser({name:e.target.value})}} ></input>
            </div>
            <div className='flex flex-wrap'>
                {filteredRestaurants.length === 0 ? <h1>No Restaurant Matches Your Filter</h1> :
                    filteredRestaurants.map((restaurant) => {
                        return (
                            <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id} className="flex">
                                <RestaurantCard {...restaurant.data} />
                            </Link>
                        )
                    })}
            </div>
        </>
    )
}