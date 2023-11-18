import SectionTitle from "../../../Shear/SectionTitle";
import ShefCard from "../../../Shear/ShefCard/ShefCard";
import Area from "../../../Shear/area";
import PropTypes from "prop-types";
const ShefRecomended = ({ data }) => {
  return (
    <div className="my-10">
      <Area>
        <SectionTitle
          title={"CHEF RECOMMENDS"}
          subTitle={"---Should Try---"}
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-14">
          {data.slice(0, 3).map((menu) => (
            <ShefCard key={menu._id} item={menu}></ShefCard>
          ))}
        </div>
      </Area>
    </div>
  );
};
ShefRecomended.propTypes = {
  data: PropTypes.array,
};
export default ShefRecomended;
