import React from 'react';
import ReactDOM from 'react-dom/client';


const Title = () => (
    <a href='/'>
        <img src='https://b.zmtcdn.com/data/pictures/chains/9/18933609/9fc9eb3e9765cb039a9d13596290d400.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
            alt="logo"
            className='logo' />
    </a>
)

const Header = () => {
    return (
        <div className='header'>
            <Title />
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// Case 1- using hardcoded data
// const RestaurantCard = () => {
//     return (
//         <div className='card'>
//             <img
//                 src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/keyaneymfh2vgtp2uzq5"
//                 alt="Burger King" />
//             <h2>Burger King</h2>
//             <h3>Burgers, Americans</h3>
//             <h4>4.2 Stars</h4>
//         </div>
//     )
// }




//  Case 2 - For single restaurant
// const burgerKing = {
// name:'Burger King',
// image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/keyaneymfh2vgtp2uzq5',
// cuisines : ['Burgers','Americans'],
// rating:'4.2'
// }

// const RestaurantCard = () => {
//     return (
//         <div className='card'>
//             <img src= {burgerKing.image} alt="Burger King" />
//             <h2>{burgerKing.name}</h2>
//             <h3>{burgerKing.cuisines.join(" , ")}</h3>
//             <h4>{burgerKing.rating} stars</h4>
//         </div>
//     )
// }

// const Body = () => {
//     return (
//        <div>
//         <RestaurantCard/>
//        </div>
//     )
// }




// Case 3 - If we have multiple restaurant cards, all will be burger king and we don't need this. 
// const burgerKing = {
//     name:'Burger King',
//     image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/keyaneymfh2vgtp2uzq5',
//     cuisines : ['Burgers','Americans'],
//     rating:'4.2'
//     }


//     const RestaurantCard = () => {
//         return (
//             <div className='card'>
//                 <img src= {burgerKing.image} alt="Burger King" />
//                 <h2>{burgerKing.name}</h2>
//                 <h3>{burgerKing.cuisines.join(" , ")}</h3>
//                 <h4>{burgerKing.rating} stars</h4>
//             </div>
//         )
//     }

//     const Body = () => {
//         return (
//            <div className='restaurant-list'>
//             <RestaurantCard/>
//             <RestaurantCard/>
//             <RestaurantCard/>
//             <RestaurantCard/>
//             <RestaurantCard/>
//             <RestaurantCard/>
//            </div>
//         )
//     }


const restaurantList = [
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "168043",
          "name": "Burger Singh (Big Punjabi Burgers)",
          "uuid": "ea186a36-57a8-4314-a33f-d7c0d8c3b760",
          "city": "4",
          "area": "Sector-10, Rohini",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "fyuyd6jokqveketdmzpn",
          "cuisines": [
            "American",
            "Fast Food",
            "Snacks"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 33,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 40,
          "slaString": "30-40 MINS",
          "lastMileTravel": 2,
          "slugs": {
            "restaurant": "burger-singh-rohini",
            "city": "delhi"
          },
          "cityState": "4",
          "address": "Shop No-11, Ground Floor, D Mall, Twin District Centre, Sector-10,Rohini, Rohini, North West , Delhi-110085",
          "locality": "Sector-10",
          "parentId": 375065,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "60% off",
            "shortDescriptionList": [
              {
                "meta": "60% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "60% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 3900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "2 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "168043",
            "deliveryTime": 33,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 40,
            "lastMileTravel": 2,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.1",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "240497",
            "name": "Pandit Ji Ke Paranthe",
            "uuid": "e4a09101-93ee-4030-b7dc-310963a082f2",
            "city": "4",
            "area": "Budh Vihar Phase 1",
            "totalRatingsString": "50+ ratings",
            "cloudinaryImageId": "mdhiha2wnryfemt2d4ji",
            "cuisines": [
                "Indian"
            ],
            "tags": [

            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "slaString": "33 MINS",
            "lastMileTravel": 1.899999976158142,
            "slugs": {
                "restaurant": "pandit-ji-ke-paranthe-begampur-begampur",
                "city": "delhi"
            },
            "cityState": "4",
            "address": "Q44 Third floor Budh Vihar Phase 1 Rohini,Near Mohalla clinic, New Delhi 110086 ",
            "locality": "Near Mohalla Clinic",
            "parentId": 154470,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "distance",
                        "fee": 3900,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3900",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "1.8 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "240497",
                "deliveryTime": 33,
                "minDeliveryTime": 33,
                "maxDeliveryTime": 33,
                "lastMileTravel": 1.899999976158142,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.8",
            "totalRatings": 50,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "10325",
            "name": "Pizzallo Hot",
            "uuid": "0373cfc2-3d76-41c5-8fd3-2b846099d61e",
            "city": "4",
            "area": "Sector 3, Rohini",
            "totalRatingsString": "20+ ratings",
            "cloudinaryImageId": "q4cumlrajxgrsrod3asn",
            "cuisines": [
                "Pizzas",
                "Italian"
            ],
            "tags": [

            ],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "slaString": "28 MINS",
            "lastMileTravel": 0.5,
            "slugs": {
                "restaurant": "m-pizzallo-hot-sector-3-near-gopal-chole-bhature-rohini",
                "city": "delhi"
            },
            "cityState": "4",
            "address": "F 22/1, Rohini Sector 3, Near Gopal Chole Bhature",
            "locality": "rohini, sector 3",
            "parentId": 159117,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "aggregatedDiscountInfo": {
                "header": "50% off",
                "shortDescriptionList": [
                    {
                        "meta": "50% off | Use LNBINGE",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off up to ₹100 | Use code LNBINGE",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "50% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use LNBINGE",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off up to ₹100 | Use code LNBINGE",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "distance",
                        "fee": 3900,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3900",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "0.5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "10325",
                "deliveryTime": 28,
                "minDeliveryTime": 28,
                "maxDeliveryTime": 28,
                "lastMileTravel": 0.5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.0",
            "totalRatings": 20,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "504341",
            "name": "Sardar Ji Late Night Kitchen (Paschim Vihar)",
            "uuid": "ec1fe4c8-b421-4098-909d-b997ff949840",
            "city": "4",
            "area": "Paschim Vihar",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "xax24mb5ktl439uewghm",
            "cuisines": [
                "North Indian",
                "Punjabi",
                "Chinese",
                "Biryani",
                "Beverages",
                "Tandoor",
                "Indian"
            ],
            "tags": [

            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 41,
            "minDeliveryTime": 40,
            "maxDeliveryTime": 50,
            "slaString": "40-50 MINS",
            "lastMileTravel": 5.699999809265137,
            "slugs": {
                "restaurant": "sardar-ji-late-night-kitchen-paschim-vihar-paschim-vihar",
                "city": "delhi"
            },
            "cityState": "4",
            "address": "Shop- 13, Block A, DDA complex, Paschim Vihar  110063",
            "locality": "Dda Complex",
            "parentId": 13225,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "distance",
                        "fee": 5700,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 5700,
                "message": "",
                "title": "Delivery Charge",
                "amount": "5700",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5652432~p=7~eid=00000185-8dfa-83b4-13e2-a1210019074a",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "5.6 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "504341",
                "deliveryTime": 41,
                "minDeliveryTime": 40,
                "maxDeliveryTime": 50,
                "lastMileTravel": 5.699999809265137,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.8",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "400823",
            "name": "Pao Ji Aamchi Mumbai Se",
            "uuid": "6253e3de-93d5-4575-9753-0656e966b199",
            "city": "4",
            "area": "Rohini",
            "totalRatingsString": "20+ ratings",
            "cloudinaryImageId": "twycspvu6ojwe17ew8ob",
            "cuisines": [
                "Indian",
                "Snacks",
                "Street Food"
            ],
            "tags": [

            ],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 32,
            "minDeliveryTime": 32,
            "maxDeliveryTime": 32,
            "slaString": "32 MINS",
            "lastMileTravel": 0.8999999761581421,
            "slugs": {
                "restaurant": "pao-ji-rohini-rohini",
                "city": "delhi"
            },
            "cityState": "4",
            "address": "70/1/1 1st floor, street no 15, village mangolpur kalan, near Hanuman  mandir, Rohini sector 2, Delhi-110085",
            "locality": "Rohini",
            "parentId": 252360,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "distance",
                        "fee": 3900,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3900",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "0.8 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "400823",
                "deliveryTime": 32,
                "minDeliveryTime": 32,
                "maxDeliveryTime": 32,
                "lastMileTravel": 0.8999999761581421,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "2.8",
            "totalRatings": 20,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "445821",
            "name": "Mr. Paratha",
            "uuid": "16f5c6ea-f5df-46fd-ad24-471abdb42d49",
            "city": "4",
            "area": "Rohini",
            "totalRatingsString": "20+ ratings",
            "cloudinaryImageId": "wspmbgpic6y902vuaai6",
            "cuisines": [
                "Punjabi",
                "North Indian",
                "Indian"
            ],
            "tags": [

            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 36,
            "minDeliveryTime": 36,
            "maxDeliveryTime": 36,
            "slaString": "36 MINS",
            "lastMileTravel": 0.8999999761581421,
            "slugs": {
                "restaurant": "mr-paratha-rohini-rohini",
                "city": "delhi"
            },
            "cityState": "4",
            "address": "70/1/1 1st floor, street no 15, village mangolpur kalan, near Hanuman  mandir, Rohini sector 2, Delhi-110085",
            "locality": "Rohini",
            "parentId": 140339,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "distance",
                        "fee": 3900,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3900",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "0.8 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "445821",
                "deliveryTime": 36,
                "minDeliveryTime": 36,
                "maxDeliveryTime": 36,
                "lastMileTravel": 0.8999999761581421,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.4",
            "totalRatings": 20,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "372208",
          "name": "MoonMoon - Juicy Crustwiches",
          "uuid": "342d28c9-32a5-4a8b-92fe-39ab266e4f9c",
          "city": "4",
          "area": "Rohini",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "m4a8hjpyku23kaqxrm4k",
          "cuisines": [
            "American",
            "Snacks",
            "Beverages"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 39,
          "minDeliveryTime": 35,
          "maxDeliveryTime": 45,
          "slaString": "35-45 MINS",
          "lastMileTravel": 3,
          "slugs": {
            "restaurant": "moonmoon---juicy-crustwiches-rohini-rohini",
            "city": "delhi"
          },
          "cityState": "4",
          "address": "CSC 5, Shop No. 23, DDA Market, Sector 8, Rohini, New Delhi",
          "locality": "Sector 8 Rohini",
          "parentId": 21959,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "20% off",
            "shortDescriptionList": [
              {
                "meta": "20% off | Use PARTY",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off | Use code PARTY",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "20% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use PARTY",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off | Use code PARTY",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 4600,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 4600,
            "message": "",
            "title": "Delivery Charge",
            "amount": "4600",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5700497~p=10~eid=00000185-8e3a-5c23-13f0-6a6a00930a41",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "372208",
            "deliveryTime": 39,
            "minDeliveryTime": 35,
            "maxDeliveryTime": 45,
            "lastMileTravel": 3,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.9",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
]

// Case 4 - In real world we will be having restaurant list as array of objects.
//  But its showing the same data in every card. so, go to fifth case

// const RestaurantCard = () => {
//     return (
//         <div className='card'>
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restaurantList[0].data?.cloudinaryImageId} alt="Burger King" />
//             {/* if data is not available we can write like below syntax "?""
//                 this is known as optional chaining */}
//             <h2>{restaurantList[0].data?.name}</h2>
//             <h3>{restaurantList[0].data?.cuisines.join(" , ")}</h3>
//             <h4>{restaurantList[0].data?.totalRatingsString}</h4>
//         </div>
//     )
// }

// const Body = () => {
//     return (
//         <div className='restaurant-list'>
//             <RestaurantCard />
//             <RestaurantCard />
//             <RestaurantCard />
//             <RestaurantCard />
//             <RestaurantCard />
//             <RestaurantCard />
//         </div>
//     )
// }


// Case 5- Passing restaurant as a prop to RestaurantCard

// const RestaurantCard = (props) => {
//     return (
//         <div className='card'>
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+props.restaurant.data?.cloudinaryImageId} alt="Burger King" />
//             {/* if data is not available we can write like below syntax "?""
//                 this is known as optional chaining */}
//             <h2>{props.restaurant.data?.name}</h2>
//             <h3>{props.restaurant.data?.cuisines.join(" , ")}</h3>
//             <h4>{props.restaurant.data?.totalRatingsString}</h4>
//         </div>
//     )
// }

// const Body = () => {
//     return (
//         <div className='restaurant-list'>
//             <RestaurantCard restaurant ={restaurantList[0]}  />
//             <RestaurantCard restaurant ={restaurantList[1]} />
//             <RestaurantCard restaurant ={restaurantList[2]}/>
//             <RestaurantCard restaurant ={restaurantList[3]}/>
//             <RestaurantCard restaurant ={restaurantList[4]}/>
//             <RestaurantCard restaurant ={restaurantList[5]}/>
//             <RestaurantCard restaurant ={restaurantList[6]}/>
//         </div>
//     )
// }


//Case 6 - Using destructuring in Restaurant Card
// const RestaurantCard = ({restaurant}) => {
//     return (
//         <div className='card'>
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restaurant.data?.cloudinaryImageId} alt="Burger King" />
//             {/* if data is not available we can write like below syntax "?""
//                 this is known as optional chaining */}
//             <h2>{restaurant.data?.name}</h2>
//             <h3>{restaurant.data?.cuisines.join(" , ")}</h3>
//             <h4>{restaurant.data?.totalRatingsString}</h4>
//         </div>
//     )
// }

// const Body = () => {
//     return (
//         <div className='restaurant-list'>
//             <RestaurantCard restaurant ={restaurantList[0]}  />
//             <RestaurantCard restaurant ={restaurantList[1]} />
//             <RestaurantCard restaurant ={restaurantList[2]}/>
//             <RestaurantCard restaurant ={restaurantList[3]}/>
//             <RestaurantCard restaurant ={restaurantList[4]}/>
//             <RestaurantCard restaurant ={restaurantList[5]}/>
//             <RestaurantCard restaurant ={restaurantList[6]}/>
//         </div>
//     )
// }

// Case 7 - Destructuring can be done in this way as well
// const RestaurantCard = ({restaurant}) => {
//     const {name,cloudinaryImageId,cuisines,totalRatingsString} = restaurant.data
//     return (
//         <div className='card'>
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt="Burger King" />
//             {/* if data is not available we can write like below syntax "?""
//                 this is known as optional chaining */}
//             <h2>{name}</h2>
//             <h3>{cuisines.join(" , ")}</h3>
//             <h4>{totalRatingsString}</h4>
//         </div>
//     )
// }

// const Body = () => {
//     return (
//         <div className='restaurant-list'>
//             <RestaurantCard restaurant ={restaurantList[0]}  />
//             <RestaurantCard restaurant ={restaurantList[1]} />
//             <RestaurantCard restaurant ={restaurantList[2]}/>
//             <RestaurantCard restaurant ={restaurantList[3]}/>
//             <RestaurantCard restaurant ={restaurantList[4]}/>
//             <RestaurantCard restaurant ={restaurantList[5]}/>
//             <RestaurantCard restaurant ={restaurantList[6]}/>
//         </div>
//     )
// }


// Case-8 Destructring can be done in one more way-
// const RestaurantCard = ({ name, cloudinaryImageId, cuisines, totalRatingsString }) => {
//     return (
//         <div className='card'>
//             {/* <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt="Burger King" /> */}
//             <h2>{name}</h2>
//             <h3>{cuisines.join(" , ")}</h3>
//             {/* <h4>{totalRatingsString}</h4> */}
//         </div>
//     )
// }

// const Body = () => {
//     return (
//         <div className='restaurant-list'>
//             <RestaurantCard name={restaurantList[0].data.name}
//                 cuisines={restaurantList[0].data.cuisines} />
//             <RestaurantCard name={restaurantList[1].data.name}
//                 cuisines={restaurantList[1].data.cuisines} />
//             <RestaurantCard name={restaurantList[2].data.name}
//                 cuisines={restaurantList[2].data.cuisines} />
//             <RestaurantCard name={restaurantList[3].data.name}
//                 cuisines={restaurantList[3].data.cuisines} />
//             <RestaurantCard name={restaurantList[4].data.name}
//                 cuisines={restaurantList[4].data.cuisines} />
//             <RestaurantCard name={restaurantList[5].data.name}
//                 cuisines={restaurantList[5].data.cuisines} />
//             <RestaurantCard name={restaurantList[6].data.name}
//                 cuisines={restaurantList[6].data.cuisines} />
//         </div>
//     )
// }

//Case 9 - we can use spread operators also
// const RestaurantCard = ({ name, cloudinaryImageId, cuisines, totalRatingsString }) => {
//     return (
//         <div className='card'>
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt="Burger King" />
//             <h2>{name}</h2>
//             <h3>{cuisines.join(" , ")}</h3>
//             <h4>{totalRatingsString}</h4>
//         </div>
//     )
// }

// const Body = () => {
//     return (
//         <div className='restaurant-list'>
//             <RestaurantCard {...restaurantList[0].data}/>
//             <RestaurantCard {...restaurantList[1].data}/>
//             <RestaurantCard {...restaurantList[2].data}/>
//             <RestaurantCard {...restaurantList[3].data}/>
//             <RestaurantCard {...restaurantList[4].data}/>
//             <RestaurantCard {...restaurantList[5].data}/>
//             <RestaurantCard {...restaurantList[6].data}/>
//         </div>
//     )
// }



//Case 10- Using Map function to make it more dynamic
const RestaurantCard = ({ name, cloudinaryImageId, cuisines, totalRatingsString }) => {
    return (
        <div className='card'>
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="Burger King" />
            <h2>{name}</h2>
            <h3>{cuisines.join(" , ")}</h3>
            <h4>{totalRatingsString}</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className='restaurant-list'>
            {restaurantList.map((restaurant) => {
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            })}
        </div>
    )
}


const Footer = () => {
    return (
        <h4>footer</h4>
    )
}

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)