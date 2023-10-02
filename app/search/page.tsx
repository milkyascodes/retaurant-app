import Header from "./components/Header";
import SideBarSearch from "./components/SideBarSearch";
import RestaurantCard from "./components/RestaurantCard";

function SearchPage() {
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SideBarSearch />
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </>
  );
}
export default SearchPage;
