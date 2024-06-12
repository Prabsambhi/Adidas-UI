import React from 'react';
import ProductCard from '../Components/productcard';
import products from '../data/productdata'; 

const ProductList = () => {
    return (
        <div className="mx-16 mb-20 mt-8 overflow-x-auto whitespace-nowrap" style={{maxHeight: '400px', overflowY: 'auto'}}>
            <div className="flex space-x-4 mb-12">
                {products.map((product, index) => (
                    <div key={index} className="flex-none w-48">
                        <ProductCard
                            name={product.name}
                            price={product.price}
                            description={product.description}
                            imagePath={product.imagePath}
                            discount={product.discount}
                            discounted={product.discounted}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;


