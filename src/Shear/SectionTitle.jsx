import PropTypes from "prop-types"
const SectionTitle = ({title, subTitle}) => {
    return (
        <div className="w-2/3 mx-auto text-center px-20">
            <p className="text-[#D99904] text-xl font-normal my-4">{subTitle}</p>
            <hr />
            <h2 className="my-5 font-normal text-4xl">{title}</h2>
            <hr />
        </div>
    );
};
SectionTitle.propTypes ={
    title: PropTypes.string,
    subTitle: PropTypes.string,
}
export default SectionTitle;