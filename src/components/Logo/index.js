import React from "react";
import logo from "../../../public/assets/svg/logo1.png";

const Logo = ({className, href, ...props}) => {
	return (
		<a href={href} className={className? className: "logo"} {...props}>
			<img src={logo} style={{width: '50px', marginRight : '500px'}}  alt="logo" className="logo__pic"/>
		</a>
       
	);
};

export default Logo;