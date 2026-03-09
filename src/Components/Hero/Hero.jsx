export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 px-6 md:px-12 py-16 md:py-24">

      {/* Background Blur */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div className="relative z-10">

          <p className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-5">
            🚀 Smart Food Delivery Experience
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
            Cravings Delivered <span className="text-orange-500">Smarter</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
            Discover trending food, trusted restaurants, and AI-powered meal suggestions — built for modern taste and traditional satisfaction.
          </p>

          {/* Search Box */}
          <div className="mt-8 bg-white shadow-xl rounded-2xl p-3 flex items-center gap-3 max-w-xl">

            <input
              type="text"
              placeholder="Search biryani, pizza, sweets..."
              className="flex-1 px-4 py-3 outline-none text-sm"
            />

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium transition">
              Search
            </button>
          </div>

          {/* Trending */}
          <div className="mt-5 flex flex-wrap gap-3 text-sm">

            <span className="px-3 py-1 bg-white rounded-full shadow text-gray-600">
              🔥 Biryani
            </span>

            <span className="px-3 py-1 bg-white rounded-full shadow text-gray-600">
              🍕 Pizza
            </span>

            <span className="px-3 py-1 bg-white rounded-full shadow text-gray-600">
              🍛 North Indian
            </span>

            <span className="px-3 py-1 bg-white rounded-full shadow text-gray-600">
              🍰 Desserts
            </span>
          </div>

          {/* CTA */}
          <div className="mt-8 flex gap-4">

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-2xl shadow-lg transition">
              Explore Restaurants
            </button>

            <button className="border border-gray-300 px-7 py-3 rounded-2xl hover:bg-gray-100 transition">
              AI Suggestion
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative z-10">

          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="food"
            className="rounded-3xl shadow-2xl h-[520px] w-full object-cover"
          />

          {/* Floating Card 1 */}
          <div className="absolute top-6 left-6 bg-white shadow-lg rounded-2xl px-4 py-3">
            <p className="text-sm font-medium">⭐ 4.8 Rating</p>
            <p className="text-xs text-gray-500">Trusted by food lovers</p>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-6 right-6 bg-white shadow-lg rounded-2xl px-4 py-3">
            <p className="text-sm font-medium">⚡ 20 min Delivery</p>
            <p className="text-xs text-gray-500">Fastest near you</p>
          </div>

          {/* Floating Card 3 */}
          <div className="absolute bottom-32 left-4 bg-orange-500 text-white shadow-lg rounded-2xl px-4 py-3">
            <p className="text-sm font-medium">🤖 AI Suggestion</p>
            <p className="text-xs">Try Butter Chicken today</p>
          </div>

        </div>

      </div>
    </section>
  );
}