import React from "react";
import logo from "../../../public/assets/svg/logo1.png";
import { Link } from "react-router-dom";
import style from './style.module.css'
const Logo = ({className, href, ...props}) => {
	return (
		<div className={style.logo}>
		<Link to= '/' className={className? className: "logo"} {...props}>
			<img src={logo}   alt="logo" className="logo__pic"/>
			PostGramm
		</Link>
		</div>
	);
};

export default Logo;