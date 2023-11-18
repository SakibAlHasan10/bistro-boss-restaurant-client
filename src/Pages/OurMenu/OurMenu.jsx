import SectionBanner from "../../Shear/SectionBanner";
import SectionTitle from "../../Shear/SectionTitle";

import img from "../../assets/menu/banner3.jpg";
import TodayOffers from "./TodayOffers/TodayOffers";
import Dessert from "./Dessert/Dessert";
import Pizza from "./Pizza/Pizza";
import Salad from "./Salad/Salad";
import Soup from "./Soup/Soup";
import useMenus from "../../Hooks/MenusHook/useMenus";
const OurMenu = () => {
  const [data] = useMenus();
  const dessert = data?.filter((menu) => menu.category === "dessert");
  const pizza = data?.filter((menu) => menu.category === "pizza");
  const salad = data?.filter((menu) => menu.category === "salad");
  const soup = data?.filter((menu) => menu.category === "soup");
  const offered = data?.filter((menu) => menu.category === "offered");
  //   console.log(offers)
  return (
    <div>
      <SectionBanner
        title={"OUR MENU"}
        des={"Would you like to try a dish?"}
        img={img}
      ></SectionBanner>
      <div className="mt-20">
        <SectionTitle
          title={"TODAY'S OFFER"}
          subTitle={"---Don't miss---"}
        ></SectionTitle>

        <TodayOffers offered={offered}></TodayOffers>
      </div>
      <div>
        <Dessert dessert={dessert}></Dessert>
      </div>
      <div>
        <Pizza pizza={pizza}></Pizza>
      </div>
      <div>
        <Salad salad={salad}></Salad>
      </div>
      <div>
        <Soup soup={soup}></Soup>
      </div>
    </div>
  );
};

export default OurMenu;
