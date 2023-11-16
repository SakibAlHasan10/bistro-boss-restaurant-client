import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PropTypes from "prop-types";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useState } from "react";

const Star = (
  <path d="M62 25.154H39.082L32 3l-7.082 22.154H2l18.541 13.693L13.459 61L32 47.309L50.541 61l-7.082-22.152L62 25.154z" />
);

const myStyles = {
  itemShapes: Star,
  boxBorderWidth: 3,

  activeFillColor: ["#FEE2E2", "#FFEDD5", "#FEF9C3", "#ECFCCB", "#D1FAE5"],
  activeBoxColor: ["#da1600", "#db711a", "#dcb000", "#61bb00", "#009664"],
  activeBoxBorderColor: ["#c41400", "#d05e00", "#cca300", "#498d00", "#00724c"],

  inactiveFillColor: "white",
  inactiveBoxColor: "#dddddd",
  inactiveBoxBorderColor: "#a8a8a8",
};

const ReviewSlider = ({ reviews }) => {
  // const {name, details, reting}=review
  // console.log(review)
  const [rating, setRating] = useState(0);
  return (
    <div className="max-w-screen-lg mx-auto">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* <div
          slot="container-start"
          className="parallax-bg"
          
          data-swiper-parallax="-23%"
        ></div> */}
        {/* <SwiperSlide> */}
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="text-center py-10 px-20 ">
                <div className="mx-auto w-1/3 mb-12">

              <Rating
                style={{ maxWidth: 500 }}
                value={rating||review.rating}
                
                onChange={setRating}
                itemStyles={myStyles}
                radius="large"
                spaceInside="large"
              /> 
                </div>
              {/* <h2  className="mt-10 mb-5">{review.rating}</h2> */}
              <p className="text-xl font-normal ">{review.details}</p>
              <p className="text-3xl font-medium mt-3 text-[#CD9003]">
                {review.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
        {/* </SwiperSlide> */}
      </Swiper>
    </div>
  );
};
ReviewSlider.propTypes = {
  reviews: PropTypes.array,
};
export default ReviewSlider;
