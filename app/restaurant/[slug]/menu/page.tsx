import RestaurantNav from "../components/RestaurantNav";
import RestaurantMenu from "../components/RestaurantMenu";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });
  if (!restaurant) {
    throw new Error();
  }
  return restaurant.items;
};

export default async function MenuPage({
  params,
}: {
  params: { slug: string };
}) {
  const menu = await fetchRestaurantMenu(params.slug);
  // console.log({ menu });

  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNav slug={params.slug} />
        <RestaurantMenu menu={menu} />
      </div>
    </>
  );
}
