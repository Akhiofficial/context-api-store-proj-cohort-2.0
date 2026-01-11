import React, { useContext } from 'react'
import { ProductDataContext } from '../Context/ProductContext'
import { Link } from 'react-router-dom'



const Products = () => {

    const [productData] = useContext(ProductDataContext)
    return (

        <div className='p-5 bg-gray-100 min-h-screen'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {productData.map(function (elem, idx) {
                    return (
                        <div key={idx} className='bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-between'>
                            <img className='h-40 object-contain mb-4' src={elem.image} alt={elem.title} />
                            <Link to={`/product/${elem.id}`} className='font-semibold text-lg text-center text-slate-700 leading-tight line-clamp-2'>{elem.title}</Link>
                            <p className='mt-2 font-bold text-green-600'>${elem.price}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products