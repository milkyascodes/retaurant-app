import Navbar from "../components/Navbar";
import Header from "./components/Header";
import SideBarSearch from "./components/SideBarSearch";
import RestaurantCard from "./components/RestaurantCard";

function SearchPage() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <SideBarSearch />
          <div className="w-5/6">
            <RestaurantCard />
          </div>
        </div>
      </main>
    </main>
  );
}
export default SearchPage;
