import React from 'react';
import { Link } from 'react-router-dom';
const subTitle = "Choose any products";
const title = "Buy everything with us";
const btnText = "Get started now";

const categoryList = [

    {   
        imgUrl: "/src/assets/images/category/01.jpg",
        imgAlt: "category rajibraj91 rajibraj",
        iconName: "iconfont-brand-windows",
        title: "DSLR Camera",
    },

    {   
        imgUrl: "/src/assets/images/category/02.jpg",
        imgAlt: "category rajibraj91 rajibraj",
        iconName: "iconfont-brand-windows",
        title: "Shoes",
    },

    {   
        imgUrl: "/src/assets/images/category/03.jpg",
        imgAlt: "category rajibraj91 rajibraj",
        iconName: "iconfont-brand-windows",
        title: "Photography",
    },

    {   
        imgUrl: "/src/assets/images/category/04.jpg",
        imgAlt: "category rajibraj91 rajibraj",
        iconName: "iconfont-brand-windows",
        title: "Formal Dress",
    },

    {   
        imgUrl: "/src/assets/images/category/05.jpg",
        imgAlt: "category rajibraj91 rajibraj",
        iconName: "iconfont-brand-windows",
        title: "Colorful Bags",
    },
    {   
        imgUrl: "/src/assets/images/category/06.jpg",
        imgAlt: "category rajibraj91 rajibraj",
        iconName: "iconfont-brand-windows",
        title: "Home Decor",
    },
 ];

const HomeCategory = () => {

  return (

    <div className='category-section style-4 padding-tb'>
        <div className='container'>
            {/* section header here */}
            <div className='section-header text-center'>
                <span className='subtitle'>{ subTitle }</span>
                <h2 className='title'>{ title }</h2>
            </div>
            {/* section card starts */}
            <div className='section-wrapper'>
                <div className='row g-4 jusify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
                    {
                        categoryList.map((val, i) => (<div key={i} className='col'>
                            <Link to="/shop" className='category-item'>
                                <div className='category-inner'>
                                    {/* Image thumbnails */}
                                    <div className='category-thumb'>
                                        <img src={ val.imgUrl } alt="" />
                                    </div>
                                    {/* Category contents */}
                                    <div className='category-content'>
                                        <div className='cate-icon'>
                                            <i className={ val.iconName }></i>
                                        </div>
                                        <Link to="/shop"><h6>{ val.title }</h6></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>))
                    }
                </div>
                {/* Section card btn */}
                <div className='text-center mt-5'>
                    <Link to="/shop" className='lab-btn'><span>{ btnText}</span></Link>
                </div>
            </div>
        </div>
    </div>

  )
}

export default HomeCategory