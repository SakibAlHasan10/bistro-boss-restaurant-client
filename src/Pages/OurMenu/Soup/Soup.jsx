import MenuItems from "../../../Shear/MenuItems/MenuItems";
import SectionBanner from "../../../Shear/SectionBanner";
import Area from "../../../Shear/area";
import img from "../../../assets/menu/dessert-bg.jpeg";
import PropTypes from "prop-types";

const Soup = ({ soup }) => {
  return (
    <div>
      <SectionBanner
        title={"SOUPS"}
        des={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={img}
      />
      <Area>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
          {soup?.map((item) => (
            <MenuItems key={item._id} item={item}></MenuItems>
          ))}
        </div>
      </Area>
    </div>
  );
};
Soup.propTypes = {
  soup: PropTypes.array,
};
export default Soup;
