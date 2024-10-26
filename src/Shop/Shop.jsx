import React, { useState } from 'react'
import PageBanner from '../Components/PageBanner'
import Data from '../products.json';
import ProductCards from './ProductCards';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';

const showResults = "Showing 01 - 12 of 140 results";

const Shop = () => {
    
	const [GridList, setGridList] = useState(true);

	const [products, setProducts] = useState(Data);
	console.log(products);

	// Pigination here

	const [curPage, setcurPage] = useState(1);
	
	// Products to be showed per page

	const productsPerPage = 12;

	// Index Of last products

	const indexOfLastProduct = curPage * productsPerPage;

	// Index of first product

	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

	// Currents products

	const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

	// Function to change the current page

	const paginate = (pageNumber) => {

		setcurPage(pageNumber);
	};

	// End Of paginations


	// Filter product based on category in right side col

	const [selectedCategory, setSelectedCategory] = useState("All");

	const menuItems = [...new Set(Data.map((val) => val.category))];

	// Functionality

	const filterItem = (curcat) => {

		// Set new item

		const newItem = Data.filter((newVal) =>{
			return newVal.category === curcat;
		})

		setSelectedCategory(curcat);
		setProducts(newItem);
	}
	

  return (

    <div>
        <PageBanner title='Our shop page' currentPage='Shop' />

        {/* Shop main page */}
          <div className='shop-page padding-tb'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-8 col-12'>
							<article>
								{/* Layout and title */}

								<div className='shop-title d-flex flex-wrap justify-content-between'>
									<p className='text-capitalize'>{ showResults }</p>
									<div className={ `product-view-mode ${ GridList ? "gridActive" : "listActive" }` }>
										<a className='grid' onClick={() => setGridList(!GridList)}>
											<i className='icofont-ghost'></i>
										</a>
										
										<a className='list' onClick={() => setGridList(!GridList)}>
											<i className='icofont-listine-dots'></i>
										</a>
										
									</div>
								</div>

								{/* Products cards */}

								<div>
									<ProductCards GridList={ GridList } products={ currentProducts } />
								</div>

								<Pagination
								productsPerPage={ productsPerPage }
								totalProducts={ products.length }
								paginate={ paginate }
								activePage={ curPage }
								 />

							</article>
						</div>
						<div className='col-lg-4 col-12'>
							<aside>
								<Search products={ products } GridList={ GridList } />
								<ShopCategory
									filterItem={ filterItem }
									setItem ={ setProducts }
									menuItems={ menuItems }
									setProducts={ setProducts }
									selectedCategory={ selectedCategory }
								/>
							</aside>
						</div>
					</div>
				</div>
          </div>
    </div>

  )

}

export default Shop