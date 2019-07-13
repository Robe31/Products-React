import React from 'react'
import products from './productList'
import '../styles/product.scss'
function Product(){
    const product = products.map((item) => {
        return (
            <div key={item.id} className="product">
                <img src={item.imgUrl} alt={item.name} className="product_img"/>
                <div className="product_text">
                    <h3 className="product_name">{item.name}</h3>
                    <p className="product_price">{item.price}</p>
                    <p className="product_desc">{item.desc}</p>
                </div>
            </div>
        )
    })
    return (
        product
    )
}
export default Product