import React from "react";
import PropTypes from "prop-types";

//create your first component
const Home = props => {
	return (
		<div className="simpleCounter">
			<div className="numb">
				<i className="far fa-clock"></i>
			</div>
			<div className="numb6">{props.numbSix % 10}</div>
			<div className="numb5">{props.numbFive % 10}</div>
			<div className="numb4">{props.numbFour % 10}</div>
			<div className="numb3">{props.numbThree % 10}</div>
			<div className="numb2">{props.numbTwo % 10}</div>
			<div className="numb1">{props.numbOne % 10}</div>
		</div>
	);
};

export default Home;

Home.propTypes = {
	numbOne: PropTypes.number,
	numbTwo: PropTypes.number,
	numbThree: PropTypes.number,
	numbFour: PropTypes.number,
	numbFive: PropTypes.number,
	numbSix: PropTypes.number
};
