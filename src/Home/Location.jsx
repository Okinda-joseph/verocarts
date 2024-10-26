import React from 'react'
import { Link } from 'react-router-dom';
const title = (
    <h2 className='text-capitalize'>More than 40,000 active customers!</h2>
);
const description = "Buy products on your any device with our app and enjoy your time with what you want. Just download and install to shopping with verocart";

const clientsList = [

    {
        imgUrl: "/src/assets/images/clients/avater.jpg",
        imgAlt: "Education thumb rajibraj91 rajibraj",
        text: "Join with us",
    },

    {
        imgUrl: "/src/assets/images/clients/avater.jpg",
        imgAlt: "Education thumb rajibraj91 rajibraj",
        text: "Join with us",
    },

    {
        imgUrl: "/src/assets/images/clients/avater.jpg",
        imgAlt: "Education thumb rajibraj91 rajibraj",
        text: "Join with us",
    },

    {
        imgUrl: "/src/assets/images/clients/avater.jpg",
        imgAlt: "Education thumb rajibraj91 rajibraj",
        text: "Join with us",
    },

    {
        imgUrl: "/src/assets/images/clients/avater.jpg",
        imgAlt: "Education thumb rajibraj91 rajibraj",
        text: "Join with us",
    },

    {
        imgUrl: "/src/assets/images/clients/avater.jpg",
        imgAlt: "Education thumb rajibraj91 rajibraj",
        text: "Join with us",
    },

    {
        imgUrl: "/src/assets/images/clients/avater.jpg",
        imgAlt: "Education thumb rajibraj91 rajibraj",
        text: "Join with us",
    },
]

const Location = () => {

  return (

    <div className='clients-section style-2 padding-tb'>
        <div className='container'>
            <div className='section-header text-center'>
                { title }
                <p>{ description }</p>
            </div>
            {/* Main content */}
            <div className='section-wrapper'>
                <div className='clients'>
                    {
                        clientsList.map((val, i) => (<div key={i} className='client-list'>
                            <Link to="/signup" className='client-content'>
                                <span>{ val.text }</span>
                            </Link>
                            <div className='client-thumb'>
                                <img src={ val.imgUrl } alt="" />
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </div>
    </div>

  )

}

export default Location

