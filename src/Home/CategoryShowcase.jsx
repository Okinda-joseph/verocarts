import React, { useState } from 'react'
import Rating from '../Components/Rating';
import { Link } from 'react-router-dom';
const title = "Our products";

const productData = [

    {
        imagUrl: "/src/assets/images/categoryTab/01.jpg",
        cate: "Shoes",
        title: "Nike Premier X",
        author: "assets/images/course/author/01.jpg",
        brand: "Nike",
        price: "$199.00",
        id: 1,
    },

    {
        imagUrl: "/src/assets/images/categoryTab/02.jpg",
        cate: "Bags",
        title: "Asthetic Bags",
        author: "assets/images/course/author/02.jpg",
        brand: "D&J Bags",
        price: "$199.00",
        id: 2,
    },

    {
        imagUrl: "/src/assets/images/categoryTab/03.jpg",
        cate: "Phones",
        title: "iphone 12",
        author: "/src/assets/images/categoryTab/brand/apple.png",
        brand: "Apple",
        price: "$199.00",
        id: 3,
    },

    {
        imagUrl: "/src/assets/images/categoryTab/04.jpg",
        cate: "Bags",
        title: "Hiking Bag 15 Nh100",
        author: "assets/images/course/author/04.jpg",
        brand: "Gucci",
        price: "$199.00",
        id: 4,
    },

    {
        imagUrl: "/src/assets/images/categoryTab/05.jpg",
        cate: "Shoes",
        title: "Outdoor Sports Shoes",
        author: "assets/images/course/author/05.jpg",
        brand: "Nike",
        price: "$199.00",
        id: 5,
    },

    {
        imagUrl: "/src/assets/images/categoryTab/06.jpg",
        cate: "Beauty",
        title: "COSRK snail Mucin",
        author: "assets/images/course/author/06.jpg",
        brand: "Zaara",
        price: "$199.00",
        id: 6,
    },

    {
        imagUrl: "/src/assets/images/categoryTab/07.jpg",
        cate: "Bags",
        title: "Look less chanel Bag",
        author: "assets/images/course/author/01.jpg",
        brand: "Gucci",
        price: "$199.00",
        id: 7,
    },

    {
        imagUrl: "/src/assets/images/categoryTab/08.jpg",
        cate: "Shoes",
        title: "Casual Sneakers",
        author: "assets/images/course/author/02.jpg",
        brand: "Bata",
        price: "$199.00",
        id: 8,
    },

];

const CategoryShowcase = () => {

    const [items, setItems] = useState(productData);

    // Category baded filtering

    const filterItem = (categoryItem) =>{

        const updateItems = productData.filter((currentElem) => {

            return currentElem.cate === categoryItem;

        });
        setItems(updateItems);
    }

  return (

    <div className='course-section style-3 padding-tb'>
        {/* Shapes */}
        <div className='course-shape one'>
            <img src="/src/assets/images/shape-img/icon/01.png" alt="shape one" />
        </div>
        <div className='course-shape two'>
            <img src="/src/assets/images/shape-img/icon/02.png" alt="shape two" />
        </div>
        {/* Main sections */}
        <div className='container'>
            <div className='section-header'>
                <h2 className='title'>{ title }</h2>
                <div className='course-filter-group'>
                    <ul className='lab-ul'>
                        <li onClick={()=> setItems(productData)}>All</li>
                        <li onClick={()=> filterItem("Shoes")}>Shoes</li>
                        <li onClick={()=> filterItem("Bags")}>Bags</li>
                        <li onClick={()=> filterItem("Phones")}>Phones</li>
                        <li onClick={()=> filterItem("Beauty")}>Beauty</li>
                    </ul>
                </div>
            </div>
            {/* Section body */}
            <div className='section-wrapper'>
                <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter'>
                    {
                        items.map((product) => <div key={product.id} className='col'>
                            <div className='course-item style-4'>
                                <div className='course-inner'>
                                    <div className='course-thumb'>
                                        <img src={ product.imagUrl } alt="" />
                                        <div className='course-category'>
                                            <div className='course-cate'>
                                                <a href="#">{ product.cate }</a>
                                            </div>
                                            <div className='course-review'>
                                                <Rating />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Content */}
                                    <div className='course-content'>
                                        <Link to={`/shop/${product.id}`}><h6>{ product.title }</h6></Link>
                                    <div className='course-footer'>
                                        <div className='course-author'>
                                            <Link to="/" className='ca-name'>{ product.brand }</Link>
                                        </div>
                                        <div className='course-price'>
                                            { product.price }
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    </div>

  )
}

export default CategoryShowcase