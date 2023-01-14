import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"

function filterData(searchText, restaurants) {
    const filteredData = restaurants.filter((restaurant) => 
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()))
    return filteredData
}

export const Body = () => {
    const [searchText, setSearchText] = useState("")
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [allRestaurants, setAllRestaurants] = useState([])

    useEffect(() => {
        getRestaurants()
    }, [])

    
    async function getRestaurants() {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json()
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }
    //early return
    if(!allRestaurants) return null;
    return (allRestaurants.length ===0)? <Shimmer/>:(
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
                { filteredRestaurants.length ===0 ? <h1>No Restaurant Matches Your Filter</h1> :
                filteredRestaurants.map((restaurant) => {
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                })}
            </div>
        </>
    )
}