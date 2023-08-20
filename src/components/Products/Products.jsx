import React, { useState, useEffect } from 'react';
import { getproducts } from '../../services/todo.service';
import 'bootstrap/dist/css/bootstrap.min.css';
import './products.css'

const Products = () => {
    const [productsData, setProductsData] = useState([]);

   const getData = async () =>{
    let data = await getproducts();
    const {products} = data;
    setProductsData(products); 
   }

   useEffect(()=>{
    getData()
},
[])
    return (
        <div className="container text-center">
            <div className="row equal-height justify-content-center p-6">
            {productsData.map((productData) => (
                <div className="col-lg-4 col-sm-6 mb-5 " key={productData.id}>
                 <div className="card animated-border">
                  <img src={productData.thumbnail} alt="" className="card-img-top" />
                    <div className="card-body justify-content-center">
                        <h5 className="card-title">{productData.title}</h5>
                         <p className="card-text">{productData.description}</p>
                         <p className="card-title">${productData.price}</p>
                    </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
