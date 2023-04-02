import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../App.css"


const ProductList = () => {

  const [products, setProducts] = useState([]);
  const Style = { marginLeft: '10%', marginRight: '10%', padding: 15 };
  const S1 = { margin: 20 };
  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    let result = await fetch('http://localhost:5500/products');
    result = await result.json();
    console.log(result);
    setProducts(result);
  }

  // console.log(products[0])

  return (
    <>


      <div class="row row-cols-1 row-cols-md-3 row-cols-sm-1 row-cols-xs-1 g-4" style={Style} >

        {
          products.map((item, index) => (
            <div class="col">
              <div class="card" style={S1}>

                <img style={{ height: '210px', width: '100%' }} src={item.imagelink} class="card-img-top" alt="..." />

                <div class="card-body">

                  <h5 class="card-title">{item.name}</h5>
                  <h6><b>{item.category}</b></h6>
                  <h6><b>{item.company}</b></h6>
                  <h4 class="mb-1 me-1">${item.price}</h4>
                  <p class="card-text">{item.discription}</p>
                  <button class="btn btn-primary btn-sm" type="button"><Link style={{ color: "Black", textDecoration: "none" }} to="/detail" state={{
                    id: item._id,
                    name: item.name,
                    price: item.price,
                    category: item.category,
                    company: item.company,
                    imagelink: item.imagelink,
                    discription: item.discription,
                    comment: item.comment,
                  }} >Details</Link></button>
                  <button style={{ marginLeft: '120px' }} class="btn btn-outline-primary btn-sm mt-2" type="button">
                    Buy Now
                  </button>

                </div>
              </div>

            </div >


          ))
        }
      </div>
    </>
  )
}
export default ProductList;