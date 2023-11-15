import carousel1 from "../../assets/home/01.jpg";
import carousel2 from "../../assets/home/02.jpg";
import carousel3 from "../../assets/home/03.png";
import carousel4 from "../../assets/home/04.jpg";
import carousel5 from "../../assets/home/05.png";
import carousel6 from "../../assets/home/06.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-[80vh] object-cover">
      <Carousel>
        <div>
          <img src={carousel1} />
        </div>
        <div>
          <img src={carousel2} />
        </div>
        <div>
          <img src={carousel3} />
        </div>
        <div>
          <img src={carousel4} />
        </div>
        <div>
          <img src={carousel5} />
        </div>
        <div>
          <img src={carousel6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;