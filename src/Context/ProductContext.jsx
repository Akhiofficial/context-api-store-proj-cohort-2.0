import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { getAllProductsData } from '../api/ProductApi'

export const ProductDataContext = createContext()



const ProductContext = ({ children }) => {

    const [productData, setProductData] = useState([]);

    // data from api/ProductApi 
    const setData = async () => {

        setProductData(await getAllProductsData())

    }


    useEffect(() => {
        setData()
    }, [])

    return (
        <ProductDataContext.Provider value={[productData, setProductData]}>
            {children}
        </ProductDataContext.Provider>
    )
}

export default ProductContext