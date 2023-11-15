import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Shear/SectionTitle";
const OnlineOrder = () => {
  return (
    <div className="my-20">
      <div className="mb-14">
        <SectionTitle
          title={"ORDER ONLINE"}
          subTitle={"---From 11:00am to 10:00pm---"}
        ></SectionTitle>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={16}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img src={img1} alt="" className="w-full" />
            <p className="text-4xl uppercase font-normal text-center -mt-20 mb-10  text-white">
              Salads
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img2} alt="" className="w-full" />
            <p className="text-4xl uppercase font-normal text-center -mt-20 mb-10 text-white">
              Soups
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img3} alt="" className="w-full" />
            <p className="text-4xl uppercase font-normal text-center -mt-20 mb-10 text-white">
              pizzas
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img4} alt="" className="w-full" />
            <p className="text-4xl bg-black uppercase font-normal text-center -mt-20 mb-10 text-white">
              desserts
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img5} alt="" className="w-full" />
            <p className="text-4xl uppercase font-normal text-center -mt-20 mb-10 text-white">
              Drinks
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OnlineOrder;
