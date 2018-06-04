const PropTypes = require(`prop-types`);

JustRenderProps.propTypes = {
	children: PropTypes.func.isRequired
};

function JustRenderProps({children}){
	return children();
}

module.exports = JustRenderProps;
