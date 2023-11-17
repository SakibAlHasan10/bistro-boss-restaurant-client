import Button from "../../../Shear/Button";
import MenuItems from "../../../Shear/MenuItems/MenuItems";
import SectionBanner from "../../../Shear/SectionBanner";
import Area from "../../../Shear/area";
import img from "../../../assets/menu/dessert-bg.jpeg";
import PropTypes from "prop-types";

const Salad = ({ salad }) => {
  return (
    <div>
      <SectionBanner
        title={"SALADS"}
        des={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={img}
      />
      <Area>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
          {salad?.map((item) => (
            <MenuItems key={item._id} item={item}></MenuItems>
          ))}
        </div>
        <div>
          <Button>ORDER YOUR FAVOURITE FOOD</Button>
        </div>
      </Area>
    </div>
  );
};
Salad.propTypes = {
  salad: PropTypes.array,
};
export default Salad;
