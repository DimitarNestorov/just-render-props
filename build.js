module.exports = function buildJustRenderProps(nameOfProp){
	const PropTypes = require(`prop-types`);

	JustRenderProps.propTypes = {
		[nameOfProp]: PropTypes.func.isRequired
	};

	function JustRenderProps(){
		const { [nameOfProp]: renderProp } = this.props;
		return renderProp();
	}

	return JustRenderProps;
};
