import SectionBanner from "../../../Shear/SectionBanner";
import SectionTitle from "../../../Shear/SectionTitle";
import Area from "../../../Shear/area";
import img from "../../../assets/home/banner.jpg";
import MenuItems from "../../../Shear/MenuItems/MenuItems";
// import { useState } from "react";
import PropTypes from "prop-types";
// let arr = [];
const OurMenu = ({ data }) => {
  // arr = data?.slice(0, 6);
  // const [menus, setMenus] = useState(arr);
  // console.log(arr)
  return (
    <div>
      <Area>
        <div className="mt-14">
          <SectionBanner
            img={img}
            des={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
            }
            title={"Bistro Boss"}
          />
          <div className="my-10">
            <SectionTitle
              title={"FROM OUR MENU"}
              subTitle={"---Check it out---"}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-14">
              {data?.slice(0, 6).map((menu) => (
                <MenuItems key={menu._id} item={menu}></MenuItems>
              ))}
            </div>
            <div className="text-center">
              <button className=" rounded-md px-6 py-2 text-xl border-b-2 uppercase hover:text-yellow-400 hover:border-yellow-400">
                View Full Menu
              </button>
            </div>
          </div>
        </div>
      </Area>
    </div>
  );
};
OurMenu.propTypes = {
  data: PropTypes.array,
};
export default OurMenu;
