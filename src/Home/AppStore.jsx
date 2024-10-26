import React from 'react'
import { Link } from 'react-router-dom';
const btnText = "Sign up for free";
const title = "Shop anytime ,from anywhere in the world";
const description = "Take courses on any of your device with our app and learn all about business what you want. Just download and install and start to learn";

const AppStore = () => {

  return (

    <div className='app-section padding-tb'>
        <div className='container'>
            <div className='section-header text-center'>
                <Link to="/signup" className='lab-btn mb-4'>{ btnText }</Link>
                <h2 className='title text-capitalize'>{ title }</h2>
                <p>{ description }</p>
            </div>
            <div className='section-wrapper'>
                <ul className='lab-ul'>
                    <li><a href="#"><img loading='lazy' src="/src/assets/images/app/01.jpg" alt="app store" /></a></li>
                    <li><a href="#"><img loading='lazy' src="/src/assets/images/app/02.jpg" alt="google play" /></a></li>
                </ul>
            </div>
        </div>
    </div>

  )

}

export default AppStore