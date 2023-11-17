import MenuItems from "../../../Shear/MenuItems/MenuItems";
import Area from "../../../Shear/area";
import PropTypes from "prop-types"
const TodayOffers = ({ allMenus }) => {
  return (
    <Area>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allMenus?.slice(4, 8).map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
    </Area>
  );
};
TodayOffers.propTypes={
    allMenus:PropTypes.array
}
export default TodayOffers;
