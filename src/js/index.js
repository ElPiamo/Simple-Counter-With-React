//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

import Home from "./component/home.jsx";
//render your react application
let counter = 0;
setInterval(() => {
	const one = Math.floor(counter / 1);
	const two = Math.floor(counter / 10);
	const three = Math.floor(counter / 100);
	const four = Math.floor(counter / 1000);
	const five = Math.floor(counter / 10000);
	const six = Math.floor(counter / 100000);
	counter++;
	ReactDOM.render(
		<Home
			numbOne={one}
			numbTwo={two}
			numbThree={three}
			numbFour={four}
			numbFive={five}
			numbSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
