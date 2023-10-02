import RestaurantNav from "../components/RestaurantNav";
import RestaurantMenu from "../components/RestaurantMenu";

function MenuPage() {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNav />
        <RestaurantMenu />
      </div>
    </>
  );
}
export default MenuPage;
