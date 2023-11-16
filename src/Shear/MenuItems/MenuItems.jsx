const MenuItems = ({ item }) => {
  const { image, name, price, recipe } = item;
//   console.log(item);
  return (
    <div className="flex items-start justify-between">
      <img src={image} alt="" className="w-28 h-24 rounded-bl-full rounded-e-full mr-5 "   />
      <div>
        <h2 className=" text-xl font-normal mb-2">{name} ---------------</h2>
        <p className="mt-1">{recipe}</p>
      </div>
      <p className="text-[#BB8506] text-xl font-normal">${price}</p>
    </div>
  );
};

export default MenuItems;
