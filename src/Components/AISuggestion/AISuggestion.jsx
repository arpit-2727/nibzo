import { useState } from "react";

export default function AISuggestion() {
  const suggestions = [
    "Butter Chicken with Garlic Naan 🍗",
    "Paneer Tikka Combo 🧀",
    "Hyderabadi Biryani 🍛",
    "Cheesy Farm Pizza 🍕",
    "Masala Dosa + Filter Coffee ☕",
    "Cold Coffee with Brownie 🍰",
  ];

  const [suggestion, setSuggestion] = useState(
    "Tell us your mood, we'll suggest your meal."
  );

  const generateSuggestion = () => {
    const random =
      suggestions[Math.floor(Math.random() * suggestions.length)];

    setSuggestion(random);
  };

  return (
    <section className="px-6 md:px-10 lg:px-14 py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">

        {/* Heading */}
        <div className="text-center">

          <p className="text-orange-500 font-medium text-sm">
            AI Powered
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
            What Should You Eat Today?
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Let Nibzo AI understand your craving and suggest the perfect meal instantly.
          </p>
        </div>

        {/* Suggestion Box */}
        <div className="mt-10 bg-gray-50 rounded-2xl p-6 text-center">

          <p className="text-lg md:text-xl font-medium text-gray-800">
            {suggestion}
          </p>

        </div>

        {/* Input + Button */}
        <div className="mt-8 flex flex-col md:flex-row gap-4">

          <input
            placeholder="Example: spicy mood, light dinner, sweet craving..."
            className="flex-1 px-5 py-4 rounded-2xl border outline-none text-sm"
          />

          <button
            onClick={generateSuggestion}
            className="bg-gradient-to-r from-violet-600 to-purple-500 text-white px-8 py-4 rounded-2xl font-medium shadow-lg hover:scale-105 transition"
          >
            ✨ Suggest Meal
          </button>

        </div>

        {/* Quick moods */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">

          {["Spicy", "Healthy", "Comfort Food", "Dessert", "Late Night"].map(
            (item) => (
              <button
                key={item}
                onClick={generateSuggestion}
                className="px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium hover:bg-orange-500 hover:text-white transition"
              >
                {item}
              </button>
            )
          )}

        </div>
      </div>
    </section>
  );
}