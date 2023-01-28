import { useState } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
import {Link} from 'react-router-dom'
import { filterData } from "../utils/helper"
import useAllRestaurantsList from "../utils/useAllRestaurantsList"
import useOnline from "../utils/useOnline"

export const Body = () => {
    const [searchText, setSearchText] = useState("")
    const {filteredRestaurants,allRestaurants} = useAllRestaurantsList();
   
    //early return
    if (!allRestaurants) return null;
    return (allRestaurants.length === 0) ? <Shimmer /> : (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}>
                </input>
                <button
                    className="search-btn"
                    onClick={() => {
                        //need to filter data
                        const data = filterData(searchText, allRestaurants)
                        setFilteredRestaurants(data);
                    }}
                >
                    Search</button>
            </div>
            <div className='restaurant-list'>
                {filteredRestaurants.length === 0 ? <h1>No Restaurant Matches Your Filter</h1> :
                    filteredRestaurants.map((restaurant) => {
                        return (
                            <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id} className="body-link-style">
                                <RestaurantCard {...restaurant.data} />
                            </Link>
                        )
                    })}
            </div>
        </>
    )
}