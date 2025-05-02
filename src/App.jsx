import './App.css'
import Navbar from "./components/global/navbar.jsx";
import Footer from "./components/global/footer.jsx";
import Productss from "./pages/homepage/productss.jsx";
import About from "./pages/homepage/about.jsx";
import Milestonee from "./pages/homepage/milestonee.jsx";

function App() {

  return (
    <>
<Navbar />
        <Productss/>
        <About/>
        <Milestonee/>
        {/*<Router>*/}
        {/*    <Routes>*/}
        {/*        <Route path="/products" element={<Products />} />*/}
        {/*        <Route path="/process" element={<Process />} />*/}
        {/*        <Route path="/about" element={<About />} />*/}
        {/*        <Route path="/contact" element={<Contact />} />*/}
        {/*    </Routes>*/}
        {/*</Router>*/}
        {/*<Footer />*/}
    </>
  )
}

export default App
