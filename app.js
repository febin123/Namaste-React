import React from "react";
import ReactDOM  from "react-dom/client";


const root=ReactDOM.createRoot(document.getElementById('root'));

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img src="https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=2000" alt="logo" srcSet="" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resList=[
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "617500",
      "name": "Starbucks Coffee",
      "uuid": "43c32d31-f4f1-4eba-84e7-9f2a84bdc845",
      "city": "5",
      "area": "Atharv Pride Dixit Rd",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "4df3497f1460dfd1ecd8125222f6d362",
      "cuisines": [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 33,
      "minDeliveryTime": 33,
      "maxDeliveryTime": 33,
      "slaString": "33 MINS",
      "lastMileTravel": 4.099999904632568,
      "slugs": {
        "restaurant": "starbucks-coffee-atharv-pride-dixit-rd-vile-parle",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Tata Starbucks, 155, Dixit Rd, Satsang CHSL, Navpada, Park Road, Vile Parle, Mumbai, Maharashtra 400057",
      "locality": "Navpada",
      "parentId": 195515,
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
            "name": "distance",
            "fee": 4200,
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
        "totalFees": 4200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4200",
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
      "adTrackingID": "cid=7048665~p=16~eid=00000188-d8d2-0c1e-0369-e4e700731039~srvts=1687264824350",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "617500",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "lastMileTravel": 4.099999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.4",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "333100",
      "name": "Cafe Sifarish (Halal)",
      "uuid": "2cd3ea72-32cb-4556-9044-f405b0194904",
      "city": "5",
      "area": "Jogeshwari East",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "aogdpiz4r9jhsigpnyhi",
      "cuisines": [
        "North Indian",
        "Mughlai",
        "Chinese",
        "Biryani",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 20,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 20,
      "slaString": "20 MINS",
      "lastMileTravel": 1.2999999523162842,
      "slugs": {
        "restaurant": "cafe-sifarish-andheri-east-andheri-east",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Gala No A/10 Ground floor,rainbow industrial estate,23 central road,seepz,midc,andheri east,Mumbai 400093",
      "locality": "Andheri East",
      "parentId": 399637,
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
            "name": "distance",
            "fee": 3000,
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
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
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
      "lastMileTravelString": "1.2 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹100",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "333100",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "lastMileTravel": 1.2999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "9868",
      "name": "Pizza Hut",
      "uuid": "368c6172-b9ff-4aea-a93e-c5b58a0feada",
      "city": "5",
      "area": "Chakala",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "cuisines": [
        "Pizzas"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "slaString": "26 MINS",
      "lastMileTravel": 1.2999999523162842,
      "slugs": {
        "restaurant": "pizza-hut-tandon-mall-andheri-east",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Tandon Mall,Chakala Village, Andheri Kurla Road,Andhetri east",
      "locality": "Chakala",
      "parentId": 721,
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
            "name": "distance",
            "fee": 3000,
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
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
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
      "lastMileTravelString": "1.2 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "FREE ITEM",
        "subHeader": "",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "9868",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 1.2999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "538030",
      "name": "Louis Burger",
      "uuid": "a204f7cb-9447-439f-8314-7dd3c1f0e876",
      "city": "5",
      "area": "Andheri West",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "19d3d352cc815b9d88b22617b41fa97b",
      "cuisines": [
        "Burgers",
        "Fast Food",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 60000,
      "costForTwoString": "₹600 FOR TWO",
      "deliveryTime": 46,
      "minDeliveryTime": 46,
      "maxDeliveryTime": 46,
      "slaString": "46 MINS",
      "lastMileTravel": 6.800000190734863,
      "slugs": {
        "restaurant": "louis-burger-andheri-west-andheri-west",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "SHOP NO-007 GROUND FLOOR, EVERSHINE COSMIC CTS NO 567ETC VILL OSHI,BEHRAMBAUG,CTS NO 567,567/1 TO 144,574,574/1 TO,JOGESHWARI(W),Oshiwara, Greater Mumbai Ward-K/W, Greater Mumbai, Maharashtra - 400010",
      "locality": "Behrambaug",
      "parentId": 22485,
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
            "name": "distance",
            "fee": 5400,
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
        "totalFees": 5400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5400",
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
      "adTrackingID": "cid=7136669~p=4~eid=00000188-d8d2-0c1e-0369-e4e30073042a~srvts=1687264824350",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "6.8 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "538030",
        "deliveryTime": 46,
        "minDeliveryTime": 46,
        "maxDeliveryTime": 46,
        "lastMileTravel": 6.800000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.3",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "23703",
      "name": "McDonald's",
      "uuid": "693ce048-7aa3-4e2d-b9c1-094c7af92a63",
      "city": "5",
      "area": "Andheri East",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 21,
      "minDeliveryTime": 21,
      "maxDeliveryTime": 21,
      "slaString": "21 MINS",
      "lastMileTravel": 1.7999999523162842,
      "slugs": {
        "restaurant": "mc-donaldsd-andheri-east-andheri-east",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Sai Elegance, Village Mulgaon Mahakali Caves Road, Taluka Andheri Andheri East, 400 097",
      "locality": "Sai Elegance",
      "parentId": 630,
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
            "name": "distance",
            "fee": 3000,
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
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
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
      "lastMileTravelString": "1.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "23703",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 1.7999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "124501",
      "name": "Gulati's",
      "uuid": "5176bfc5-d188-4205-b200-da04839b300b",
      "city": "5",
      "area": "Andheri East",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "fa4ri4b80odvjpkfoxkm",
      "cuisines": [
        "Sweets",
        "Snacks"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 17,
      "minDeliveryTime": 17,
      "maxDeliveryTime": 17,
      "slaString": "17 MINS",
      "lastMileTravel": 1.7999999523162842,
      "slugs": {
        "restaurant": "gulatis-mahakali-andheri-east",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Gulati's,Shop No 3,Ambika Apartment,MAHAKALI CAVES ROAD,ANDHERI(E),MUMBAI",
      "locality": "Ambika Apartment",
      "parentId": 91345,
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
            "name": "distance",
            "fee": 3000,
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
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
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
      "lastMileTravelString": "1.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "124501",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "lastMileTravel": 1.7999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.6",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "657091",
      "name": "Subway",
      "uuid": "b2c9ba3f-2349-42c6-a7da-b7d909e35819",
      "city": "5",
      "area": "Chandivali Powai",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "689894e7bd836c229b9c16f07c42ca20",
      "cuisines": [
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 34,
      "minDeliveryTime": 34,
      "maxDeliveryTime": 34,
      "slaString": "34 MINS",
      "lastMileTravel": 4.699999809265137,
      "slugs": {
        "restaurant": "subway-lake-primrose-powai",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "UNIT NO. - 113, FIRST FLOOR, C WING, LAKE PRIMROSE COMMERCIAL COMPLEX, CHANDIVALI FARM ROAD, POWAI, MUMBAI - 400072, Greater Mumbai Ward-L, Greater Mumbai, Maharashtra-400072",
      "locality": "LAKE PRIMROSE",
      "parentId": 2,
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
            "name": "distance",
            "fee": 4200,
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
        "totalFees": 4200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4200",
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
      "adTrackingID": "cid=7147369~p=7~eid=00000188-d8d2-0c1e-0369-e4e40073071f~srvts=1687264824350",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.6 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "657091",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 4.699999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.7",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "5933",
      "name": "Burger King",
      "uuid": "3130e39a-2b97-4006-bf89-5abe28d5d63a",
      "city": "5",
      "area": "Andheri East",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "tags": [
        
      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 25,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 25,
      "slaString": "25 MINS",
      "lastMileTravel": 2,
      "slugs": {
        "restaurant": "burger-king-andheri-east",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Next to Times Square Building, Marol, Mumbai",
      "locality": "Western House, Sakinaka",
      "parentId": 166,
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
            "name": "distance",
            "fee": 3000,
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
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
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
      "aggregatedDiscountInfoV3": {
        "header": "EVERY ITEM",
        "subHeader": "@ ₹129",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "5933",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
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
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "682579",
      "name": " Yummy Tales",
      "uuid": "dbf0180d-7ba4-4b32-9e30-c7fe5e3870ca",
      "city": "5",
      "area": "Vile Parle",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "f02aa6a847d110ae4606ffa3a5623044",
      "cuisines": [
        "Burgers",
        "Snacks",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 38,
      "minDeliveryTime": 38,
      "maxDeliveryTime": 38,
      "slaString": "38 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "yummy-tales-vile-parle-vile-parle",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "4V33+CH3, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400047, India",
      "locality": "Navpada",
      "parentId": 228767,
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
            "name": "distance",
            "fee": 3600,
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
        "totalFees": 3600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3600",
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
      "adTrackingID": "cid=7118993~p=10~eid=00000188-d8d2-0c1e-0369-e4e500730a16~srvts=1687264824350",
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
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹599",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "682579",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "2118",
      "name": "Oye Kiddan",
      "uuid": "abd2d8e2-3d54-4ce4-b416-6c91dd4f9bf3",
      "city": "5",
      "area": "Andheri East",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "564cc6cfeaec66b24178447a9a1a2afd",
      "cuisines": [
        "Street Food"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 24,
      "minDeliveryTime": 24,
      "maxDeliveryTime": 24,
      "slaString": "24 MINS",
      "lastMileTravel": 0.30000001192092896,
      "slugs": {
        "restaurant": "oye-kidden-andheri-east",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Oye Kiddan, Shop No.03, Rehab Bldg, BLDG-1, Ganesh Wadi, MIDC CENTRAL ROAD,ANDHERI EAST, Mumbai: 400093",
      "locality": "Ramkrishna Mandir Marg",
      "parentId": 690,
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
            "name": "distance",
            "fee": 3000,
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
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
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
      "lastMileTravelString": "0.3 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹100",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "2118",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 0.30000001192092896,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "454644",
      "name": "La Pino'z Pizza",
      "uuid": "87cfd1e3-05b6-417e-95bc-cbe2a640cf2e",
      "city": "5",
      "area": "Andheri East",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "mnu3gqwlwuia7ruejapd",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 23,
      "minDeliveryTime": 23,
      "maxDeliveryTime": 23,
      "slaString": "23 MINS",
      "lastMileTravel": 1.5,
      "slugs": {
        "restaurant": "la-pino'z-pizza-andheri-east-andheri-east",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "SHOP NO.17 AND 18,PINNACAL BUSINESS PARK ,MAHAKAKI RD ,ANDHERI EAST MUMBAI, Greater Mumbai, Maharashtra-400093",
      "locality": "Mahakaki Rd",
      "parentId": 4961,
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
            "name": "distance",
            "fee": 3000,
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
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
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
      "lastMileTravelString": "1.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "454644",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "lastMileTravel": 1.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "694734",
      "name": "Haagen-Dazs",
      "uuid": "07a60adc-0dbf-4e36-840e-25f67a351118",
      "city": "5",
      "area": "Juhu",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "afac910f0f40a8f80be588b268cb5a1c",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 28,
      "minDeliveryTime": 28,
      "maxDeliveryTime": 28,
      "slaString": "28 MINS",
      "lastMileTravel": 4.400000095367432,
      "slugs": {
        "restaurant": "haagen-dazs-juhu-juhu",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "A3 MUTREJA NIWAS 4TH FLOOR IST MAIN RD JVPD SCHEME JUHU VILE PARLE MUMBAI , Vile Parle (w) , Greater Mumbai Ward-K/W, Greater Mumbai, Maharashtra-400049",
      "locality": "Main Rd JVPD Scheme",
      "parentId": 441,
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
            "name": "distance",
            "fee": 4200,
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
        "totalFees": 4200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4200",
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
      "adTrackingID": "cid=7081322~p=13~eid=00000188-d8d2-0c1e-0369-e4e600730d6c~srvts=1687264824350",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.4 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "694734",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 4.400000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.3",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "355577",
      "name": "Wow! Momo",
      "uuid": "9c5839d1-c698-4516-8d06-9b4704184254",
      "city": "5",
      "area": "Andheri East",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "90ac3da2963978f866177263fba805a7",
      "cuisines": [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 19,
      "minDeliveryTime": 19,
      "maxDeliveryTime": 19,
      "slaString": "19 MINS",
      "lastMileTravel": 0.699999988079071,
      "slugs": {
        "restaurant": "wow-momo-jb-nagar-metro-station-andheri-east",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Shop no.2, Bhrat Plaza, Andheri Kurla Road, Land Mark Near JB Nagar Metro Station, Opp Sahar Plaza, Andheri East 400059",
      "locality": "JB Nagar Metro Station",
      "parentId": 1776,
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
            "name": "distance",
            "fee": 3000,
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
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
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
      "lastMileTravelString": "0.6 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "355577",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "lastMileTravel": 0.699999988079071,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "250087",
      "name": "The Combo Company",
      "uuid": "98529205-28b3-4377-bb81-9665554c1c77",
      "city": "5",
      "area": "Andheri East",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "tb5myreaf8rk5vegwgsh",
      "cuisines": [
        "Indian",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 21,
      "minDeliveryTime": 21,
      "maxDeliveryTime": 21,
      "slaString": "21 MINS",
      "lastMileTravel": 1.2999999523162842,
      "slugs": {
        "restaurant": "the-combo-company-andheri-east-andheri-east",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Gala No A/10 Ground floor,rainbow industrial estate,23 central road,seepz,midc,andheri east,mumbai",
      "locality": "Rainbow Industrial Estate",
      "parentId": 9782,
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
            "name": "distance",
            "fee": 3000,
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
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
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
      "lastMileTravelString": "1.2 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹599",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "250087",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 1.2999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "63529",
      "name": "Faasos - Wraps & Rolls",
      "uuid": "9bb2c2a6-f21c-4fac-b1cc-ab8a4a39ea9b",
      "city": "5",
      "area": "Andheri East",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "85c20ed30425350ac5ee96f10d5d1329",
      "cuisines": [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "North Indian",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 19,
      "minDeliveryTime": 19,
      "maxDeliveryTime": 19,
      "slaString": "19 MINS",
      "lastMileTravel": 0.30000001192092896,
      "slugs": {
        "restaurant": "faasos-ground-floor-nand-deep-industrial-estate-kondivita-lane-marol-sakinaka",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Gala No 9, Ground Floor, Nand Deep Industrial Estate, Kondivita Lane, Andheri (E), Mumbai 400059",
      "locality": "Ground Floor, Nand Deep Industrial Estate, Kondivita Lane",
      "parentId": 21809,
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
            "name": "distance",
            "fee": 3000,
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
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
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
      "lastMileTravelString": "0.3 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "15% OFF",
        "subHeader": "ABOVE ₹1000",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "63529",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "lastMileTravel": 0.30000001192092896,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  }
]
  


const RestaurantCard=(props)=>{
    //destructing the component
    const {resData}=props;
    const {name,costForTwoString,avgRating,cuisines,cloudinaryImageId}=resData?.data
    return(
        <div className="res-card">
            <img className="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt="" srcSet="" />
            <h3>{name}</h3>
            <h4>{costForTwoString}</h4>
            <h4>{avgRating}</h4>
            <h4>{cuisines.join(",")}</h4>
        </div>
    )
}
const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">

            {/* {
                resList.map((restaurant)=>
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                )
            } */}

            {
              resList.map((restaurant)=>
              <RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
            }
             {/* <RestaurantCard resData={resList[0]}/>
             <RestaurantCard resData={resList[1]}/>
             <RestaurantCard resData={resList[2]}/>
             <RestaurantCard resData={resList[3]}/>
             <RestaurantCard resData={resList[4]}/>
             <RestaurantCard resData={resList[5]}/> */}
            </div>
        </div>
    )
}
const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

root.render(<AppLayout/>)