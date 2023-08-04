
import HeroSlider from '../Componants/HeroSlider'
import Categories from '../Componants/Categories'
import HomeProducts from '../Componants/HomeProducts'
import FeaturedProducts from '../Componants/FeaturedProducts'
import { useCartContext } from '../Contex/CartData'


const Home = ({cartItems, setCartItems}) => {  
  const HeroImg = window.innerWidth>600 ? "HomeSlider.png": "MobileHomeSlider.png";
  return (
    <div>        
       
        {/* <Categories /> */}
        <div className="slider mb-6">
        <img src={`./${HeroImg}`} className='w-full' alt="" />
      </div>
        <HomeProducts cartItems={cartItems} setCartItems={setCartItems} />
        <FeaturedProducts />
    </div>
  )
}

export default Home