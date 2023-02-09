import { IMG_CDN_URL } from '../constants';

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, totalRatingsString }) => {
    return (
        <div className='w-60 p-5 m-5 shadow-lg bg-purple-100'>
            <img className='w-full' src={ IMG_CDN_URL+ cloudinaryImageId} alt="Burger King" />
            <h2 className='font-bold text-xl'>{name}</h2>
            <h3>{cuisines.join(" , ")}</h3>
            <h4>{totalRatingsString}</h4>
        </div>
    )
}

export default RestaurantCard;
