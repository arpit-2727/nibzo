import { useState } from "react";
import restaurants from "../../data/restaurants";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import RestaurantModal from "../RestaurantModal/RestaurantModal";

export default function RestaurantList() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const categories = [
    "All",
    "Biryani",
    "Pizza",
    "Cafe",
    "North Indian",
    "South Indian",
    "Fast Food",
  ];

  const filteredRestaurants =
    activeCategory === "All"
      ? restaurants
      : restaurants.filter((item) =>
          item.cuisine.toLowerCase().includes(activeCategory.toLowerCase())
        );

  return (
    <section className="px-6 md:px-10 lg:px-14 py-16 bg-gray-50">

      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>
          <p className="text-orange-500 font-medium text-sm">
            Discover Top Places
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Popular Restaurants Near You
          </h2>
        </div>

        <div className="flex gap-3 flex-wrap">

          <button className="px-4 py-2 rounded-xl bg-white shadow text-sm hover:bg-orange-50">
            Fast Delivery
          </button>

          <button className="px-4 py-2 rounded-xl bg-white shadow text-sm hover:bg-orange-50">
            Top Rated
          </button>

          <button className="px-4 py-2 rounded-xl bg-white shadow text-sm hover:bg-orange-50">
            Offers
          </button>

        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto pb-4 mb-8">

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
              activeCategory === cat
                ? "bg-orange-500 text-white shadow"
                : "bg-white text-gray-700 shadow hover:bg-orange-50"
            }`}
          >
            {cat}
          </button>
        ))}

      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            setSelectedRestaurant={setSelectedRestaurant}
          />
        ))}

      </div>

      {/* Modal */}
      <RestaurantModal
        selectedRestaurant={selectedRestaurant}
        setSelectedRestaurant={setSelectedRestaurant}
      />

    </section>
  );
}