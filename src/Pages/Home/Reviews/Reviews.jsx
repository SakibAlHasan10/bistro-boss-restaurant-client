import { useEffect, useState } from "react";
import SectionTitle from "../../../Shear/SectionTitle";
import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // console.log(reviews)
  return (
    <div>
      <SectionTitle
        title={"TESTIMONIALS"}
        subTitle={"---What Our Clients Say---"}
      ></SectionTitle>
      <div>
        <ReviewSlider reviews={reviews} />
      </div>
    </div>
  );
};

export default Reviews;
