import MenuItems from "../../../Shear/MenuItems/MenuItems";
import Area from "../../../Shear/area";
import PropTypes from "prop-types";
const TodayOffers = ({ offered }) => {
  //   const arr = offered.slice(4, 8);
  //   const [menus, setMenus] = useState(arr);
  return (
    <Area>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
        {offered?.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="text-center my-14">
        <button className="  rounded-md px-6 py-2 text-xl border-b-2 uppercase hover:text-yellow-400 hover:border-yellow-400">
          View Full Menu
        </button>
      </div>
    </Area>
  );
};
TodayOffers.propTypes = {
  offered: PropTypes.array,
};
export default TodayOffers;
