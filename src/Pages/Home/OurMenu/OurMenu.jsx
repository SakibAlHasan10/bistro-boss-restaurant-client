import SectionBanner from "../../../Shear/SectionBanner";
import SectionTitle from "../../../Shear/SectionTitle";
import Area from "../../../Shear/area";
import img from "../../../assets/home/banner.jpg";

const OurMenu = () => {
  return (
    <div>
      <Area>
        <SectionTitle title={"FROM OUR MENU"} subTitle={"---Check it out---"} />
        <div className="mt-14">
          <SectionBanner
            img={img}
            des={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
            }
            title={"Bistro Boss"}
          />
        </div>
      </Area>
    </div>
  );
};

export default OurMenu;
