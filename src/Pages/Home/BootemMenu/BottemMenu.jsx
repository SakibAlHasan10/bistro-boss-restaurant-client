import SectionTitle from "../../../Shear/SectionTitle";
import Area from "../../../Shear/area";
import img from "../../../assets/home/featured.jpg";
const BottemMenu = () => {
  return (
    <div className="max-w-screen-xl mx-auto relative">
      <div>
        <img src={img} alt="" className=" object-cover w-full h-[748px]" />
      </div>
      <div className="absolute top-0 bg-[#000000be] text-white py-16 px-32 w-full h-full">
        <SectionTitle title={"FROM OUR MENU"} subTitle={"---Check it out---"} />
        <div className="flex gap-8 mt-14 items-center justify-center">
          <img src={img} alt="" className="w-[620px] h-[360px] object-cover" />
          <div>
            <p className="text-2xl font-normal mb-3">March 20, 2023</p>
            <h2 className="text-2xl font-normal mb-3">WHERE CAN I GET SOME?</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn border-b-2 border-b-white hover:text-yellow-400 hover:border-b-yellow-400">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottemMenu;
