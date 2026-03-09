export default function RestaurantModal({
  selectedRestaurant,
  setSelectedRestaurant,
}) {
  if (!selectedRestaurant) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[200] flex items-center justify-center px-4">

      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative">

        <button
          onClick={() => setSelectedRestaurant(null)}
          className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full shadow"
        >
          ✕
        </button>

        <img
          src={selectedRestaurant.image}
          alt={selectedRestaurant.name}
          className="w-full h-72 object-cover"
        />

        <div className="p-6">

          <div className="flex justify-between items-start">

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedRestaurant.name}
              </h2>

              <p className="text-gray-500 mt-1">
                {selectedRestaurant.cuisine}
              </p>
            </div>

            <div className="bg-green-500 text-white px-3 py-1 rounded-xl text-sm font-semibold">
              ⭐ {selectedRestaurant.rating}
            </div>

          </div>

          <div className="flex gap-4 mt-4 text-sm text-gray-500">

            <span>⚡ {selectedRestaurant.time}</span>
            <span>₹250 for one</span>
            <span>Free Delivery</span>

          </div>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Freshly prepared dishes with premium ingredients and trusted delivery standards.
          </p>

          <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-2xl font-medium">
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
}