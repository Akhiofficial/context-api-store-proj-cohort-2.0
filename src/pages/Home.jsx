
import { useNavigate } from "react-router-dom"



const Home = () => {
    const navigate = useNavigate()

  return (
    <div className="flex justify-center items-center h-screen gap-2">
      home page

      <button className="bg-blue-500 text-white px-4 py-2 rounded"
      onClick={() => navigate('/product')}
      >Explore Products</button>
    </div>
  )
}

export default Home