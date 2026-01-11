import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const ProductDataContext = createContext()


const ProductContext = ({ children }) => {
    const [productData, setProductData] = useState([]);

    const getdata = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')

        setProductData(response.data)
        console.log(response);


    }

    useEffect(() => {
        getdata()
    }, [])

    return (
        <ProductDataContext.Provider value={[productData, setProductData]}>
            {children}
        </ProductDataContext.Provider>
    )
}

export default ProductContext