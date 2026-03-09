import { useState } from "react";
import { useCart } from "../../Context/CartContext";

export default function RestaurantCard({ restaurant, setSelectedRestaurant }) {
  const [liked, setLiked] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      onClick={() => setSelectedRestaurant(restaurant)}
      className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
    >

      <div className="relative overflow-hidden">

        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          20% OFF
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow"
        >
          {liked ? "❤️" : "🤍"}
        </button>

        <div className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-medium shadow">
          ⚡ {restaurant.time}
        </div>
      </div>

      <div className="p-5">

        <div className="flex justify-between items-start">

          <div>
            <h3 className="font-bold text-lg text-gray-900">
              {restaurant.name}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {restaurant.cuisine}
            </p>
          </div>

          <div className="bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
            ⭐ {restaurant.rating}
          </div>
        </div>

        <div className="mt-4 flex justify-between text-sm text-gray-500">
          <span>₹200 for one</span>
          <span>Free Delivery</span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(restaurant);
          }}
          className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-2xl font-medium transition"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}