export default function SearchBar() {
  return (
    <div className="flex justify-center mt-6">

      <input
        placeholder="Search Biryani, Pizza..."
        className="border px-4 py-3 w-96 rounded-l-xl"
      />

      <button className="bg-orange-500 text-white px-6 rounded-r-xl">
        Search
      </button>

    </div>
  );
}