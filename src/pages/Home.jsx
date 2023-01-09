import Navbar from "../components/Navbar"
import Slide from "../components/Slide"
import Announce from "../components/Announce"
import Categories from "../components/Categories"
import Products from "../components/Products"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
        <Navbar />
        <Slide />
        <Categories />
        <Products />
        <Footer />
    </>
  )
}

export default Home