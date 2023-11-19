import Button from "../Button";
import PropTypes from "prop-types";
const ShefCard = ({ item }) => {
  const { image, name, recipe } = item;
  // console.log(item)
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="menu" />
        </figure>
        <div className="card-body ">
          <div className="flex flex-col text-center">
            <h2 className="text-2xl font-semibold mb-3 h-auto grow-0">{name}</h2>
            <p className="  h-20">{recipe}</p>
          </div>
          <div className="my-6">
            <Button>add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
ShefCard.propTypes = {
  item: PropTypes.object,
};
export default ShefCard;
