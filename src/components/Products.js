import React from 'react';
import { useProductProvider } from '../context/ProductProvider'

const Products = () => {
    const { data, dispatch } = useProductProvider();

    function addtoCart() {
        dispatch({ action: "ADD_TO_CART", payload: data });
      }
    
    return (
        <div>
            <div className="products grid grid-cols-4 gap-10 my-6">
            {data && data.map((product) =>
                <div className="content border border-gray-600 rounded-2xl border-opacity-10" key={product.itemId}>
            <img className="img h-72 w-72 object-contain mx-auto mt-2" src={product.image} alt={product.brand}/>
            <div className="text-center">
                <h2 className="text-lg font-bold py-2">{product.title}</h2>
                <span className="py-1 text-sm px-4">{product.description}</span>
            </div>
            <div className="flex justify-center items-center mt-4">
                <span className="bg-gray-200 px-4 rounded-full text-md mx-2">₹ {product.price }</span>
                <span className="bg-gray-200 px-4 rounded-full text-sm mx-2">{product.discount}% off</span>
            </div>
            <div className="justify-center mx-auto text-center mt-2">
                 <button onClick={() => addtoCart()} className=" bg-gray-700 text-white py-1 px-4 my-2 rounded-full font-bold">Add to cart</button>
            </div>
        </div>
            )}
        </div>
        </div>
    )
}

export default Products
