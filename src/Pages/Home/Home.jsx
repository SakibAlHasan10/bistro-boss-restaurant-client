// import { useState } from "react";
import Banner from "./Banner/Banner";
import ContactNumber from "./ContactNumber/ContactNumber";
import OnlineOrder from "./OnlneOrders.jsx/OnlineOrder";
import OurMenu from "./OurMenu/OurMenu";
import ShefRecomended from "./ShefRecomended/ShefRecomended";
import BottemMenu from "./BootemMenu/BottemMenu";
import Reviews from "./Reviews/Reviews";
import useMenus from "../../Hooks/MenusHook/useMenus";

const Home = () => {
  const [data] = useMenus();
  // const [allMenus, setAllMenus] = useState(data);
  // const [menus, setMenus] = useState(allMenus?.slice(0,6))
  // console.log(allMenus, data)
  return (
    <div>
      <Banner />
      <OnlineOrder />
      <OurMenu data={data} />
      <ContactNumber />
      <ShefRecomended data={data} />
      <BottemMenu />
      <Reviews />
    </div>
  );
};

export default Home;
