import React, { useContext } from 'react'
import { ProductDataContext } from '../Context/ProductContext'
import { useParams, useNavigate } from 'react-router-dom'


const ProductDetails = () => {

    const [productData] = useContext(ProductDataContext)
    const { id } = useParams()
    const navigate = useNavigate()

    let SelectedProduct = null
    if (productData && productData.length > 0) {
        SelectedProduct = productData.find((item) => item.id == id)
    }

    if (!SelectedProduct) {
        return (
            <div className='min-h-screen bg-gray-100 flex justify-center items-center'>
                <h1 className='text-2xl font-bold text-gray-400'>Loading Product...</h1>
            </div>
        )
    }

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

            <div className='max-w-7xl mx-auto p-4'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 shadow-lg rounded-lg mt-6">
                    <div className="flex justify-center items-center p-5">
                        <img className="h-96 object-contain" src={SelectedProduct.image} alt={SelectedProduct.title} />
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">{SelectedProduct.title}</h1>

                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                                {SelectedProduct.category}
                            </span>
                            <span className="flex items-center">
                                <span className="text-yellow-400 mr-1">★</span>
                                {SelectedProduct.rating?.rate} / 5 ({SelectedProduct.rating?.count} reviews)
                            </span>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-lg border-b pb-6">{SelectedProduct.description}</p>

                        <h2 className="text-5xl text-green-600 font-bold">${SelectedProduct.price}</h2>

                        <div className="flex space-x-4 pt-4">
                            <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-6 rounded-lg transition duration-300 shadow hover:shadow-md text-lg">
                                Add to Cart
                            </button>
                            <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition duration-300 shadow hover:shadow-md text-lg">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails