import React, { useState } from 'react'
import productData from '../products.json';
import { Link } from 'react-router-dom';
import SelectedCategory from '../Components/SelectedCategory';

const title = (
    <h1 className='text-capitalize'>Search your one from <span>thousand</span> of products!</h1>
);

const description = "We have the largest collections of products";

const bannerList = [

    {
        iconName:"iconfont-users-alt-4",
        text:"2.5 Million customers",
    },

    {
        iconName:"iconfont-notification",
        text:"More than 5000 merchants",
    },

    {
        iconName:"iconfont-globe",
        text:"Buy anything online",
    },

];

const Banner = () => {

    const [searchInput, setSearchInput] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(productData);
    // console.log(productData);

    // Search handle change function

    const handleSearchChange = (e) => {

       const searchTerm = e.target.value;

       setSearchInput(searchTerm);

    //    Filtered products based on key term searched

    const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    setFilteredProducts(filtered);
        
    };
    

  return (

    <div className='banner-section style-4'>
        <div className='container'>
            <div className='banner-content'>
                { title }
                {/* Search engine */}
                <form>
                    <SelectedCategory select={"all"} />
                    <input type="text" name='search' id='search' placeholder='Search your best product...' value={searchInput} onChange={handleSearchChange} />
                    <button type='submit'>
                        <i className="iconfont-search"></i>
                    </button>
                </form>
                <p>{ description  }</p>
                <ul className='lab-ul'>
                    {
                        searchInput && filteredProducts.map((product, i) => <li key={i}>
                            <Link to={`/shop/${product.id} `}>{ product.name}</Link>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    </div>

  )

}

export default Banner