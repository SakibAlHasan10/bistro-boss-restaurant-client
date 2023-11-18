import Button from "../Button";

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
            <h2 className="text-2xl font-semibold h-auto grow-0">{name}</h2>
            <p className="  h-20">{recipe}</p>
          </div>
            <Button>Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default ShefCard;
