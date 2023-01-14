import { restaurantList } from "./constants"
import { useState } from "react"
import RestaurantCard from "./RestaurantCard"

function filterData(searchText,restaurants){
const filteredData= restaurants.filter((restaurant)=> restaurant.data.name.includes(searchText))
console.log(filteredData)
return filteredData
}

export const Body = () => {
    const [searchText, setSearchText] = useState("")
    const [restaurants, setRestaurants] = useState(restaurantList)
    return (
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
                       const data= filterData(searchText,restaurants)
                       setRestaurants(data);
                    }}
                >
                    Search</button>
            </div>
            <div className='restaurant-list'>
                {restaurants.map((restaurant) => {
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                })}
            </div>
        </>
    )
}