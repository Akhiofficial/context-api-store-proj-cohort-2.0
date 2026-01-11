import React, { useContext } from 'react'
import { ProductDataContext } from '../Context/ProductContext'
import { useParams } from 'react-router-dom'


const ProductDetails = () => {
    
const [productData] = useContext(ProductDataContext)

const {id} = useParams()

const SelectedProduct = productData.find((item)=> item.id === id)

console.log(id)

    return (
        <div> 
            ProductDetails
            {productData.map((item,index)=>{
                return(
                    <div key={index}>
                        <img src={item.image} alt={item.title} />
                        <h1>{item.title}</h1>
                        <p>{item.price}</p>
                        <p>{item.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductDetails