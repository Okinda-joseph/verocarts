import React from 'react'
import { Link } from 'react-router-dom';

const title = "About verocart";

const description = "Eluaid theme number one class university in the world there are students studying always in this university for all time.";

const itemTitle = "Categories";
const quickTitle = "Quick links";
const tweetTitle = "Recents tweets";

const addressList = [

  {
		iconName: "icofont-google-map",
		text: " Kakamega town, Kenya",		
  },

  {
		iconName: "icofont-phone",
		text: " +254705066131",		
  },

  {
		iconName: "icofont-envelope",
		text: " info@verocart.com",		
  },

];

const socialList = [

	{
		iconName: "icofont-facebook",
		siteLink: "#",
		className: "facebook",	
	},

	{
		iconName: "icofont-twitter",
		siteLink: "#",
		className: "twitter",	
	},

	{
		iconName: "icofont-linkedin",
		siteLink: "#",
		className: "linkedin",	
	},

	{
		iconName: "icofont-instagram",
		siteLink: "#",
		className: "instagram",	
	},

	{
		iconName: "icofont-pinterest",
		siteLink: "#",
		className: "pinterest",	
	},
	
];

const itemList = [

	{
		text: "All products",
		link: "/shop",
	},

	{
		text: "Shop",
		link: "/shop",
	},

	{
		text: "Blog",
		link: "/blog",
	},

	{
		text: "About",
		link: "/about",
	},
	
	{
		text: "Policy",
		link: "#",
	},

	{
		text: "FAQs",
		link: "/about",
	},

];

const quickList = [

	{
		text: "Summer sessions",
		link: "#",
	},

	{
		text: "Event",
		link: "#",
	},

	{
		text: "Gallery",
		link: "#",
	},

	{
		text: "Forums",
		link: "#",
	},

	{
		text: "Privacy policy",
		link: "#",
	},

	{
		text: "Terms of use",
		link: "#",
	},

];


const tweetList = [

	{
		iconName: "icofont-twitter",
		desc: "Ecommerce @verocart greetings! Grab your items at 50% big sale offers",
	},

	{
		iconName: "icofont-twitter",
		desc: "@verocart ecommerce website greetings! Grab your items at 50% big sale offers",
	},
];


const footerBottomList = [

	{
		text: "Faculty",
		link: "#"
	},

	{
		text: "Staff",
		link: "#"
	},

	{
		text: "Students",
		link: "#"
	},

	{
		text: "Alumini",
		link: "#"
	},

];



const Footer = () => {

  return (

    <footer className='style-2'>
		<div className='footer-top dark-view padding-tb'>
			<div className='container'>
				<div className='row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center'>
					<div className='col'>
						<div className='footer-item our-address'>
							<div className='footer-inner'>
								<div className='footer-content'>
									<div className='title'>
										<h4>{ title }</h4>
									</div>
									<div className='content'>
										<p>{ description }</p>
										<ul className='lab-ul office-address'>
											{
												addressList.map((val, i) => (<li key={i}>
													<i className={ val.iconName }>{ val.text }</i>
												</li>))
											}
										</ul>
										<ul className='lab-ul social-icons'>
											{
												socialList.map((val, i) => (<li key={i}>
													<a href="#" className={ val.className }><i className={ val.iconName }>{ val.text }</i></a>
												</li>))
											}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='footer-item our-address'>
							<div className='footer-inner'>
								<div className='footer-content'>
									<div className='title'>
										<h4>{ itemTitle }</h4>
									</div>
									<div className='content'>
										<ul className='lab-ul office-address'>
											{
												itemList.map((val, i) => (<li key={i}>
													<a href="#">{ val.text }</a>
												</li>))
											}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='footer-item our-address'>
							<div className='footer-inner'>
								<div className='footer-content'>
									<div className='title'>
										<h4>{ quickTitle }</h4>
									</div>
									<div className='content'>
										<ul className='lab-ul office-address'>
											{
												quickList.map((val, i) => (<li key={i}>
													<a href="#">{ val.text }</a>
												</li>))
											}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='footer-item our-address'>
							<div className='footer-inner'>
								<div className='footer-content'>
									<div className='title'>
										<h4>{ tweetTitle }</h4>
									</div>
									<div className='content'>
										<ul className='lab-ul office-address'>
											{
												tweetList.map((val, i) => (<li key={i}>
													<i className={ val.iconName }></i>
													{ val.desc }
												</li>))
											}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* Footer botton section */}
		<div className='footer-bottom'>
			<div className='container'>
				<div className='section-wrapper'>
					<p>&copy;{ new Date().getFullYear() }<Link to="/">Vero cart</Link>Designed by <Link to="https://okinda-joseph.github.io/devnexus-portfolio/" target='_blank'>DevNexus Tec.</Link></p>
					<div className='footer-bottom-list'>
						{
							footerBottomList.map((val, i) => (
								<a href='#' key={i}>{ val.text }</a>
							))
						}
					</div>
				</div>
			</div>
		</div>
	</footer>

  )
  
}

export default Footer