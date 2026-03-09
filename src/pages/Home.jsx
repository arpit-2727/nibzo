import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import SearchBar from "../Components/SearchBar/SearchBar";
import RestaurantList from "../Components/RestaurantList/RestaurantList";
import Features from "../Components/Features/Features";
import Footer from "../Components/Footer/Footer";
import AISuggestion from "../Components/AISuggestion/AISuggestion";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <RestaurantList />
      <Features />
      <AISuggestion />
      <Footer />
    </>
  );
}