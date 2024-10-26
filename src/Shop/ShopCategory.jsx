import React from 'react'
import Data from '../products.json'

const ShopCategory = ({ filterItem, setItem, menuItems, setProducts, selectedCategory }) => {

  return (

    <>
        <div className='widget-header'>
            <h5 className='text-capitalize ms-2'>All categories</h5>
        </div>
        <div>
            <button onClick={() => setProducts(Data)}  className={ `m-2 ${ selectedCategory === "All" ? "bg-warning" : "" }` }></button>
            {
                menuItems.map((val, id) =>{
                    return(
                        <button className={ `m-2 ${ selectedCategory === val ? "bg-warning" : "" }` } key={id} onClick={() => filterItem(val)}>{ val }</button>
                    )
                })
            }
        </div>
    </>

  )

}

export default ShopCategory