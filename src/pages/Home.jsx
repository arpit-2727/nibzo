import Navbar from "../Components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import RestaurantList from "../components/RestaurantList/RestaurantList";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import AISuggestion from "../components/AISuggestion/AISuggestion";
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