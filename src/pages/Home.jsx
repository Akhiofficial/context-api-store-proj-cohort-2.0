import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { ProductDataContext } from '../Context/ProductContext'

const Home = () => {
  const navigate = useNavigate()
  const [productData] = useContext(ProductDataContext)

  // Get a few featured products for the dashboard (e.g. first 4)
  const featuredProducts = productData ? productData.slice(0, 4) : []

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section - Matching the "Hero" layout from the image but with our colors */}
      <div className='bg-[#FDF2E9] py-20 px-5 md:px-20'>
        {/* Using a warm beige background similar to the reference image */}
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>

          {/* Left Content */}
          <div className='flex flex-col items-start space-y-6'>
            <span className='bg-yellow-300 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide'>
              Weekend Discount
            </span>
            <h1 className='text-5xl md:text-7xl font-black text-gray-900 leading-tight'>
              BEST DEALS <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'>
                ENDLESS STYLE
              </span>
            </h1>
            <p className='text-lg text-gray-600 max-w-md'>
              Discover the best fashion across endless options, offering quality and unbeatable variety daily.
            </p>
            <button
              onClick={() => navigate('/product')}
              className='bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-transform transform hover:scale-105 shadow-lg'
            >
              Explore Deals
            </button>

            {/* Decorative dots/lines from image */}
            <div className='flex gap-2 mt-4'>
              <div className='w-8 h-1 bg-gray-900 rounded-full'></div>
              <div className='w-2 h-1 bg-gray-400 rounded-full'></div>
              <div className='w-2 h-1 bg-gray-400 rounded-full'></div>
            </div>
          </div>

          {/* Right Image */}
          <div className='relative flex justify-center'>
            {/* Circle Background */}
            <div className="absolute inset-0 bg-white rounded-full opacity-50 blur-3xl transform scale-75"></div>
            <img
              src="https://images.pexels.com/photos/27603276/pexels-photo-27603276.jpeg"
              alt="Fashion Hero"
              className="relative z-10 w-[400px] h-[500px] object-cover rounded-[2rem] shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Featured/Branded Deals Section */}
      <div className='max-w-7xl mx-auto py-16 px-5'>
        <div className='flex justify-between items-end mb-8'>
          <h2 className='text-3xl font-bold text-gray-900 uppercase tracking-tighter'>
            Branded Deals
          </h2>
          <button
            onClick={() => navigate('/product')}
            className='text-sm font-semibold text-blue-600 hover:text-blue-800 underline'
          >
            View All
          </button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {featuredProducts.map((item, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/product/${item.id}`)}
              className='bg-white p-4 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100'
            >
              <div className='h-48 flex items-center justify-center p-4 bg-gray-50 rounded-lg mb-4 relative overflow-hidden'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300'
                />
                <div className='absolute bottom-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded shadow-sm'>
                  ★ {item.rating?.rate}
                </div>
              </div>

              <h3 className='font-bold text-gray-800 line-clamp-1 mb-1 group-hover:text-blue-600'>
                {item.title}
              </h3>
              <p className='text-xs text-gray-500 mb-3 uppercase'>{item.category}</p>

              <div className='flex justify-between items-center'>
                <span className='text-lg font-black text-green-600'>${item.price}</span>
                <button className='bg-gray-100 p-2 rounded-full hover:bg-gray-200'>
                  🛒
                </button>
              </div>
            </div>
          ))}

          {/* Loading Skeletons if no data */}
          {featuredProducts.length === 0 && Array(4).fill(0).map((_, i) => (
            <div key={i} className='bg-white p-4 rounded-xl shadow-sm border border-gray-100 animate-pulse'>
              <div className='h-48 bg-gray-200 rounded-lg mb-4'></div>
              <div className='h-4 bg-gray-200 rounded w-3/4 mb-2'></div>
              <div className='h-4 bg-gray-200 rounded w-1/2'></div>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default Home