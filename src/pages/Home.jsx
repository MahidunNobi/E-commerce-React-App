
import HeroSlider from '../Componants/HeroSlider'
import Categories from '../Componants/Categories'
import HomeProducts from '../Componants/HomeProducts'
import FeaturedProducts from '../Componants/FeaturedProducts'
import { useCartContext } from '../Contex/CartData'


const Home = ({cartItems, setCartItems}) => {  
  return (
    <div>        
       
        {/* <Categories /> */}
        <HomeProducts cartItems={cartItems} setCartItems={setCartItems} />
        <FeaturedProducts />
    </div>
  )
}

export default Home