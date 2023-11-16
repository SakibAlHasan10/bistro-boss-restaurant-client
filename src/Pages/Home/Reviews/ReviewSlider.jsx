import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PropTypes from "prop-types";
import { Parallax, Pagination, Navigation } from "swiper/modules";
const ReviewSlider = ({ reviews }) => {
  // const {name, details, reting}=review
  // console.log(review)
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
            <div className="text-center pb-10 px-20 ">
              <h2 className="mt-10 mb-5">{review.rating}</h2>
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
