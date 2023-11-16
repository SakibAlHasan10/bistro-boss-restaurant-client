const SectionBanner = ({ title, des, img }) => {
  return (
    <div className="relative h-[550px] bg-white ">
      <img src={img} alt="" className="h-full w-full" />
      <div className="absolute p-20 top-1/4 left-52 w-8/12 text-center bg-white ">
        <h2 className="text-5xl font-normal">{title}</h2>
        <p className="text-base font-normal mt-5">{des}</p>
      </div>
    </div>
  );
};

export default SectionBanner;
