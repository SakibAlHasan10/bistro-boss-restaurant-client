import PropTypes from 'prop-types'
const Area = ({children}) => {
    return (
        <div className="max-w-screen-xl mx-auto px-8">
            {children}
        </div>
    );
};
Area.propTypes ={
    children: PropTypes.node
}
export default Area;