import { useEffect, useState } from "react";
import SectionBanner from "../../Shear/SectionBanner";
import SectionTitle from "../../Shear/SectionTitle";

import img from "../../assets/menu/banner3.jpg";
import TodayOffers from "./TodayOffers/TodayOffers";
import Dessert from "./Dessert/Dessert";
import Pizza from "./Pizza/Pizza";
import Salad from "./Salad/Salad";
import Soup from "./Soup/Soup";
const OurMenu = () => {
  const [allMenus, setAllMenus] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setAllMenus(data));
  }, []);
  const dessert = allMenus.filter(menu=>menu.category==="dessert")
  const pizza = allMenus.filter(menu=>menu.category==="pizza")
  const salad = allMenus.filter(menu=>menu.category==="salad")
  const soup = allMenus.filter(menu=>menu.category==="soup")
  const offered = allMenus.filter(menu=>menu.category==="offered")
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
