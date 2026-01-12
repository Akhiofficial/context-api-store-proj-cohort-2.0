import React, { useContext } from 'react'
import { ProductDataContext } from '../Context/ProductContext'
import { Link, useNavigate } from 'react-router-dom'



const Products = () => {

    const [productData] = useContext(ProductDataContext)
    const navigate = useNavigate()

    return (
        <div className='min-h-screen bg-gray-100'>
            {/* Back Button */}
            <div className='max-w-7xl mx-auto pt-6 px-4'>
                <button
                    onClick={() => navigate(-1)}
                    className='px-4 py-2 bg-white hover:bg-gray-50 border border-gray-300 rounded-md text-gray-700 shadow-sm transition-colors'
                >
                    &larr; Back
                </button>
            </div>

            {(!productData || productData.length === 0) ? (
                <div className='flex justify-center items-center h-[50vh]'>
                    <h1 className='text-2xl font-bold text-gray-400'>Loading Products...</h1>
                </div>
            ) : (
                <div className='max-w-7xl mx-auto p-4'>
                    <h1 className='text-3xl font-bold text-gray-800 mb-8 pl-2 border-l-4 border-blue-500 leading-none'>Our Products</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {productData.map(function (elem, idx) {
                            return (
                                <div key={idx} className='bg-white p-4 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between group'>
                                    <div className='h-48 w-full flex items-center justify-center overflow-hidden mb-4 p-2'>
                                        <img
                                            className='h-full object-contain group-hover:scale-110 transition-transform duration-300'
                                            src={elem.image}
                                            alt={elem.title}
                                        />
                                    </div>
                                    <Link to={`/product/${elem.id}`} className='font-semibold text-lg text-center text-gray-800 hover:text-blue-600 leading-tight line-clamp-2 mb-2'>
                                        {elem.title}
                                    </Link>
                                    <div className='w-full flex justify-between items-center mt-2 px-2'>
                                        <p className='font-bold text-xl text-green-600'>${elem.price}</p>
                                        <span className='text-xs text-gray-400 uppercase tracking-wide border px-2 py-1 rounded'>{elem.category}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Products