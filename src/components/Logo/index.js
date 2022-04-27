import React from "react";
import logo from "../../../public/assets/svg/logo1.png";
import { Link } from "react-router-dom";
const Logo = ({className, href, ...props}) => {
	return (
		<Link to= '/' className={className? className: "logo"} {...props}>
			<img src={logo} style={{width: '70px', marginRight : '500px'}}  alt="logo" className="logo__pic"/>
			PostGramm
		</Link>
       
	);
};

export default Logo;