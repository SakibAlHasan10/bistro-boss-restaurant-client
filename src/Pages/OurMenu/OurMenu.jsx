import { useEffect, useState } from "react";
import SectionBanner from "../../Shear/SectionBanner";
import SectionTitle from "../../Shear/SectionTitle";

import img from "../../assets/menu/banner3.jpg";
import TodayOffers from "./TodayOffers/TodayOffers";
const OurMenu = () => {
  const [allMenus, setAllMenus] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setAllMenus(data));
  }, []);

  return (
    <div>
      <SectionBanner
        title={"OUR MENU"}
        des={"Would you like to try a dish?"}
        img={img}
      ></SectionBanner>
      <div>
        <SectionTitle
          title={"TODAY'S OFFER"}
          subTitle={"---Don't miss---"}
        ></SectionTitle>

        <TodayOffers allMenus={allMenus}></TodayOffers>
      </div>
    </div>
  );
};

export default OurMenu;
