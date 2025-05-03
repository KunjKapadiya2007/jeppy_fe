import './App.css'
import Navbar from "./components/global/navbar.jsx";
import {Routes , Route} from "react-router-dom";
import Home from "./pages/home.jsx";
import Ourprocess from "./pages/ourprocess.jsx";
import About from "./pages/about.jsx";
import OurProducts from "./pages/ourProducts.jsx";
import ProductDetails from "./pages/productDetails.jsx";
import Contactus from "./pages/contactus.jsx";
import Footer from "./components/global/footer.jsx";
import ProductSlider from "./components/productDetails/productSlider.jsx";

function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<OurProducts/>}/>
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/product/:id" element={<ProductSlider />} />
                <Route path="/process" element={<Ourprocess/>}/>
                <Route path="/contact" element={<Contactus/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            <Footer />
        </>
    )
}

export default App
