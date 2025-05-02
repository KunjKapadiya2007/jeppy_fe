import './App.css'
import Navbar from "./components/global/navbar.jsx";
import Footer from "./components/global/footer.jsx";
import Productss from "./pages/homepage/productss.jsx";
import About from "./pages/homepage/about.jsx";
import Milestonee from "./pages/homepage/milestonee.jsx";
import Ourprocess from "./pages/ourProcess/ourprocess.jsx";
import {Routes , Route} from "react-router-dom";

function App() {

    return (
        <>
            <Navbar/>
            <Productss/>
            <About/>
            <Milestonee/>
            <Routes>
                {/*<Route path="/products" element={<Products/>}/>*/}
                <Route path="/process" element={<Ourprocess/>}/>
                {/*<Route path="/about" element={<About/>}/>*/}
                {/*<Route path="/contact" element={<Contact/>}/>*/}
            </Routes>
            {/*<Footer />*/}
        </>
    )
}

export default App
