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
            <div className="card-actions grow-0 h-auto justify-center">
              <button className="btn border-b-2 border-b-white hover:text-yellow-400 hover:border-b-yellow-400">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShefCard;
