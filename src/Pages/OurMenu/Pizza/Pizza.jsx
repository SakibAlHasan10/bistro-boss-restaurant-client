import Button from "../../../Shear/Button";
import MenuItems from "../../../Shear/MenuItems/MenuItems";
import SectionBanner from "../../../Shear/SectionBanner";
import Area from "../../../Shear/area";
import img from "../../../assets/menu/dessert-bg.jpeg";
import PropTypes from "prop-types";

const Pizza = ({ pizza }) => {
  return (
    <div>
      <SectionBanner
        title={"PIZZA"}
        des={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={img}
      />
      <Area>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
          {pizza?.map((item) => (
            <MenuItems key={item._id} item={item}></MenuItems>
          ))}
        </div>
        <div className="mb-14">
          <Button>ORDER YOUR FAVOURITE FOOD</Button>
        </div>
      </Area>
    </div>
  );
};
Pizza.propTypes = {
  pizza: PropTypes.array,
};
export default Pizza;
