export default function Features() {
  const features = [
    {
      id: 1,
      icon: "✨",
      title: "AI Food Suggestions",
      desc: "Get smart meal recommendations based on cravings, weather and your mood.",
    },
    {
      id: 2,
      icon: "⚡",
      title: "Fastest Delivery",
      desc: "Optimized delivery routing ensures your food arrives fresh and quick.",
    },
    {
      id: 3,
      icon: "🛡️",
      title: "Trusted Restaurants",
      desc: "Only verified restaurants with strong ratings and hygiene checks.",
    },
    {
      id: 4,
      icon: "🔥",
      title: "Live Offers",
      desc: "Dynamic deals updated in real time for maximum savings.",
    },
  ];

  return (
    <section className="px-6 md:px-10 lg:px-14 py-20 bg-white">

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-14">

        <p className="text-orange-500 font-medium text-sm">
          Why Nibzo
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
          Smart Features Built For Modern Food Lovers
        </h2>

        <p className="text-gray-500 mt-4 leading-relaxed">
          Nibzo combines technology, trust and speed to create a food delivery
          experience beyond traditional apps.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((item) => (
          <div
            key={item.id}
            className="group bg-gray-50 hover:bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}