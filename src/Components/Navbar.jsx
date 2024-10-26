import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png';

const Navbar = () => {

	const [menuToggle, setMenuToggle] = useState(false);
	const [socialToggle, setSocialToggle] = useState(false);
	const [headerFixed, setHeaderFixed] = useState(false);

	// AddEventListerner scroll

	window.addEventListener('scroll', () => {

		if(window.scrollY > 200){

			setHeaderFixed(true);

		}
		else {
			setHeaderFixed(false);
		}
	})

  return (
// header starts
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
		{/* Header top area */}
		<div className='header-top-wrapper'>
			<div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
				<div className='container'>
					<div className='header-top-area'>
						<Link to="/signup" className='lab-btn me-3'><span>Sign up</span></Link>
						<Link to="/login"><span>Log in</span></Link>
					</div>
				</div>
			</div>
		</div>
		{/* Header bottom area */}
		<div className='header-bottom'>
			<div className='container'>
				<div className='header-wrapper'>
					<div className='logo-search-acte'>
						<div className='logo'>
							<img src={ logo } alt="verocart logo" />
						</div>
					</div>
					{/* Header bottom start */}
					<div className='menu-area'>
						<div className='menu'>
							<ul className={`lab-ul ${ menuToggle ? "active" : "" }`}>
								<li><Link to="/">Home</Link></li>
								<li><Link to="/shop">Shop</Link></li>
								<li><Link to="/blog">Blog</Link></li>
								<li><Link to="/about">About</Link></li>
								<li><Link to="/contact">Contact</Link></li>
							</ul>
						</div>

						{/* sign up and log in links */}

						<Link to="/signup" className='lab-btn me-3 d-none d-md-block'>Sign up</Link>
						<Link to="/login" className='d-none d-md-block'>Log in</Link>

						{/* Menu toggle  */}

						<div onClick={()=> setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${ menuToggle ? "active" : "" }`}>
							<span></span>
							<span></span>
							<span></span>
						</div>

						{/* Social toggle */}

						<div onClick={()=> setSocialToggle(!socialToggle)} className='ellepsis-bar d-md-none'>
							<i className="iconfont-info-square"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>

  )
}

export default Navbar