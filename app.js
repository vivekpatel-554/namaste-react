import React from "react";
import ReactDOM from "react-dom/client";

const top_brand_list = [
  {
    id: 1,
    name: "McDonald's",
    rating: "4.2",
    cuisines: "Fast Food, Burgers",
    image: {
      url: "https:\/\/b.zmtcdn.com\/data\/brand_creatives\/logos\/5c1c97764d187c1e4dc1dbdea54c7318_1726684109.png",
    },
    color: "#FFFFFF",
    deliveryTime: "29 min",
  },
  {
    id: 2,
    name: "Taco Bell",
    rating: "4.1",
    cuisines: "Mexican, Fast Food",
    image: {
      url: "https:\/\/b.zmtcdn.com\/data\/brand_creatives\/logos\/a52d138901fe2009cc770e5b85d7a3d2_1750249465.png",
    },
    color: "#5f2f92",
    deliveryTime: "25 min",
  },
  {
    id: 3,
    name: "La Pino'z Pizza",
    rating: "4.0",
    cuisines: "Pizza, Fast Food",
    image: {
      url: "https:\/\/b.zmtcdn.com\/merchant\/diy\/pictures\/0\/19736220\/263853ec3850049b8d0e1724d68a0b85.png",
    },
    color: "#CB202D",
    deliveryTime: "25 min",
  },
  {
    id: 4,
    name: "Tea Post",
    rating: "4.3",
    cuisines: "Beverages, Snacks",
    image: {
      url: "https:\/\/b.zmtcdn.com\/data\/brand_creatives\/logos\/7e6e58e46541df5989d5a24601e781f91755279283.png",
    },
    color: "#cb202d",
    deliveryTime: "29 min",
  },
  {
    id: 5,
    name: "Burger King",
    rating: "4.0",
    cuisines: "Burgers, Fast Food",
    image: {
      url: "https:\/\/b.zmtcdn.com\/data\/brand_creatives\/logos\/a6927d83d9185b7788814049b4a9fc8c_1726603161.png",
    },
    color: "#ffffff",
    deliveryTime: "30 min",
  },
  {
    id: 6,
    name: "Burger Farm",
    rating: "4.2",
    cuisines: "Burgers, Fast Food",
    image: {
      url: "https:\/\/b.zmtcdn.com\/data\/brand_creatives\/logos\/253a5dadd33a7da53f7584f2c51459781757598285.png",
    },
    color: "#cb202d",
    deliveryTime: "30 min",
  },
  {
    id: 7,
    name: "Gwalia Sweets",
    rating: "4.5",
    cuisines: "Sweets, Desserts",
    image: {
      url: "https:\/\/b.zmtcdn.com\/data\/brand_creatives\/logos\/03599494c6aa23782f85b9dc127548d8_1605092896.png",
    },
    color: "#FFFFFF",
    deliveryTime: "23 min",
  },
  {
    id: 8,
    name: "Theobroma",
    rating: "4.4",
    cuisines: "Bakery, Desserts",
    image: {
      url: "https:\/\/b.zmtcdn.com\/data\/brand_creatives\/logos\/a7e0eec68d4878a1140e71066bd52573_1758716627.png",
    },
    color: "#f9bfbf",
    deliveryTime: "28 min",
  },
  {
    id: 9,
    name: "Jay Bhavani Vadapav",
    rating: "4.0",
    cuisines: "Street Food, Snacks",
    image: {
      url: "https:\/\/b.zmtcdn.com\/data\/brand_creatives\/logos\/246cce69e468341e27e835f5bb3a535b_1568093471.png",
    },
    color: "#ffffff",
    deliveryTime: "25 min",
  },
  {
    id: 10,
    name: "KFC",
    rating: "4.3",
    cuisines: "Fast Food, Chicken",
    image: {
      url: "https:\/\/b.zmtcdn.com\/data\/brand_creatives\/logos\/f1dc700c8be881b9a17be904971a0644_1726678669.png",
    },
    color: "#ffffff",
    deliveryTime: "30 min",
  },
];
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search Bar
 *  - Restaurant List
 *    - Restaurant Card
 *      - Image
 *      - Name
 *      - Rating
 *      - Cusines
 * Footer
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.shopify.com/s/files/1/0368/3005/2491/files/logo_cicled_2_11e7230b-f66d-49ea-af69-d093767f844d.png?v=1648674884"
        />
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
  );
};
const styleCard = { width: "100px" };

const RestaurantCard = (resData) => {
  let { name, rating, cuisines, deliveryTime, image, color } = resData.data;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        alt="restaurant-logo"
        src={image.url}
        style={{ backgroundColor: color }}
      />
      <h2>{name}</h2>
      <h3>{rating} stars</h3>
      <h3>{cuisines}</h3>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-containers">
        {top_brand_list.map((res) => (
          <RestaurantCard key={res.id} data={res} />
        ))}
        {/* <RestaurantCard
          name="Meghna Foods"
          rating="4.5"
          cuisines="Biryani, North Indian, Mughlai"
        />
        <RestaurantCard
          name="Biryani Delight"
          rating="4.3"
          cuisines="Biryani, South Indian"
        />
        <RestaurantCard
          name="KFC"
          rating="4.8"
          cuisines="Fast Food, American"
        />
        <RestaurantCard name="Pramukh thaal" rating="5.0" cuisines="Gujarati" />
        <RestaurantCard
          name="Himalaya baati"
          rating="4.1"
          cuisines="Rajasthani"
        /> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
